// pages/About.jsx
import React, { useState, useEffect } from 'react';

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;
  
  const styles = {
    section: {
      padding: '120px 20px',
      width: '100%',
      backgroundColor: '#111827',
      backgroundImage: 'radial-gradient(circle at 25% 10%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
    },
    sectionContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      position: 'relative',
    },
    greeting: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#60a5fa',
      position: 'relative',
      display: 'inline-block',
      paddingLeft: '36px',
      marginBottom: '10px',
      letterSpacing: '1px',
    },
    greetingLine: {
      position: 'absolute',
      left: '0',
      top: '50%',
      width: '24px',
      height: '2px',
      backgroundColor: '#3b82f6',
      transform: 'translateY(-50%)',
    },
    title: {
      fontSize: isMobile ? '46px' : '68px',
      fontWeight: 'bold',
      margin: '0',
      lineHeight: '1.1',
      background: 'linear-gradient(to right, #f9fafb, #d1d5db)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '1px',
    },
    titleBlue: {
      background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    role: {
      fontSize: isMobile ? '26px' : '32px',
      color: '#d1d5db',
      margin: '12px 0 24px',
      fontWeight: '500',
    },
    description: {
      color: '#9ca3af',
      fontSize: '18px',
      lineHeight: '1.8',
      maxWidth: '95%',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    detailsContainer: {
      marginTop: '30px',
      padding: '30px',
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(59, 130, 246, 0.15)',
    },
    detailsTitle: {
      fontSize: '26px',
      fontWeight: 'bold',
      marginBottom: '25px',
      color: '#f9fafb',
      position: 'relative',
      paddingBottom: '15px',
    },
    detailsTitleLine: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      borderRadius: '2px',
    },
    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '24px 40px',
    },
    detailsItem: {
      marginBottom: '5px',
      transition: 'all 0.3s ease',
    },
    detailsLabel: {
      color: '#60a5fa',
      fontWeight: '600',
      marginBottom: '8px',
      display: 'block',
      fontSize: '16px',
      letterSpacing: '0.5px',
    },
    detailsValue: {
      color: '#d1d5db',
      fontSize: '18px',
    },
    socialContainer: {
      display: 'flex',
      gap: '16px',
      marginTop: '40px',
      flexWrap: 'wrap',
    },
    socialIcon: {
      padding: '16px',
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      borderRadius: '50%',
      color: '#9ca3af',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    profileImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
    profileImage: {
      position: 'relative',
      width: isMobile ? '300px' : '420px',
      height: isMobile ? '300px' : '420px',
      margin: '0 auto',
    },
    profileGlow: {
      position: 'absolute',
      inset: '-20px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      filter: 'blur(70px)',
      opacity: '0.15',
      animation: 'pulse 8s ease-in-out infinite alternate',
      zIndex: 0,
    },
    profileGlowInner: {
      position: 'absolute',
      inset: '0',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)',
      filter: 'blur(30px)',
      opacity: '0.4',
      animation: 'pulse 6s ease-in-out infinite alternate',
      zIndex: 0,
    },
    profileCircle: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '8px solid transparent',
      backgroundClip: 'padding-box',
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 8px rgba(59, 130, 246, 0.2)',
      zIndex: 1,
    },
    profileBorder: {
      position: 'absolute',
      inset: '-8px',
      borderRadius: '50%',
      padding: '8px',
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
      zIndex: 2,
    },
    profilePhoto: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      transition: 'opacity 0.5s ease',
      opacity: isImageLoaded ? 1 : 0,
      zIndex: 1,
    },
    profilePhotoPlaceholder: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '100px',
      fontWeight: 'bold',
      letterSpacing: '5px',
      color: '#f9fafb',
      backgroundColor: 'rgba(31, 41, 55, 0.6)',
      opacity: isImageLoaded ? 0 : 1,
      transition: 'opacity 0.5s ease',
      zIndex: 0,
    },
    floatingIcon: {
      position: 'absolute',
      padding: '18px',
      backgroundColor: '#1f2937',
      borderRadius: '12px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.06)',
      color: '#3b82f6',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      animation: 'float 4s ease-in-out infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3,
    },
    floatingIconTop: {
      top: '-40px',
      right: '-20px',
      animationDelay: '0s',
    },
    floatingIconBottom: {
      bottom: '-40px',
      left: '-20px',
      animationDelay: '2s',
    },
    floatingIconRight: {
      right: '-30px',
      top: '40%',
      animationDelay: '1s',
    },
    keyframes: `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      @keyframes pulse {
        0% { opacity: 0.2; transform: scale(0.95); }
        100% { opacity: 0.4; transform: scale(1.05); }
      }
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `,
    experienceCard: {
      position: 'absolute',
      bottom: '-40px',
      right: isMobile ? '10px' : '-50px',
      backgroundColor: 'rgba(31, 41, 55, 0.9)',
      borderRadius: '12px',
      padding: '16px 24px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      zIndex: 3,
      animation: 'float 5s ease-in-out infinite',
      animationDelay: '1.5s',
    },
    experienceNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    experienceText: {
      display: 'flex',
      flexDirection: 'column',
    },
    experienceYears: {
      color: '#f9fafb',
      fontWeight: '600',
      fontSize: '16px',
    },
    experienceDesc: {
      color: '#9ca3af',
      fontSize: '14px',
    },
    languageBadge: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#60a5fa',
      padding: '5px 10px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      marginRight: '8px',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
    contactButton: {
      marginTop: '40px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 32px',
      backgroundColor: '#3b82f6',
      color: '#fff',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '18px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.4)',
      gap: '10px',
      border: 'none',
      cursor: 'pointer',
    },
    contactButtonIcon: {
      marginLeft: '8px',
    },
    bgShapes: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '-1',
      overflow: 'hidden',
    },
    bgCircle1: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      top: '-100px',
      right: '-100px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(37, 99, 235, 0.03) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      zIndex: '-1',
    },
    bgCircle2: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      bottom: '-50px',
      left: '-50px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(37, 99, 235, 0.03) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      zIndex: '-1',
    },
    loadingShimmer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'linear-gradient(90deg, rgba(31, 41, 55, 0.1) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(31, 41, 55, 0.1) 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite',
      display: isImageLoaded ? 'none' : 'block',
      zIndex: 0,
    }
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // We'll use a placeholder image URL. Replace this with your actual photo URL.
  const photoUrl = "src/assets/icons/rio.jpg"; // This creates a placeholder in Claude's environment

  return (
    <section style={styles.section}>
      <style dangerouslySetInnerHTML={{ __html: styles.keyframes }} />
      <div style={styles.sectionContent}>
        <div style={styles.bgShapes}>
          <div style={styles.bgCircle1}></div>
          <div style={styles.bgCircle2}></div>
        </div>
        
        <div style={styles.grid}>
          {/* Left content */}
          <div style={styles.content}>
            <p style={styles.greeting}>
              <span style={styles.greetingLine}></span>
              Hello, my name is
            </p>
            <h1 style={styles.title}>
              Rio Aji <span style={styles.titleBlue}>Febrian</span>
            </h1>
            <p style={styles.role}>
              I'm a <span style={styles.titleBlue}>Full Stack Developer</span>
            </p>
            <p style={styles.description}>
              Passionate about creating beautiful, functional, and user-friendly web applications with modern technologies.
              I specialize in building responsive, scalable, and efficient web solutions using the latest frameworks and tools.
            </p>
            <p style={styles.description}>
              With expertise in both frontend and backend development, I strive to deliver seamless user experiences while
              maintaining clean, maintainable code. I'm constantly learning and adapting to new technologies to stay at the
              forefront of web development.
            </p>

            <div style={styles.detailsContainer}>
              <h3 style={styles.detailsTitle}>
                Personal Details
                <span style={styles.detailsTitleLine}></span>
              </h3>
              <div style={styles.detailsGrid}>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Name:</span>
                  <span style={styles.detailsValue}>Rio Aji Febrian</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Email:</span>
                  <span style={styles.detailsValue}>rio.aji.febrian@example.com</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Phone:</span>
                  <span style={styles.detailsValue}>+62 123 456 7890</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Location:</span>
                  <span style={styles.detailsValue}>Jakarta, Indonesia</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Experience:</span>
                  <span style={styles.detailsValue}>5+ Years</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Languages:</span>
                  <div>
                    <span style={styles.languageBadge}>English</span>
                    <span style={styles.languageBadge}>Indonesian</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div style={styles.socialContainer}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  e.currentTarget.style.color = '#9ca3af';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  e.currentTarget.style.color = '#9ca3af';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  e.currentTarget.style.color = '#9ca3af';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  e.currentTarget.style.color = '#9ca3af';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                  e.currentTarget.style.color = '#9ca3af';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2L11 22l-8-9 18.5-11z"></path>
                  <path d="M2 13l9 9 2-18-9 9z"></path>
                </svg>
              </a>
            </div>
            
          </div>

          {/* Right content - Profile image */}
          <div style={styles.profileImageContainer}>
            <div style={styles.profileImage}>
              {/* Glowing effect */}
              <div style={styles.profileGlow}></div>
              <div style={styles.profileGlowInner}></div>
              
              {/* Profile circle with border and photo */}
              <div style={styles.profileCircle}>
                <div style={styles.loadingShimmer}></div>
                <div style={styles.profilePhotoPlaceholder}>RAF</div>
                <img 
                  src={photoUrl} 
                  alt="Rio Aji Febrian" 
                  style={styles.profilePhoto}
                  onLoad={handleImageLoad}
                />
                <div style={styles.profileBorder}></div>
              </div>
              
              {/* Floating elements */}
              <div style={{...styles.floatingIcon, ...styles.floatingIconTop}}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              
                                            
              <div style={{...styles.floatingIcon, ...styles.floatingIconBottom}}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              
              <div style={{...styles.floatingIcon, ...styles.floatingIconRight}}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              
              {/* Experience card */}
              <div style={styles.experienceCard}>
                <div style={styles.experienceNumber}>5+</div>
                <div style={styles.experienceText}>
                  <span style={styles.experienceYears}>Years</span>
                  <span style={styles.experienceDesc}>Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;