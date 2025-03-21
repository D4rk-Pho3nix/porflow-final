export default function customImageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith('data:')) {
    return src;
  }
  
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }
  
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
} 