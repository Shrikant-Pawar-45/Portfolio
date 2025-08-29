import React, { useEffect, useState } from 'react';
import '../css/NameIntro.css';

export default function NameIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show only once per session
    const seen = sessionStorage.getItem('introSeen');
    if (!seen) {
      setShow(true);
      sessionStorage.setItem('introSeen', '1');
    }

    let t1, t2;
    if (!seen) {
      // Fade out after animations
      t1 = setTimeout(() => {
        const el = document.querySelector('.name-intro');
        if (el) el.classList.add('hide');
      }, 2200);
      t2 = setTimeout(() => setShow(false), 2800);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="name-intro" aria-hidden>
      <div className="intro-wrap">
        <span className="intro-bracket intro-left"><b>&lt;</b></span>
        <h1 className="intro-name" role="img" aria-label="Shrikant">
          <span className="name-stroke">Shrikant</span>
          <span className="name-shine" aria-hidden>Shrikant</span>
        </h1>
        <span className="intro-bracket intro-right"><b>/&gt;</b></span>
      </div>
      <div className="intro-sub">Front‑End Developer</div>
      <div className="intro-particles" />
    </div>
  );
}
