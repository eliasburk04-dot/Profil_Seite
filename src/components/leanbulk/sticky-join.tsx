'use client';

import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { JOINED_EVENT } from './barbell';

/** Mobile shortcut to the closing form once the hero form has scrolled away. */
export function StickyJoin({ heroFormId, finalFormId }: { heroFormId: string; finalFormId: string }) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroFormId);
    const final = document.getElementById(finalFormId);
    if (!hero || !final) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting || entry.boundingClientRect.top > 0);
        if (entry.target === final) setFinalVisible(entry.isIntersecting);
      }
    });
    observer.observe(hero);
    observer.observe(final);
    const onJoined = () => setJoined(true);
    window.addEventListener(JOINED_EVENT, onJoined);
    try {
      if (window.localStorage.getItem('leanbulk-joined')) setJoined(true);
    } catch {
      // ignore blocked storage
    }
    return () => {
      observer.disconnect();
      window.removeEventListener(JOINED_EVENT, onJoined);
    };
  }, [heroFormId, finalFormId]);

  const shown = !heroVisible && !finalVisible && !joined;

  return (
    <div className={`lb-sticky${shown ? ' lb-sticky--shown' : ''}`} aria-hidden={!shown}>
      <a href="#warteliste" className="lb-button lb-button--block" tabIndex={shown ? 0 : -1}>
        Auf die Warteliste <ArrowDown aria-hidden="true" />
      </a>
    </div>
  );
}
