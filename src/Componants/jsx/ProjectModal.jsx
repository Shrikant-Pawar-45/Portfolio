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
  const splitObjectiveString = (str) => {
    if (!str) return [];
    let list = str
      .replace(/\r?\n/g, '\n')              // normalize newlines
      .replace(/[;|•]/g, '\n')               // treat ; | • as separators
      .replace(/([.!?])\s+/g, '$1\n')       // break sentences after . ! ?
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    // Fallback splits when no sentence punctuation provided
    if (list.length <= 1) {
      const byComma = str.split(',').map((s) => s.trim()).filter(Boolean);
      if (byComma.length > 1) {
        list = byComma;
      } else {
        const byAnd = str.split(/\s+and\s+/i).map((s) => s.trim()).filter(Boolean);
        if (byAnd.length > 1 && byAnd.every((p) => p.length >= 6)) {
          list = byAnd;
        }
      }
    }
    return list;
  };

  let objectiveList = [];
  if (Array.isArray(objective)) {
    const arr = objective.filter(Boolean).map((o) => String(o).trim()).filter(Boolean);
    objectiveList = arr.length === 1 ? splitObjectiveString(arr[0]) : arr;
  } else if (typeof objective === 'string') {
    objectiveList = splitObjectiveString(objective);
  }
  const objectiveInline = objectiveList.join(' | ');

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title || 'Project details'}>
      <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" title="Close">
          <FiX />
        </button>
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="modal-project-image" />
        ) : null}
        <h4 style={{ color: 'var(--text-color)', marginBottom: '0.8rem' }}>{title}</h4>
        <p style={{ color: 'var(--text-color)' }}>{description || '—'}</p>

        <div className="meta-block objective-block" style={{ marginTop: '0.6rem', width: '100%' }}>
          <div className="meta-label" style={{ textAlign: 'left', alignSelf: 'flex-start' }}><b>Objectives:</b></div>
          {objectiveList.length > 1 ? (
            <ul className="project-description" style={{ margin: 0, paddingLeft: '1.2rem', listStyle: 'disc', color: 'var(--text-color)' }}>
              {objectiveList.map((o, i) => (
                <li key={i} style={{ textAlign: 'justify' }}><span style={{ color: 'var(--text-color)' }}>{o}</span></li>
              ))}
            </ul>
          ) : (
            <p className="project-description" style={{ margin: 0, color: 'var(--text-color)', textAlign: 'justify' }}>{objectiveInline || 'Not specified'}</p>
          )}
        </div>

        <div className="modal-inline-meta" style={{ marginTop: '1rem', width: '100%' }}>
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
