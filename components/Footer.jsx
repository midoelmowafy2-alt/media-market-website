'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h3>عن ميديا ماركت</h3>
            <p>شركتنا تقدم الحلول المتكاملة للعمارة الرقمية</p>
          </div>
          <div style={styles.section}>
            <h3>الخدمات</h3>
            <ul style={styles.list}>
              <li>التسويق الرقمي</li>
              <li>تصميم المواقع</li>
              <li>إدارة المحتوى</li>
              <li>الاستشارات</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h3>تواصل معنا</h3>
            <ul style={styles.list}>
              <li>البريد: info@mediamarket.com</li>
              <li>الهاتف: +966-XX-XXXXX</li>
              <li>العنوان: الرياض</li>
            </ul>
          </div>
        </div>
        <div style={styles.bottom}>
          <p>&copy; 2024 Media Market. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '3rem 0 1rem',
    marginTop: '4rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  section: {
    textAlign: 'right',
  },
  section_h3: {
    marginBottom: '1rem',
    color: '#667eea',
  },
  list: {
    listStyle: 'none',
  },
  bottom: {
    textAlign: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid #333',
    color: '#999',
  },
};

export default Footer;
