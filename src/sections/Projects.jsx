// sections/Projects.jsx
import React, { useState, useEffect } from 'react';

function Projects() {
  const isMobile = window.innerWidth < 768;
  const [filter, setFilter] = useState('all');
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with payment integration, user authentication, product management, and order tracking. Responsive design for all devices.",
      tech: "React, Node.js, MongoDB, Stripe API",
      category: "web",
      image: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design, animations, and responsive layout. Features project showcase, skills, and contact form.",
      tech: "React, Tailwind CSS, Framer Motion",
      category: "web",
      image: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Cross-platform mobile application for food ordering and delivery. Includes user authentication, restaurant browsing, cart management, and order tracking.",
      tech: "React Native, Firebase, Google Maps API",
      category: "mobile",
      image: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description: "Web application for task management with drag-and-drop interface, team collaboration features, and real-time updates. Includes analytics dashboard.",
      tech: "React, Redux, Node.js, Socket.io",
      category: "web",
      image: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with features like message encryption, file sharing, group chats, and user profiles. Supports multiple devices.",
      tech: "React, Firebase, WebSockets",
      category: "web",
      image: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      description: "Mobile application for tracking workouts, nutrition, and progress. Features include custom workout plans, meal tracking, and progress visualization.",
      tech: "Flutter, Firebase, HealthKit/Google Fit",
      category: "mobile",
      image: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10"></path>
          <path d="M12 20V4"></path>
          <path d="M6 20v-6"></path>
        </svg>
      )
    },
  ];

  // Add card border beam animation style
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
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Filtered projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const styles = {
    section: {
      padding: '100px 20px',
      width: '100%',
    },
    sectionContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '60px',
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
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap',
      gap: '15px',
    },
    filterButton: {
      backgroundColor: 'transparent',
      color: '#9ca3af',
      border: '2px solid #374151',
      padding: '10px 20px',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    filterButtonActive: {
      backgroundColor: '#3b82f6',
      color: 'white',
      borderColor: '#3b82f6',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
    },
    projectCard: {
      backgroundColor: '#1f2937',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    },
    projectImage: {
      height: '220px',
      backgroundColor: '#4b5563',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    projectIcon: {
      color: '#3b82f6',
    },
    projectContent: {
      padding: '32px',
    },
    projectTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '12px',
    },
    projectDesc: {
      color: '#9ca3af',
      marginBottom: '20px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    projectTech: {
      color: '#60a5fa',
      fontSize: '16px',
    },
    projectButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '24px',
      flexWrap: 'wrap',
      gap: '10px',
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '8px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '16px',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      padding: '10px 20px',
      borderRadius: '8px',
      fontWeight: '500',
      border: '2px solid #3b82f6',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '16px',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    },
  };

  // Hover effect functions
  const applyHoverEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
  };

  const applyHoverLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
  };

  const applyButtonHoverEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
  };

  const applyButtonHoverLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section style={styles.section}>
      <div style={styles.sectionContent}>
        <div style={styles.heading}>
          <h2 style={styles.title}>
            My <span style={styles.titleBlue}>Projects</span>
          </h2>
          <p style={styles.subtitle}>
            Here are some of the projects I've worked on. Each project represents a unique
            challenge and showcases different aspects of my skills and expertise.
          </p>
        </div>

        {/* Filter buttons */}
        <div style={styles.filterContainer}>
          <button 
            style={filter === 'all' 
              ? {...styles.filterButton, ...styles.filterButtonActive} 
              : styles.filterButton
            }
            className="glow-button"
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            style={filter === 'web' 
              ? {...styles.filterButton, ...styles.filterButtonActive} 
              : styles.filterButton
            }
            className="glow-button"
            onClick={() => setFilter('web')}
          >
            Web Applications
          </button>
          <button 
            style={filter === 'mobile' 
              ? {...styles.filterButton, ...styles.filterButtonActive} 
              : styles.filterButton
            }
            className="glow-button"
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
        </div>

        {/* Projects grid */}
        <div style={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              style={styles.projectCard}
              className="glow-card"
              onMouseEnter={applyHoverEnter}
              onMouseLeave={applyHoverLeave}
            >
              <div style={styles.projectImage}>
                <div style={styles.projectIcon}>{project.image}</div>
              </div>
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.description}</p>
                <p style={styles.projectTech}>{project.tech}</p>
                
                <div style={styles.projectButtons}>
                  <a 
                    href="#" 
                    style={styles.primaryButton}
                    className="glow-button"
                    onMouseEnter={applyButtonHoverEnter}
                    onMouseLeave={applyButtonHoverLeave}
                  >
                    View Demo
                  </a>
                  <a 
                    href="#" 
                    style={styles.secondaryButton}
                    className="glow-button"
                    onMouseEnter={applyButtonHoverEnter}
                    onMouseLeave={applyButtonHoverLeave}
                  >
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Add border beam animation to each project card */}
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;