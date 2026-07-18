import {
  YOUTUBE_CHANNEL_ID,
  YOUTUBE_MAX_SHORTS,
  YOUTUBE_MAX_VIDEOS,
} from '../i18n/types';

export type YouTubeVideo = {
  id: string;
  title: string;
  displayTitle: string;
  published: string;
  thumbnail: string;
  watchUrl: string;
  embedUrl: string;
  isShort: boolean;
};

export type ChannelVideos = {
  videos: YouTubeVideo[];
  shorts: YouTubeVideo[];
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
  const items: YouTubeVideo[] = [];

  for (const entry of entries) {
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
    const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
    const link = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1] ?? '';
    const thumbnail =
      entry.match(/<media:thumbnail url="([^"]+)"/)?.[1] ??
      (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '');

    if (!id || !title || !published) continue;

    const isShort = link.includes('/shorts/') || link.includes('youtube.com/shorts');

    items.push({
      id,
      title,
      displayTitle: cleanTitle(title) || title,
      published,
      thumbnail,
      watchUrl: isShort
        ? `https://www.youtube.com/shorts/${id}`
        : `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
      isShort,
    });
  }

  return items;
}

export async function getChannelVideosGrouped(): Promise<ChannelVideos> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
  const fetchLimit = YOUTUBE_MAX_VIDEOS + YOUTUBE_MAX_SHORTS + 10;

  try {
    const response = await fetch(feedUrl, {
      headers: { Accept: 'application/atom+xml, application/xml, text/xml' },
    });

    if (!response.ok) {
      console.warn(`[youtube] RSS fetch failed: ${response.status}`);
      return { videos: [], shorts: [] };
    }

    const xml = await response.text();
    const all = parseEntries(xml);

    return {
      videos: all.filter(item => !item.isShort).slice(0, YOUTUBE_MAX_VIDEOS),
      shorts: all.filter(item => item.isShort).slice(0, YOUTUBE_MAX_SHORTS),
    };
  } catch (error) {
    console.warn('[youtube] RSS fetch error:', error);
    return { videos: [], shorts: [] };
  }
}

/** @deprecated Use getChannelVideosGrouped */
export async function getChannelVideos(limit = YOUTUBE_MAX_VIDEOS): Promise<YouTubeVideo[]> {
  const grouped = await getChannelVideosGrouped();
  return [...grouped.videos, ...grouped.shorts].slice(0, limit);
}
