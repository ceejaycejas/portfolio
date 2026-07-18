import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, QrCode, ClipboardList, Users2 } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const projects = [
  {
    id: 1,
    title: 'NutriKid',
    description: 'AI-powered dietary planning and nutrition management system for school-based feeding programs.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    liveLink: '#',
    githubLink: '#',
    icon: Sparkles,
    color: 'var(--primary-color)',
    previewType: 'nutrikid'
  },
  {
    id: 2,
    title: 'QR Attendance System',
    description: 'QR Code attendance monitoring with real-time dashboard analytics and check-in/out tracking.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind', 'JavaScript'],
    liveLink: '#',
    githubLink: '#',
    icon: QrCode,
    color: 'var(--tertiary-color)',
    previewType: 'qr'
  },
  {
    id: 3,
    title: 'Inventory Management System',
    description: 'Modern inventory tracking web application featuring alerts, audit logs, and status dashboards.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    liveLink: '#',
    githubLink: '#',
    icon: ClipboardList,
    color: 'var(--secondary-color)',
    previewType: 'inventory'
  },
  {
    id: 4,
    title: 'Student Information System',
    description: 'Complete CRUD management portal for academic records with responsive charts and analytics.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    liveLink: '#',
    githubLink: '#',
    icon: Users2,
    color: 'var(--primary-color)',
    previewType: 'student'
  }
];

const RenderProjectPreview = ({ type, color }) => {
  switch (type) {
    case 'nutrikid':
      return (
        <div className="project-preview-panel nutrikid-preview">
          <div className="preview-header">
            <Sparkles size={16} style={{ color }} />
            <span>AI Diet Planner</span>
          </div>
          <div className="preview-chart-bar">
            <div className="bar-fill fill-1" style={{ width: '80%', backgroundColor: color }}></div>
            <div className="bar-fill fill-2" style={{ width: '65%', backgroundColor: 'var(--secondary-color)' }}></div>
            <div className="bar-fill fill-3" style={{ width: '90%', backgroundColor: 'var(--tertiary-color)' }}></div>
          </div>
          <div className="preview-stats-row">
            <div className="preview-pill">Cal: 2400</div>
            <div className="preview-pill">Pro: 85g</div>
            <div className="preview-pill">Vit: 100%</div>
          </div>
        </div>
      );
    case 'qr':
      return (
        <div className="project-preview-panel qr-preview">
          <div className="qr-box-scanner">
            <div className="qr-scanner-line"></div>
            <QrCode size={48} style={{ color }} className="qr-icon-glowing" />
          </div>
          <div className="qr-status-pill animate-pulse">
            <span className="status-dot"></span>
            <span>Live Scan Log</span>
          </div>
        </div>
      );
    case 'inventory':
      return (
        <div className="project-preview-panel inventory-preview">
          <div className="inv-grid">
            <div className="inv-grid-item text-glow">Box A - 12</div>
            <div className="inv-grid-item text-glow">Box B - 48</div>
            <div className="inv-grid-item danger text-glow">Box C - 2</div>
            <div className="inv-grid-item text-glow">Box D - 32</div>
          </div>
          <div className="inv-stock-indicator">
            <span style={{ color: 'var(--text-muted)' }}>Global stock: </span>
            <span style={{ color: 'var(--tertiary-color)', fontWeight: 'bold' }}>Optimal</span>
          </div>
        </div>
      );
    case 'student':
      return (
        <div className="project-preview-panel student-preview">
          <div className="student-profile-list">
            <div className="profile-row">
              <div className="profile-avatar-mock" style={{ border: `1.5px solid ${color}` }}></div>
              <div className="profile-text-mock">
                <div className="line-mock lm-long"></div>
                <div className="line-mock lm-short"></div>
              </div>
            </div>
            <div className="profile-row">
              <div className="profile-avatar-mock" style={{ border: '1.5px solid var(--secondary-color)' }}></div>
              <div className="profile-text-mock">
                <div className="line-mock lm-long"></div>
                <div className="line-mock lm-short"></div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="about-accent-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                className="project-card glass-card gradient-border-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Visual Preview Panel */}
                <div className="project-preview-container">
                  <RenderProjectPreview type={project.previewType} color={project.color} />
                </div>

                <div className="project-content">
                  <div className="project-title-row">
                    <ProjectIcon size={20} className="project-icon" style={{ color: project.color }} />
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-list">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.liveLink} 
                      className="btn btn-tertiary project-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Opening live demo for ${project.title} (Mock Link).`);
                      }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="btn btn-secondary project-btn icon-only"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Opening GitHub repository for ${project.title} (Mock Link).`);
                      }}
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
