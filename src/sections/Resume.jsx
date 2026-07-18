import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      role: 'Out-Campus System Developer',
      company: 'DepEd Digos Division – IT Department',
      type: 'Internship',
      period: 'Apr 2026 – May 2026',
      location: 'Digos City, Davao del Sur',
      responsibilities: [
        'Developed and maintained internal web-based systems to improve administrative workflows and digital services',
        'Assisted in designing, testing, and implementing system features based on departmental requirements',
        'Performed system troubleshooting, bug fixing, and technical support for end users',
        'Collaborated with the IT team to ensure system reliability, security, and efficient operation'
      ]
    },
    {
      role: 'In-Campus Data Encoder',
      company: 'Davao del Sur State College – Quality Assurance Office',
      type: 'Internship',
      period: 'Feb 2026 – Mar 2026',
      location: 'Digos City, Davao del Sur',
      responsibilities: [
        'Encoded, verified, and maintained institutional records with a high level of accuracy',
        'Organized and updated quality assurance documents and databases',
        'Assisted in preparing reports and documentation for accreditation and compliance activities',
        'Ensured data integrity by reviewing and validating encoded information before submission'
      ]
    }
  ];

  const educations = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Davao del Sur State College',
      period: 'Graduation Year: 2026',
      location: 'Digos City, Davao del Sur',
      tags: ['Software Engineering', 'Database Management', 'Web Development', 'Information Systems']
    }
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container resume-container">
        <motion.div 
          className="resume-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Education & Experience</h2>
          <div className="about-accent-line"></div>
        </motion.div>

        <div className="resume-grid">
          {/* Experience Column */}
          <div className="resume-column">
            <div className="column-title-wrapper">
              <Briefcase className="column-title-icon" />
              <h3>Work Experience</h3>
            </div>

            <div className="timeline-container">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-item glass-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="timeline-node glow-glow"></div>
                  
                  <div className="item-meta">
                    <span className="item-type-badge">{exp.type}</span>
                    <span className="item-date">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>

                  <h4 className="item-title">{exp.role}</h4>
                  <h5 className="item-subtitle">{exp.company}</h5>

                  <ul className="item-responsibilities">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="resume-column">
            <div className="column-title-wrapper">
              <GraduationCap className="column-title-icon" />
              <h3>Education</h3>
            </div>

            <div className="timeline-container">
              {educations.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-item glass-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="timeline-node glow-glow"></div>

                  <div className="item-meta">
                    <span className="item-date">
                      <Calendar size={14} /> {edu.period}
                    </span>
                  </div>

                  <h4 className="item-title">{edu.degree}</h4>
                  <h5 className="item-subtitle">{edu.school}</h5>
                  
                  <div className="item-location">
                    <MapPin size={14} /> {edu.location}
                  </div>

                  <div className="item-tags">
                    {edu.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="item-tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
