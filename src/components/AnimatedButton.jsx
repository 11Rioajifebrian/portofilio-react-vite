// AnimatedButton.jsx
import React, { useEffect, useRef } from 'react';

const AnimatedButton = ({ 
  children, 
  onClick, 
  isPrimary = true, 
  className, 
  style 
}) => {
  const buttonRef = useRef(null);
  const glowRef = useRef(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;
    
    if (!button || !glow) return;
    
    let rotation = 0;
    let animationFrameId;
    let isHovered = false;
    
    // Rotate the glow
    const rotateGlow = () => {
      if (glow) {
        rotation += 1;
        glow.style.transform = `rotate(${rotation}deg)`;
        animationFrameId = requestAnimationFrame(rotateGlow);
      }
    };
    
    // Start the animation
    rotateGlow();
    
    // Update animation on hover
    const handleMouseEnter = () => {
      isHovered = true;
      if (glow) {
        glow.style.opacity = '1';
      }
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
    };
    
    const handleMouseLeave = () => {
      isHovered = false;
      if (glow) {
        glow.style.opacity = '0.5';
      }
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'none';
    };
    
    // Add event listeners
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const baseStyles = {
    position: 'relative',
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '18px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: 1,
    isolation: 'isolate',
    backgroundColor: isPrimary ? '#3b82f6' : 'transparent',
    color: isPrimary ? 'white' : '#3b82f6',
    border: isPrimary ? 'none' : '2px solid #3b82f6',
    ...style
  };
  
  const glowStyles = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    width: '200%',
    height: '200%',
    backgroundImage: isPrimary 
      ? 'conic-gradient(transparent, transparent, transparent, rgba(255, 255, 255, 0.5))' 
      : 'conic-gradient(transparent, transparent, transparent, rgba(59, 130, 246, 0.5))',
    opacity: 0.5,
    zIndex: -1,
    transition: 'opacity 0.3s ease',
  };
  
  const contentStyles = {
    position: 'relative',
    zIndex: 2,
  };
  
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={baseStyles}
      className={className}
    >
      <div ref={glowRef} style={glowStyles}></div>
      <span style={contentStyles}>{children}</span>
    </button>
  );
};

export default AnimatedButton;