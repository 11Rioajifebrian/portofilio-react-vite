import React, { useState, useEffect, useRef } from 'react';

function Home({ scrollToSection }) {
  const [text, setText] = useState('');
  const [animatedElements, setAnimatedElements] = useState({
    subtitle: false,
    buttons: false,
    particles: false
  });
  const completeText = "Welcome to Rio Aji Febrian's Portfolio";
  const typingIntervalRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // References for animated elements
  const particlesRef = useRef([]);
  const particleCount = 30;
  
  // Initialize particle positions and start background animations immediately
  useEffect(() => {
    // Initialize particles
    particlesRef.current = Array(particleCount).fill().map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1
    }));
    
    // Start background particle animation right away
    const movementInterval = setInterval(() => {
      particlesRef.current = particlesRef.current.map(particle => {
        // Update particle position
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Bounce off edges
        if (newX < 0 || newX > 100) particle.speedX *= -1;
        if (newY < 0 || newY > 100) particle.speedY *= -1;
        
        // Ensure particle stays in bounds
        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));
        
        return {
          ...particle,
          x: newX,
          y: newY,
          opacity: Math.min(0.6, Math.max(0.1, particle.opacity + (Math.random() - 0.5) * 0.05))
        };
      });
      
      // Force re-render to show particle movement
      setAnimatedElements(prev => ({ ...prev, particles: true }));
    }, 50);
    
    // Animate other elements shortly after component loads
    const elementsTimer = setTimeout(() => {
      setAnimatedElements(prev => ({ 
        ...prev, 
        subtitle: true,
        buttons: true
      }));
    }, 1000);
    
    return () => {
      clearInterval(movementInterval);
      clearTimeout(elementsTimer);
    };
  }, []);

  // Handle typing animation
  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true; // true for typing forward, false for deleting
    
    const startTypingAnimation = () => {
      // Clear any existing intervals
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      
      typingIntervalRef.current = setInterval(() => {
        if (isTyping) {
          // Typing forward
          if (currentIndex <= completeText.length) {
            setText(completeText.substring(0, currentIndex));
            currentIndex++;
          } else {
            // Reached the end, prepare to delete
            clearInterval(typingIntervalRef.current);
            isTyping = false;
            
            // Pause at the end before starting to delete
            timeoutRef.current = setTimeout(() => {
              startDeletingAnimation();
            }, 5000); // Longer pause at the complete text
          }
        }
      }, 100);
    };
    
    const startDeletingAnimation = () => {
      // Clear any existing intervals
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      
      typingIntervalRef.current = setInterval(() => {
        if (currentIndex > 0) {
          currentIndex--;
          setText(completeText.substring(0, currentIndex));
        } else {
          // Reached the beginning, prepare to type again
          clearInterval(typingIntervalRef.current);
          isTyping = true;
          
          // Pause at the beginning before starting to type
          timeoutRef.current = setTimeout(() => {
            startTypingAnimation();
          }, 1000);
        }
      }, 50); 
    };
    
    // Start the animation initially with a slight delay
    setTimeout(() => {
      startTypingAnimation();
    }, 500);
    
    // Clean up intervals and timeouts on unmount
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      backgroundColor: '#111827',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
    },
    content: {
      maxWidth: '1400px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '40px',
      paddingTop: '60px',
      position: 'relative',
      zIndex: 2,
    },
    title: {
      fontSize: '72px',
      fontWeight: 'bold',
      margin: '0',
      lineHeight: '1.2',
      height: '180px', // Fixed height to prevent layout shift during animation
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      color: '#f9fafb',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      position: 'relative',
    },
    subtitle: {
      fontSize: '24px',
      color: '#d1d5db',
      maxWidth: '700px',
      lineHeight: '1.6',
      opacity: animatedElements.subtitle ? 1 : 0,
      transform: `translateY(${animatedElements.subtitle ? '0px' : '20px'})`,
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      opacity: animatedElements.buttons ? 1 : 0,
      transform: `translateY(${animatedElements.buttons ? '0px' : '30px'})`,
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '18px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      padding: '16px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '18px',
      border: '2px solid #3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    },
    cursor: {
      borderRight: '4px solid #3b82f6',
      animation: 'blink 1s step-end infinite',
      height: '72px',
      marginLeft: '5px',
      display: 'inline-block',
    },
    backgroundParticle: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      transition: 'opacity 0.3s ease',
      filter: 'blur(1px)',
    },
    floatingShape: {
      position: 'absolute',
      opacity: 0.15,
      zIndex: 1,
    },
    circle: {
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      border: '2px solid #3b82f6',
      top: '10%',
      right: '5%',
      animation: 'floatAnimation 15s ease-in-out infinite',
    },
    square: {
      width: '200px',
      height: '200px',
      border: '2px solid #60a5fa',
      bottom: '15%',
      left: '10%',
      transform: 'rotate(45deg)',
      animation: 'rotateAnimation 30s linear infinite, floatAnimation 20s ease-in-out infinite',
    },
    triangle: {
      width: '0',
      height: '0',
      borderLeft: '150px solid transparent',
      borderRight: '150px solid transparent',
      borderBottom: '260px solid #2563eb',
      opacity: '0.05',
      top: '60%',
      right: '15%',
      animation: 'rotateAnimation 40s linear infinite reverse, floatAnimation 25s ease-in-out infinite',
    },
    nameHighlight: {
      position: 'relative',
      color: '#3b82f6',
      display: 'inline-block',
      animation: 'colorShift 8s ease-in-out infinite',
    },
    glowEffect: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
      top: '0',
      left: '0',
      zIndex: '-1',
      opacity: 1,
      filter: 'blur(40px)',
      borderRadius: '50%',
      animation: 'pulseAnimation 10s ease-in-out infinite',
    },
    keyframes: `
      @keyframes blink {
        0%, 100% { border-color: transparent; }
        50% { border-color: #3b82f6; }
      }
      
      @keyframes floatAnimation {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-40px); }
      }
      
      @keyframes rotateAnimation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulseAnimation {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 1; }
      }
      
      @keyframes colorShift {
        0%, 100% { color: #3b82f6; text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        33% { color: #60a5fa; text-shadow: 0 0 15px rgba(96, 165, 250, 0.6); }
        66% { color: #2563eb; text-shadow: 0 0 10px rgba(37, 99, 235, 0.5); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes btnGlow {
        0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
      }
      
      .primary-button-animated:hover::before {
        left: 100%;
      }
      
      .primary-button-animated::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.7s ease;
      }
      
      .primary-button-animated {
        animation: btnGlow 3s infinite;
      }
      
      .secondary-button-animated:hover {
        background-color: rgba(59, 130, 246, 0.1);
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
      }
      
      .rotate-slow {
        animation: rotateAnimation 30s linear infinite;
      }
      
      .rotate-slower {
        animation: rotateAnimation 50s linear infinite reverse;
      }
      
      .background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 1;
        animation: fadeIn 2s ease-in;
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `,
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none',
    }
  };

  // Formatted text with highlight animation applied to name
  const formattedText = text.replace(
    "Rio Aji Febrian", 
    "<span class='name-highlight'>Rio Aji Febrian</span>"
  );

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: styles.keyframes }} />
      
      {/* Background elements - completely independent from typing */}
      <div style={styles.backgroundContainer} className="background-container">
        <div style={{...styles.floatingShape, ...styles.circle}} className="rotate-slow"></div>
        <div style={{...styles.floatingShape, ...styles.square}} className="rotate-slower"></div>
        <div style={{...styles.floatingShape, ...styles.triangle}}></div>
        
        {/* Animated particles */}
        {particlesRef.current.map((particle, index) => (
          <div 
            key={index}
            style={{
              ...styles.backgroundParticle,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
      
      <div style={styles.content}>
        <div style={styles.glowEffect}></div>
        
        <h1 style={styles.title}>
          <span 
            dangerouslySetInnerHTML={{ 
              __html: formattedText.replace(
                /<span class='name-highlight'>(.*?)<\/span>/g, 
                `<span style="position:relative;display:inline-block;color:#3b82f6;animation:colorShift 8s ease-in-out infinite;">$1</span>`
              )
            }} 
          />
          <span style={styles.cursor}></span>
        </h1>
        
        <p style={styles.subtitle}>
          I'm a Full Stack Developer passionate about creating beautiful, functional,
          and user-friendly web applications with modern technologies.
        </p>
        
        <div style={styles.buttonContainer}>
          <a 
            onClick={() => scrollToSection('about')} 
            style={styles.primaryButton}
            className="primary-button-animated"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 25px -5px rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)';
            }}
          >
            Explore Portfolio
          </a>
          
          <a 
            onClick={() => scrollToSection('contact')} 
            style={styles.secondaryButton}
            className="secondary-button-animated"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(59, 130, 246, 0.3)';
              e.currentTarget.style.borderColor = '#60a5fa';
              e.currentTarget.style.color = '#60a5fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#3b82f6';
              e.currentTarget.style.color = '#3b82f6';
            }}
          >
            Contact Me
          </a>
        </div>
        
        {/* Scrolldown indicator animation */}
        {animatedElements.buttons && (
          <div 
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: 0.7,
              animation: 'pulseAnimation 2s infinite',
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('about')}
          >
            <div style={{ color: '#d1d5db', marginBottom: '10px', fontSize: '14px' }}>Scroll Down</div>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#d1d5db" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ animation: 'floatAnimation 2s infinite' }}
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;