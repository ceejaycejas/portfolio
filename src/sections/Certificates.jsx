import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ShieldCheck, X, FileText, CheckCircle } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development Specialist',
    issuer: 'Davao del Sur State College',
    date: 'March 2026',
    credentialId: 'DSSC-FSWD-2026-089',
    skillsCovered: ['Laravel', 'PHP', 'API Integrations', 'MySQL', 'Database Normalization'],
    grade: 'Excellent'
  },
  {
    id: 2,
    title: 'Advanced Database Systems & Management',
    issuer: 'Oracle Academy / DSSC Curriculum',
    date: 'November 2025',
    credentialId: 'ORA-DBS-87391-PH',
    skillsCovered: ['SQL Queries', 'Relational Schemas', 'Indexing', 'Query Optimization'],
    grade: 'A+'
  },
  {
    id: 3,
    title: 'Modern Frontend Frameworks Certification',
    issuer: 'Developer Specialist Course',
    date: 'August 2025',
    credentialId: 'DEV-FE-99824-JS',
    skillsCovered: ['JavaScript ES6+', 'Responsive Layouts', 'CSS Glassmorphism', 'Web Accessibility'],
    grade: '98/100'
  }
];

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="certificates-section">
      <div className="container certificates-container">
        <motion.div 
          className="certificates-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="about-accent-line"></div>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card glass-card gradient-border-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="cert-top-glowing">
                <Award className="cert-award-icon" />
                <div className="cert-top-glow-effect"></div>
              </div>

              <div className="cert-body">
                <span className="cert-date">
                  <Calendar size={13} /> {cert.date}
                </span>
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-id-tag">ID: {cert.credentialId}</div>
              </div>

              <div className="cert-footer">
                <button 
                  className="btn btn-secondary cert-btn" 
                  onClick={() => setActiveCert(cert)}
                >
                  <FileText size={14} /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Certificate Verification Mockup */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div 
              className="cert-modal-content glass-card"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cert-modal-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-certificate-sheet">
                <div className="sheet-border">
                  <div className="sheet-header">
                    <ShieldCheck size={48} className="sheet-verify-icon" />
                    <h4>CERTIFICATE OF COMPLETION</h4>
                    <p className="sheet-sub">This credentials certifies that</p>
                  </div>
                  
                  <div className="sheet-recipient">
                    <h2>Cee Jay Cejas</h2>
                  </div>

                  <p className="sheet-desc">
                    has successfully met all academic and practical requirements and demonstrated expert knowledge to receive the title:
                  </p>

                  <h3 className="sheet-title">{activeCert.title}</h3>

                  <div className="sheet-issuer-row">
                    <div>
                      <span className="sheet-label">AUTHORIZED ISSUER</span>
                      <p className="sheet-value">{activeCert.issuer}</p>
                    </div>
                    <div>
                      <span className="sheet-label">DATE GRANTED</span>
                      <p className="sheet-value">{activeCert.date}</p>
                    </div>
                  </div>

                  <div className="sheet-footer-row">
                    <div className="sheet-skills-list">
                      <span className="sheet-label">SKILLS VALIDATED</span>
                      <div className="sheet-skills-tags">
                        {activeCert.skillsCovered.map((skill, sIdx) => (
                          <span key={sIdx} className="sheet-skill-badge"><CheckCircle size={10} /> {skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="sheet-status-box">
                      <span className="sheet-label">STATUS</span>
                      <p className="sheet-status-verified">VERIFIED SECURE</p>
                      <span className="sheet-cred-id">{activeCert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
