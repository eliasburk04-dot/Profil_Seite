import { ImageResponse } from 'next/og';
import { site } from '@/content';
export const alt = site.metadata.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#f8f6f3',
        color: '#183e37',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '70px',
      }}
    >
      <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>{site.name}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 84,
          letterSpacing: '-3px',
          lineHeight: 1.1,
        }}
      >
        <span>{site.home.headline[0]}</span>
        <span style={{ color: '#14776d' }}>{site.home.headline[1]}</span>
      </div>
      <div style={{ fontSize: 28, display: 'flex' }}>{site.footer.description}</div>
    </div>,
    size
  );
}
