import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/content';
export const dynamic = 'force-static';
export const alt = site.metadata.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
const png = async (data: Promise<Buffer>) => `data:image/png;base64,${(await data).toString('base64')}`;
// Mirrors the hero stage: dark ink, mint second line and the fanned app views.
export default async function Image() {
  const [font, icon, today, weight, training] = await Promise.all([
    // Literal paths keep build tracing limited to these files.
    readFile(join(process.cwd(), 'public/fonts/nunito-sans-900.ttf')),
    png(readFile(join(process.cwd(), 'public/app-icon.png'))),
    png(readFile(join(process.cwd(), 'src/assets/og/today.png'))),
    png(readFile(join(process.cwd(), 'src/assets/og/weight.png'))),
    png(readFile(join(process.cwd(), 'src/assets/og/training.png'))),
  ]);
  const phone = (src: string, width: number, rotate: number, top: number) => (
    <div
      style={{
        display: 'flex',
        width,
        marginTop: top,
        padding: 6,
        borderRadius: 34,
        background: '#171b19',
        transform: `rotate(${rotate}deg)`,
        boxShadow: '0 30px 60px rgba(10, 31, 26, 0.5)',
      }}
    >
      <img src={src} width={width - 12} height={Math.round(((width - 12) * 956) / 440)} style={{ borderRadius: 28 }} />
    </div>
  );
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#183e37',
        backgroundImage:
          'radial-gradient(circle at 80% 100%, rgba(20, 119, 109, 0.9) 0%, rgba(20, 119, 109, 0) 55%)',
        color: '#f8f6f3',
        padding: '60px 0 0 72px',
        overflow: 'hidden',
        fontFamily: 'Nunito Sans',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: 600, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34 }}>
          <img src={icon} width={54} height={54} style={{ borderRadius: 13, marginRight: 16 }} />
          {site.name}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 86,
            letterSpacing: '-3.5px',
            lineHeight: 1,
            marginTop: 80,
          }}
        >
          <span>{site.home.headline[0]}</span>
          <span style={{ color: '#9bd0bb' }}>{site.home.headline[1]}</span>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#d1dfd6', marginTop: 40 }}>
          {site.metadata.title.split(' – ')[1]}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: 24 }}>
        <div style={{ display: 'flex', marginRight: -70 }}>{phone(weight, 210, -8, 120)}</div>
        <div style={{ display: 'flex' }}>{phone(today, 250, 0, 40)}</div>
        <div style={{ display: 'flex', marginLeft: -70 }}>{phone(training, 210, 8, 120)}</div>
      </div>
    </div>,
    { ...size, fonts: [{ name: 'Nunito Sans', data: font, weight: 900, style: 'normal' }] }
  );
}
