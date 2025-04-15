// MinimalHome.jsx
import React from 'react';

// Add a CSS reset style block to ensure full-screen display
const styles = {
  reset: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: 0,
  },
  blueText: {
    color: '#3b82f6',
  },
  subtitle: {
    fontSize: '24px',
    margin: '16px 0 0 0',
  },
  button: {
    marginTop: '24px',
    padding: '12px 24px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

function MinimalHome() {
  console.log('MinimalHome component rendering with full screen styles');
  
  // Apply the reset style to html and body
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    
    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, []);
  
  return (
    <div style={styles.fullScreen}>
      <div>
        <h1 style={styles.title}>
          Rio Aji <span style={styles.blueText}>Febrian</span>
        </h1>
        <p style={styles.subtitle}>
          I'm a <span style={styles.blueText}>Web Developer</span>
        </p>
        <button style={styles.button}>
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default MinimalHome;