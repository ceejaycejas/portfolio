import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', type: 'standard' },
      { name: 'JavaScript', type: 'standard' },
      { name: 'PHP', type: 'standard' },
      { name: 'Python', type: 'standard' }
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', type: 'standard' },
      { name: 'CSS3', type: 'standard' },
      { name: 'Bootstrap', type: 'standard' },
      { name: 'Tailwind CSS', type: 'standard' },
      { name: 'Laravel', type: 'standard' },
      { name: 'Flask', type: 'standard' }
    ]
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'MySQL', type: 'standard' },
      { name: 'phpMyAdmin', type: 'standard' }
    ]
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Visual Studio Code (VS Code)', type: 'standard' },
      { name: 'Cursor', type: 'standard' }
    ]
  },
  {
    title: 'Design & Productivity',
    skills: [
      { name: 'Canva', type: 'standard' },
      { name: 'Figma', type: 'standard' },
      { name: 'Microsoft Office Suite', type: 'standard' }
    ]
  },
  {
    title: 'Spoken Languages',
    skills: [
      { name: '🇵🇭 Filipino — Native', type: 'language' },
      { name: '🇬🇧 English — Proficient', type: 'language' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container-v2">
        <div className="skills-layout-grid">
          {/* Left Column: Heading */}
          <motion.div 
            className="skills-left-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="skills-subtitle">Capabilities</span>
            <h2 className="skills-main-title">Skills & Technologies</h2>
            <div className="about-accent-line"></div>
          </motion.div>

          {/* Right Column: Skills Categories */}
          <div className="skills-right-col">
            {skillCategories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                className="skill-category-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="category-title-v2">{category.title}</h3>
                <div className="skills-pill-group">
                  {category.skills.map((skill, skIdx) => (
                    <motion.span
                      key={skIdx}
                      className={`skill-pill-v2 ${skill.type === 'language' ? 'pill-language' : ''}`}
                      whileHover={{ y: -3, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
