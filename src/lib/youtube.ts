import { YOUTUBE_CHANNEL_ID, YOUTUBE_MAX_VIDEOS } from '../i18n/types';

export type YouTubeVideo = {
  id: string;
  title: string;
  displayTitle: string;
  published: string;
  thumbnail: string;
  watchUrl: string;
  embedUrl: string;
};

function cleanTitle(raw: string): string {
  return raw
    .replace(/#[\p{L}\p{N}_]+/gu, '')
    .replace(/\s+SubScan\s*$/i, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function parseEntries(xml: string): YouTubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
  const videos: YouTubeVideo[] = [];

  for (const entry of entries) {
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
    const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
    const thumbnail =
      entry.match(/<media:thumbnail url="([^"]+)"/)?.[1] ??
      (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '');

    if (!id || !title || !published) continue;

    videos.push({
      id,
      title,
      displayTitle: cleanTitle(title) || title,
      published,
      thumbnail,
      watchUrl: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    });
  }

  return videos;
}

export async function getChannelVideos(limit = YOUTUBE_MAX_VIDEOS): Promise<YouTubeVideo[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

  try {
    const response = await fetch(feedUrl, {
      headers: { Accept: 'application/atom+xml, application/xml, text/xml' },
    });

    if (!response.ok) {
      console.warn(`[youtube] RSS fetch failed: ${response.status}`);
      return [];
    }

    const xml = await response.text();
    return parseEntries(xml).slice(0, limit);
  } catch (error) {
    console.warn('[youtube] RSS fetch error:', error);
    return [];
  }
}
