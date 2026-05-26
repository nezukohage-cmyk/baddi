import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.heroSection}>
          <h1 style={styles.title}>About PG Finder</h1>
          <p style={styles.subtitle}>
            Your premium destination for finding the perfect stay. Whether it's a cozy room, a bustling PG, or a premium hotel, we make it easy.
          </p>
        </div>
        
        <div style={styles.contentSection}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Our Mission</h2>
            <p style={styles.text}>
              We believe finding accommodation should be as relaxing as the stay itself. Our mission is to connect people with their ideal living spaces through a seamless, transparent, and beautiful platform.
            </p>
          </div>
          
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Why Choose Us?</h2>
            <p style={styles.text}>
              With verified listings, secure payments via Razorpay, and a dedicated support team, PG Finder provides an unparalleled booking experience. We prioritize quality and comfort above all else.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    padding: '4rem 2rem',
    backgroundColor: 'var(--bg-primary)',
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '4rem',
    animation: 'fadeIn 1s ease-in',
  },
  title: {
    fontSize: '3rem',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #BB86FC, #3700B3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  contentSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '16px',
    padding: '2.5rem',
    maxWidth: '500px',
    boxShadow: 'var(--shadow-md)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.8rem',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  text: {
    color: 'var(--text-secondary)',
    lineHeight: '1.8',
    fontSize: '1.1rem',
  }
};

export default AboutUs;
