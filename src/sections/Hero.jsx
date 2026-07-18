import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Floating abstract decorative elements */}
      <div className="floating-shape shape-1 animate-float"></div>
      <div className="floating-shape shape-2 animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="floating-shape shape-3 animate-float" style={{ animationDelay: '-4s' }}></div>

      <div className="container hero-container">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="location-badge">
            <MapPin size={14} className="location-icon" />
            <span>Digos City, Davao del Sur, Philippines</span>
          </div>

          <h2 className="hero-greeting">
            Hello, I'm <span className="highlight-name">Cee Jay Cejas</span>
          </h2>

          <h1 className="hero-headline">
            <span className="gradient-text block-line">Full-Stack</span>
            <span className="block-line">Developer</span>
            <span className="sub-headline">Building Modern Web Applications</span>
          </h1>

          <p className="hero-intro">
            I build modern, scalable, and user-focused web applications. Passionate about Laravel, PHP, JavaScript, AI-assisted development, and creating clean digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Mail size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              className="btn btn-tertiary"
              download="Cejas_CeeJay_Resume.pdf"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="profile-wrapper">
            <div className="glowing-ring glow-glow"></div>
            <div className="profile-img-container">
              <img 
                src="/images/profile.png" 
                alt="Cee Jay Cejas" 
                className="profile-img"
              />
            </div>
            {/* Overlay tag */}
            <div className="profile-badge glass-card">
              <span className="badge-dot"></span>
              <span>Available for Freelance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
