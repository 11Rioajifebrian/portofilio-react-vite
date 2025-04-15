// pages/Contact.jsx
import React, { useState, useEffect } from 'react';

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '60px',
    },
    contactLeft: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    contactTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '12px',
    },
    contactDesc: {
      color: '#9ca3af',
      fontSize: '18px',
      lineHeight: '1.6',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      marginTop: '24px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    contactIconContainer: {
      padding: '16px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      display: 'flex',
      transition: 'all 0.3s ease',
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
    },
    contactLabel: {
      fontSize: '16px',
      color: '#9ca3af',
    },
    contactValue: {
      fontSize: '18px',
      color: '#d1d5db',
    },
    formContainer: {
      backgroundColor: '#111827',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '24px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    formLabel: {
      fontSize: '16px',
      color: '#9ca3af',
    },
    formInput: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#1f2937',
      border: '1px solid rgba(75, 85, 99, 0.4)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    formTextarea: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#1f2937',
      border: '1px solid rgba(75, 85, 99, 0.4)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    formButton: {
      width: '100%',
      padding: '16px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    mapContainer: {
      marginTop: '60px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
      height: '500px',
      backgroundColor: '#1f2937',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      position: 'relative',
    },
    mapOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.1)', // Slight overlay for visual cohesion
      pointerEvents: 'none', // Let clicks pass through to the iframe
      zIndex: 1,
    },
    mapTitle: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      padding: '10px 16px',
      borderRadius: '8px',
      color: 'white',
      zIndex: 2,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      fontSize: '16px',
      fontWeight: '500',
    },
    mapTitleBlue: {
      color: '#3b82f6',
      fontWeight: '600',
    },
    mapFrame: {
      width: '100%',
      height: '100%',
      border: 'none',
    },
    contactItemHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
    },
    formInputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)',
    },
    sendMessageGlow: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s linear infinite',
    },
    coordinates: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      padding: '8px 12px',
      borderRadius: '8px',
      color: '#d1d5db',
      zIndex: 2,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      fontSize: '14px',
      fontWeight: '400',
    },
    keyframes: `
      @keyframes shimmer {
        0% {
          background-position: -100% 0;
        }
        100% {
          background-position: 100% 0;
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
    `,
  };

  // Button hover effects
  const applyButtonHoverEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.backgroundColor = '#2563eb';
    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.4)';
  };

  const applyButtonHoverLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.backgroundColor = '#3b82f6';
    e.currentTarget.style.boxShadow = 'none';
  };
  
  // Contact icon hover effects
  const applyIconHoverEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(59, 130, 246, 0.3)';
  };

  const applyIconHoverLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };
  
  // Input focus effects
  const applyInputFocus = (e) => {
    e.currentTarget.style.borderColor = '#3b82f6';
    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.2)';
  };
  
  const applyInputBlur = (e) => {
    e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.4)';
    e.currentTarget.style.boxShadow = 'none';
  };

  // The specific coordinates for the location in Pontianak
  const latitude = -0.038917725905732774;
  const longitude = 109.33007302290864;

  return (
    <section style={styles.section}>
      <style dangerouslySetInnerHTML={{ __html: styles.keyframes }} />
      <div style={styles.sectionContent}>
        <div style={styles.heading}>
          <h2 style={styles.title}>
            Contact <span style={styles.titleBlue}>Me</span>
          </h2>
          <p style={styles.subtitle}>
            Feel free to reach out to me for any inquiries, project collaborations,
            or just to say hello. I'd love to hear from you!
          </p>
        </div>

        <div style={styles.contactGrid}>
          <div style={styles.contactLeft}>
            <h3 style={styles.contactTitle}>Get In Touch</h3>
            <p style={styles.contactDesc}>
              Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities and ideas.
            </p>
            
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <div 
                  style={styles.contactIconContainer}
                  onMouseEnter={applyIconHoverEnter}
                  onMouseLeave={applyIconHoverLeave}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div style={styles.contactDetails}>
                  <p style={styles.contactLabel}>Email</p>
                  <p style={styles.contactValue}>rioajifebrian02@gmail.com</p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div 
                  style={styles.contactIconContainer}
                  onMouseEnter={applyIconHoverEnter}
                  onMouseLeave={applyIconHoverLeave}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style={styles.contactDetails}>
                  <p style={styles.contactLabel}>Phone</p>
                  <p style={styles.contactValue}>+62 815 2841 2661</p>
                </div>
              </div>

              <div style={styles.contactItem}>
                <div 
                  style={styles.contactIconContainer}
                  onMouseEnter={applyIconHoverEnter}
                  onMouseLeave={applyIconHoverLeave}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div style={styles.contactDetails}>
                  <p style={styles.contactLabel}>Location</p>
                  <p style={styles.contactValue}>Pontianak, West Kalimantan, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={styles.formContainer}>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    onFocus={applyInputFocus}
                    onBlur={applyInputBlur}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    onFocus={applyInputFocus}
                    onBlur={applyInputBlur}
                    required
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="subject" style={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  onFocus={applyInputFocus}
                  onBlur={applyInputBlur}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  style={styles.formTextarea}
                  onFocus={applyInputFocus}
                  onBlur={applyInputBlur}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                style={styles.formButton}
                onMouseEnter={applyButtonHoverEnter}
                onMouseLeave={applyButtonHoverLeave}
              >
                <div style={styles.sendMessageGlow}></div>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps with specific coordinates */}
        <div style={styles.mapContainer}>
          <div style={styles.mapOverlay}></div>
          <div style={styles.mapTitle}>
            Find me in <span style={styles.mapTitleBlue}>Pontianak, Kalimantan Barat, Indonesia</span>
          </div>
          <div style={styles.coordinates}>
            {latitude}, {longitude}
          </div>
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817635099503!2d${longitude-0.00005}!3d${latitude-0.00005}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCKCsDIuNSdTIDEwOcKwMTkuOCdF!5e0!3m2!1sen!2sid!4v1712936023075!5m2!1sen!2sid&z=17`}
            style={styles.mapFrame} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pontianak, West Kalimantan, Indonesia Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;