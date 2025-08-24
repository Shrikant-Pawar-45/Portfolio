import React, { useEffect } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';
import '../css/Main.css';

export default function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    if (open) {
      const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
      window.addEventListener('keydown', onKey);
      // lock background scroll
      document.body.classList.add('modal-open');
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKey);
        document.body.classList.remove('modal-open');
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open, onClose]);

  if (!open || !project) return null;

  const {
    title,
    description,
    objective,
    status,
    skills,
    type,
    link,
    image,
    imageUrl,
  } = project || {};

  const imgSrc = image || imageUrl;
  const skillsList = Array.isArray(skills)
    ? skills
    : typeof skills === 'string' && skills.includes(',')
      ? skills.split(',').map((s) => s.trim()).filter(Boolean)
      : skills ? [String(skills)] : [];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title || 'Project details'}>
      <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" title="Close">
          <FiX />
        </button>
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="modal-project-image" />
        ) : null}
        <h3 style={{ color: 'var(--text-color)', marginBottom: '0.8rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-color)' }}>{description || '—'}</p>

        <div className="modal-inline-meta">
          <div className="meta-item-inline"><b>Objective:</b> <span style={{ color: 'var(--text-color)',textAlign: 'justify' }}>{objective || 'Not specified'}</span></div>
          <div className="meta-item-inline"><b>Type:</b> <span style={{ color: 'var(--text-color)' }}>{type || 'Not specified'}</span></div>
          
          <div className="meta-item-inline" style={{ marginLeft: 'auto' }}><b>Status:</b> <span style={{ color: 'var(--text-color)',justifyContent: 'wrap' }}>{status || 'Not specified'}</span></div>
          <div className="meta-item-inline" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <b>Skills:</b>
            {skillsList.length ? (
              <div className="skill-chips inline">
                {skillsList.map((s, i) => (
                  <span key={i} className="skill-chip">{s}</span>
                ))}
              </div>
            ) : (
              <span>Not specified</span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', width: '100%', gap: '0.6rem', marginTop: '0.2rem' }}>
          {link && link !== '#' ? (
            <a className="verify-btn" href={link} target="_blank" rel="noreferrer">
              <FiExternalLink style={{ marginRight: 6 }} /> Visit
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
