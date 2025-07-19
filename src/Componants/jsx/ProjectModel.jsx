import React from 'react';

const ProjectModel = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} title="Close">×</button>
        <img src={project.image} alt={project.title} className="modal-project-image" />
        <h2 className="modal-project-title">{project.title}</h2>
        <p className="modal-project-description">{project.description}</p>
        <p className="modal-project-objective"><strong>Objective:</strong> {project.objective}</p>
        <p className="modal-project-techstack"><strong>Tech Stack:</strong> {project.techstack}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-visit-btn">
          Visit Site ↗
        </a>
      </div>
    </div>
  );
};

export default ProjectModel;