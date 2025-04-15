// AnimatedCard.jsx
import React, { useEffect, useRef } from 'react';

const AnimatedCard = ({ children, className, style }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    
    if (!card || !glow) return;
    
    let rotation = 0;
    let animationFrameId;
    let isHovered = false;
    
    // Add a subtle rotation animation when not hovered
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
    };
    
    const handleMouseLeave = () => {
      isHovered = false;
      if (glow) {
        glow.style.opacity = '0.5';
      }
    };
    
    // Add event listeners
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const baseStyles = {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    isolation: 'isolate',
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
    backgroundImage: 'conic-gradient(transparent, transparent, transparent, #3b82f6)',
    opacity: 0.5,
    zIndex: -1,
    animation: 'spin 3s linear infinite',
    transition: 'opacity 0.3s ease',
  };
  
  const contentContainerStyles = {
    position: 'relative',
    height: '100%',
    width: '100%',
    zIndex: 1,
    background: 'inherit',
  };
  
  return (
    <div ref={cardRef} style={baseStyles} className={className}>
      <div ref={glowRef} style={glowStyles}></div>
      <div style={contentContainerStyles}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;