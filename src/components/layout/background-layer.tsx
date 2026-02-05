export function BackgroundLayer() {
  return (
    <div className="bg-stage" aria-hidden="true">
      <div className="bg-galaxy-motion">
        <div className="bg-galaxy" />
      </div>
      <div className="bg-orb-motion">
        <div className="bg-orb-anchor">
          <div className="bg-orb-float">
            <div className="bg-orb" />
          </div>
        </div>
      </div>
    </div>
  );
}
