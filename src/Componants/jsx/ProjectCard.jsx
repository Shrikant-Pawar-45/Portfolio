import React, { useState } from 'react';
import '../css/Main.css';

export default function ProjectCard({ image, title, description, link}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-btn">
          Visit Site ↗
        </a>
    </div>
  );
}
