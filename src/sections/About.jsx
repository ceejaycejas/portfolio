import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, GraduationCap, Users } from 'lucide-react';

const stats = [
  { id: 1, count: '10+', label: 'Projects Completed', icon: Code2, color: 'var(--primary-color)' },
  { id: 2, count: '15+', label: 'Technologies Learned', icon: Award, color: 'var(--tertiary-color)' },
  { id: 3, count: '2', label: 'Internship Experiences', icon: GraduationCap, color: 'var(--secondary-color)' },
  { id: 4, count: '99%', label: 'Success Rate', icon: Users, color: 'var(--primary-color)' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-grid">
          {/* Left Column: Heading */}
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">A Bit About Me</span>
            <h2 className="section-title">About Me</h2>
            <div className="about-accent-line"></div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="about-text highlight-text">
              I am a Bachelor of Science in Information Technology graduate, passionate about designing, building, and optimizing modern digital experiences.
            </p>
            <p className="about-text">
              My core focus lies in full-stack web development, where I bridge the gap between robust database design and elegant, intuitive user interfaces. I leverage modern tools and AI-assisted development practices to engineer clean, efficient code and solve complex structural problems.
            </p>
            <p className="about-text">
              Whether designing relational databases, custom APIs, or interactive frontend components, I aim to deliver premium, performant software solutions that empower users and businesses alike.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="stat-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                  <Icon size={24} />
                </div>
                <div className="stat-count">{stat.count}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
