'use client';
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h1>ميديا ماركت</h1>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#">الخدمات</a></li>
            <li><a href="#">عنا</a></li>
            <li><a href="#">تواصل معنا</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#667eea',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logo_h1: {
    margin: 0,
  },
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
  },
  navList_a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'opacity 0.3s',
  },
};

export default Header;
