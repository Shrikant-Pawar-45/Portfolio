import React from 'react';
import '../css/ShimmerHero.css';

const ShimmerHero = () => {
  return (
    <div className="shimmer-hero">
      <div className="shimmer-hero-left">
        <div className="shimmer-block">
          <div className="shimmer-block-inner">
            <div className="shimmer-line small" />
            <div className="shimmer-line title" />
            <div className="shimmer-line subtitle" />
            <div className="shimmer-row">
              <div className="shimmer-line btn" />
              <div className="shimmer-line btn" />
            </div>
            <div className="shimmer-row">
              <div className="shimmer-line small" style={{ width: 28, height: 28, borderRadius: 6 }} />
              <div className="shimmer-line small" style={{ width: 28, height: 28, borderRadius: 6 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="shimmer-hero-right">
        <div className="shimmer-avatar" />
      </div>
    </div>
  );
};

export default ShimmerHero;
