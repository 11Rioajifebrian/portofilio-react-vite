import React, { useEffect } from 'react';

function Skills() {
  const isMobile = window.innerWidth < 768;
  
  // Skills data
  const skills = [
    { 
      name: "Frontend Development", 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ), 
      description: "HTML, CSS, JavaScript, React, Tailwind CSS",
      technologyIcons: [],
      details: [
        { name: "HTML5", proficiency: 95 },
        { name: "CSS3/SCSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 92 },
        { name: "React.js", proficiency: 88 },
        { name: "Tailwind CSS", proficiency: 85 },
      ]
    },
    { 
      name: "Backend Development", 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ), 
      description: "Node.js, Express, MongoDB, MySQL",
      technologyIcons: [],
      details: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express.js", proficiency: 82 },
        { name: "MongoDB", proficiency: 80 },
        { name: "MySQL", proficiency: 78 },
        { name: "RESTful APIs", proficiency: 88 },
      ]
    },
    { 
      name: "Mobile Development", 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ), 
      description: "React Native, Flutter",
      technologyIcons: [],
      details: [
        { name: "React Native", proficiency: 82 },
        { name: "Flutter", proficiency: 75 },
        { name: "Mobile UI/UX", proficiency: 80 },
        { name: "iOS Development", proficiency: 72 },
        { name: "Android Development", proficiency: 70 },
      ]
    },
    { 
      name: "DevOps & Tools", 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ), 
      description: "Git, Docker, AWS, CI/CD",
      technologyIcons: [],
      details: [
        { name: "Git & GitHub", proficiency: 90 },
        { name: "Docker", proficiency: 78 },
        { name: "AWS", proficiency: 75 },
        { name: "CI/CD", proficiency: 80 },
        { name: "Linux", proficiency: 82 },
      ]
    },
    { 
      name: "UI/UX Design", 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ), 
      description: "Figma, Adobe XD, User Experience",
      technologyIcons: [],
      details: [
        { name: "Figma", proficiency: 85 },
        { name: "Adobe XD", proficiency: 80 },
        { name: "UI Design", proficiency: 87 },
        { name: "UX Research", proficiency: 78 },
        { name: "Responsive Design", proficiency: 92 },
      ]
    },
    { 
      name: "Other Skills", 
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ), 
      description: "TypeScript, Testing, SEO, Performance",
      technologyIcons: [],
      details: [
        { name: "TypeScript", proficiency: 85 },
        { name: "Testing", proficiency: 78 },
        { name: "SEO", proficiency: 75 },
        { name: "Web Performance", proficiency: 82 },
        { name: "Version Control", proficiency: 90 },
      ]
    },
  ];

  // Add card border beam animation style and icon glow effect
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .card-border {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 16px;
        overflow: hidden;
        pointer-events: none;
      }
      
      .card-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border: 2px solid transparent;
        border-radius: 16px;
        background: linear-gradient(var(--angle), transparent 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 70%, transparent 100%) border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        --angle: 0deg;
        animation: rotate-border 5s linear infinite;
      }
      
      @keyframes rotate-border {
        to {
          --angle: 360deg;
        }
      }
      
      @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      
      /* Fallback animation for browsers that don't support @property */
      @supports not (background: linear-gradient(var(--angle), red, blue)) {
        .card-border::before {
          animation: rotate-border-fallback 5s linear infinite;
        }
        
        @keyframes rotate-border-fallback {
          0% { 
            background: linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 70%, transparent 100%) border-box;
          }
          25% { 
            background: linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 70%, transparent 100%) border-box;
          }
          50% { 
            background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 70%, transparent 100%) border-box;
          }
          75% { 
            background: linear-gradient(270deg, transparent 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 70%, transparent 100%) border-box;
          }
          100% { 
            background: linear-gradient(360deg, transparent 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.5) 50%, rgba(59, 130, 246, 0.2) 70%, transparent 100%) border-box;
          }
        }
      }
      
      /* Icon glow effect - simplified to just use shadow */
      .tech-icon-container {
        position: relative;
        z-index: 1;
        padding: 5px;
      }
      
      .tech-icon-container img {
        transition: filter 0.3s ease, transform 0.3s ease;
      }
      
      .tech-icon-container:hover img {
        filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.8));
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const styles = {
    section: {
      padding: '100px 20px',
      width: '100%',
      backgroundColor: '#1f2937',
    },
    sectionContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '60px',
      position: 'relative', // For beam animation
    },
    title: {
      fontSize: isMobile ? '32px' : '40px',
      fontWeight: 'bold',
      marginBottom: '16px',
      lineHeight: '1.2',
    },
    titleBlue: {
      color: '#3b82f6',
    },
    subtitle: {
      fontSize: '18px',
      color: '#9ca3af',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
    },
    skillCard: {
      backgroundColor: '#111827',
      padding: '32px',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      cursor: 'default',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    skillHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px',
      gap: '15px',
    },
    skillIcon: {
      color: '#3b82f6',
      marginTop: '5px',
    },
    skillInfo: {
      flex: '1',
    },
    skillTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '8px',
    },
    skillDesc: {
      color: '#9ca3af',
      fontSize: '16px',
      lineHeight: '1.6',
    },
    technologyIconsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      marginTop: '16px',
    },
    technologyIcon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconLabel: {
      fontSize: '12px',
      color: '#9ca3af',
      marginTop: '4px',
    },
    skillDetailsList: {
      marginTop: '20px',
    },
    skillDetailItem: {
      marginBottom: '16px',
    },
    skillDetailHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '6px',
    },
    skillName: {
      color: '#d1d5db',
      fontSize: '16px',
    },
    skillPercentage: {
      color: '#60a5fa',
      fontSize: '16px',
    },
    progressBarBg: {
      width: '100%',
      height: '6px',
      backgroundColor: '#374151',
      borderRadius: '3px',
    },
    progressBarFill: {
      height: '100%',
      backgroundColor: '#3b82f6',
      borderRadius: '3px',
      transition: 'width 1s ease-in-out',
    },
  };

  // Hover effect function
  const applyHoverEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.backgroundColor = '#1a1f2e';
    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
  };

  const applyHoverLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.backgroundColor = '#111827';
    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
  };

  // Create technology icons with correct paths
  // Using "icons" (plural) folder name
  const technologyIcons = [
    {
      name: "HTML",
      icon: <img src="src/assets/icons/html.png" alt="HTML icon" style={{ width: '50px', height: '50px' }} />
    },
    {
      name: "CSS",
      icon: <img src="src/assets/icons/css.png" alt="CSS icon" style={{ width: '50px', height: '50px' }} />
    },
    {
      name: "JavaScript",
      icon: <img src="src/assets/icons/js.png" alt="JavaScript icon" style={{ width: '50px', height: '50px' }} />
    },
    {
      name: "Python",
      icon: <img src="src/assets/icons/python.png" alt="Python icon" style={{ width: '50px', height: '50px' }} />
    },
    {
      name: "PHP",
      icon: <img src="src/assets/icons/php.png" alt="PHP icon" style={{ width: '50px', height: '50px' }} />
    },
    {
      name: "Java",
      icon: <img src="src/assets/icons/java.png" alt="Java icon" style={{ width: '50px', height: '50px' }} />
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.sectionContent}>
        <div style={styles.heading}>
          <h2 style={styles.title}>
            My <span style={styles.titleBlue}>Skills</span>
          </h2>
          <p style={styles.subtitle}>
            I have acquired a diverse set of skills throughout my journey as a developer.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
          
          {/* Technology Icons Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
            gap: '24px',
            marginTop: '32px',
            width: '100%',
            maxWidth: '1400px',
            padding: '0 40px'
          }}>
            {technologyIcons.map((tech, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }} 
              onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'}}
              onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'}}>
                <div className="tech-icon-container">
                  {tech.icon}
                </div>
                <span style={{
                  fontSize: '14px',
                  color: '#d1d5db',
                  marginTop: '8px',
                  fontWeight: '500'
                }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index}
              style={styles.skillCard}
              className="glow-card"
              onMouseEnter={applyHoverEnter}
              onMouseLeave={applyHoverLeave}
            >
              <div style={styles.skillHeader}>
                <div style={styles.skillIcon}>{skill.icon}</div>
                <div style={styles.skillInfo}>
                  <h3 style={styles.skillTitle}>{skill.name}</h3>
                  <p style={styles.skillDesc}>{skill.description}</p>
                  
                  {/* Technology Icons Row */}
                  {skill.technologyIcons && skill.technologyIcons.length > 0 && (
                    <div style={styles.technologyIconsContainer}>
                      {skill.technologyIcons.map((tech, techIndex) => (
                        <div key={techIndex} style={styles.technologyIcon}>
                          {tech.icon}
                          <span style={styles.iconLabel}>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div style={styles.skillDetailsList}>
                {skill.details.map((detail, detailIndex) => (
                  <div key={detailIndex} style={styles.skillDetailItem}>
                    <div style={styles.skillDetailHeader}>
                      <span style={styles.skillName}>{detail.name}</span>
                      <span style={styles.skillPercentage}>{detail.proficiency}%</span>
                    </div>
                    <div style={styles.progressBarBg}>
                      <div 
                        style={{
                          ...styles.progressBarFill,
                          width: `${detail.proficiency}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Add border beam animation to each skill card */}
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;