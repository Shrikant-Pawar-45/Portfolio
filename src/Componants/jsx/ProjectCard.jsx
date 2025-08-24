import React from 'react';
import { FiExternalLink, FiCalendar, FiEye } from 'react-icons/fi';
import '../css/Main.css';

export default function ProjectCard({ image, title, description, link, start, end, verifyUrl, onViewDetails }) {
  return (
    <div className="project-card">
      {image ? <img src={image} alt={title} className="project-image" /> : null}
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
      </div>
      {(start || end) ? (
        <div className="project-meta">
          <FiCalendar className="icon" />
          <span>{start}{end ? ` - ${end}` : ''}</span>
        </div>
      ) : null}
      {description ? <p className="project-description">{description}</p> : null}
      {( onViewDetails) ? (
        <div className="project-actions">
          {onViewDetails ? (
            <a type="button" className="verify-btn" title="View Details" onClick={onViewDetails} style={{cursor: 'pointer' }}>
              <FiEye />
              <span>View</span>
            </a>
          ) : null}
          
        </div>
      ) : null}
    </div>
  );
}
