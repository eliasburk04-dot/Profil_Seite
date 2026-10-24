import { Phone } from './phone';

/** Deterministic EAN-like bar widths; purely illustrative, not a real product code. */
const BARS = [1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 1, 1, 2, 1, 3, 2, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 2, 3, 1, 1, 1];

function Barcode() {
  let x = 0;
  const rects = BARS.map((width, index) => {
    const rect = index % 2 === 0 ? <rect key={index} x={x} y={0} width={width} height={46} fill="#111" /> : null;
    x += width;
    return rect;
  });
  return (
    <svg viewBox={`0 0 ${x} 46`} className="scan__barcode" preserveAspectRatio="none" aria-hidden="true">
      {rects}
    </svg>
  );
}

export function ScanDemo() {
  return (
    <div className="lb-demo">
      <Phone label="Barcode-Scan in LeanBulk mit Beispielprodukt" dark>
        <div className="scan">
          <div className="scan__viewfinder">
            <div className="scan__pack">
              <span className="scan__pack-name">SKYR</span>
              <span className="scan__pack-sub">natur · 450 g</span>
              <div className="scan__code">
                <Barcode />
                <span>4 000000 000000</span>
              </div>
            </div>
            <span className="scan__frame" aria-hidden="true" />
            <span className="scan__line" aria-hidden="true" />
          </div>
          <div className="scan__sheet">
            <span className="scan__grabber" aria-hidden="true" />
            <p className="scan__title">Skyr natur</p>
            <p className="scan__meta">Open Food Facts · pro 100 g</p>
            <dl className="scan__macros">
              <div>
                <dt>kcal</dt>
                <dd>63</dd>
              </div>
              <div>
                <dt>Protein</dt>
                <dd>11 g</dd>
              </div>
              <div>
                <dt>KH</dt>
                <dd>4 g</dd>
              </div>
              <div>
                <dt>Fett</dt>
                <dd>0,2 g</dd>
              </div>
            </dl>
            <span className="scan__add">250 g zum Frühstück</span>
          </div>
        </div>
      </Phone>
    </div>
  );
}
