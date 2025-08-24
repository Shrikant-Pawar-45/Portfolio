import React, { useState, useEffect, useRef } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../css/GoToTop.css';
import { ArrowUp } from 'react-bootstrap-icons';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tickingRef = useRef(false);
  const thresholdRef = useRef(200);

  const computeThreshold = () => {
    const h = window.innerHeight || 800;
    // Dynamic threshold: 40% of viewport height, clamped between 120 and 300
    thresholdRef.current = Math.min(300, Math.max(120, Math.floor(h * 0.4)));
  };

  const onScroll = () => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const shouldShow = window.pageYOffset > thresholdRef.current;
        setIsVisible(shouldShow);
        tickingRef.current = false;
      });
    }
  };

  const scrollToTop = () => {
    NProgress.start();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // NProgress.done() will be called when the scroll is complete.
    // A simple timeout is used here to simulate the end of the scroll.
    setTimeout(() => {
      NProgress.done();
    }, 800); // Adjust timeout to match scroll duration
  };

  useEffect(() => {
    computeThreshold();
    window.addEventListener('resize', computeThreshold, { passive: true });
    window.addEventListener('orientationchange', computeThreshold, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize state on mount
    onScroll();
    return () => {
      window.removeEventListener('resize', computeThreshold);
      window.removeEventListener('orientationchange', computeThreshold);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="go-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="top-btn" title="Go to top">
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTop;
