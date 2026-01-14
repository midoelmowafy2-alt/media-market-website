'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ClientPortal = () => {
  const [clientInfo] = useState({
    name: 'العميل',
    email: 'client@example.com',
    phone: '+966-00-000000',
    company: 'الشركة',
  });

  const [projects] = useState([
    { id: 1, name: 'تطوير موقع', status: 'مكتمل', progress: 100 },
    { id: 2, name: 'تصميم جرافيكي', status: 'قيد التطوير', progress: 75 },
    { id: 3, name: 'استشارة رقمية', status: 'لم يبدأ بعد', progress: 0 },
  ]);

  return (
    <>
      <Header />
      <main style={styles.mainContent}>
        <div style={styles.container}>
          <h1 style={styles.title}>بوابة العميل</h1>
          
          {/* Client Info Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>بياناتك</h2>
            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <label style={styles.label}>الاسم:</label>
                <p style={styles.value}>{clientInfo.name}</p>
              </div>
              <div style={styles.infoCard}>
                <label style={styles.label}>البريد الإلكتروني:</label>
                <p style={styles.value}>{clientInfo.email}</p>
              </div>
              <div style={styles.infoCard}>
                <label style={styles.label}>الهاتف:</label>
                <p style={styles.value}>{clientInfo.phone}</p>
              </div>
              <div style={styles.infoCard}>
                <label style={styles.label}>الشركة:</label>
                <p style={styles.value}>{clientInfo.company}</p>
              </div>
            </div>
          </div>
          
          {/* Projects Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>مشاريعك</h2>
            <div style={styles.projectsGrid}>
              {projects.map((project) => (
                <div key={project.id} style={styles.projectCard}>
                  <h3 style={styles.projectTitle}>{project.name}</h3>
                  <p style={styles.projectStatus}>الحالة: {project.status}</p>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressFill, width: `${project.progress}%` }}></div>
                  </div>
                  <p style={styles.progressText}>{project.progress}%</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>الإحصائيات</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h3 style={styles.statValue}>{projects.length}</h3>
                <p style={styles.statLabel}>إجمالي المشاريع</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statValue}>{projects.filter(p => p.status === 'مكتمل').length}</h3>
                <p style={styles.statLabel}>مشاريع مكتملة</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statValue}>{projects.filter(p => p.status === 'قيد التطوير').length}</h3>
                <p style={styles.statLabel}>مشاريع قيد التطوير</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  mainContent: {
    minHeight: 'calc(100vh - 200px)',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'right',
    color: '#333',
    marginBottom: '2rem',
  },
  section: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    textAlign: 'right',
    color: '#333',
    marginBottom: '1.5rem',
    fontSize: '1.3rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  infoCard: {
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    textAlign: 'right',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '0.5rem',
  },
  value: {
    margin: 0,
    color: '#333',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '6px',
    border: '1px solid #eee',
    textAlign: 'right',
  },
  projectTitle: {
    color: '#333',
    marginBottom: '0.5rem',
  },
  projectStatus: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  progressBar: {
    backgroundColor: '#e0e0e0',
    height: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  progressFill: {
    backgroundColor: '#667eea',
    height: '100%',
    transition: 'width 0.3s ease',
  },
  progressText: {
    margin: 0,
    color: '#667eea',
    fontWeight: 'bold',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  statCard: {
    backgroundColor: '#f0f0ff',
    padding: '1.5rem',
    borderRadius: '6px',
    textAlign: 'center',
  },
  statValue: {
    color: '#667eea',
    fontSize: '2.5rem',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    color: '#666',
    margin: 0,
  },
};

export default ClientPortal;
