'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ total: 0, today: 0, pending: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/contacts' || 'http://localhost:5000/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
        updateStats(data);
      }
    } catch (error) {
      console.error('خطأ عند جلب الرسائل:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStats = (data) => {
    const today = new Date().toDateString();
    const todayCount = data.filter(c => new Date(c.createdAt).toDateString() === today).length;
    setStats({ total: data.length, today: todayCount, pending: data.length });
  };

  return (
    <>
      <Header />
      <main style={styles.mainContent}>
        <div style={styles.container}>
          <h1 style={styles.title}>لوحة تحكم المشرف</h1>
          
          {/* Statistics Cards */}
          <div style={styles.statsGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>إجمالي الرسائل</h3>
              <p style={styles.cardValue}>{stats.total}</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>الرسالة اليوم</h3>
              <p style={styles.cardValue}>{stats.today}</p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>المعلقة</h3>
              <p style={styles.cardValue}>{stats.pending}</p>
            </div>
          </div>
          
          {/* Contacts Table */}
          <div style={styles.tableContainer}>
            <h2 style={styles.sectionTitle}>ضارة الرسالات</h2>
            {loading ? (
              <p>جار التحميل...</p>
            ) : (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>الاسم</th>
                    <th style={styles.th}>البريد الإلكتروني</th>
                    <th style={styles.th}>الهاتف</th>
                    <th style={styles.th}>الرسالة</th>
                    <th style={styles.th}>الباريخ</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, idx) => (
                    <tr key={idx} style={styles.tr}>
                      <td style={styles.td}>{contact.name}</td>
                      <td style={styles.td}>{contact.email}</td>
                      <td style={styles.td}>{contact.phone}</td>
                      <td style={styles.td}>{contact.message.substring(0, 50)}...</td>
                      <td style={styles.td}>{new Date(contact.createdAt).toLocaleDateString('ar-SA')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'right',
  },
  cardTitle: {
    color: '#666',
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  cardValue: {
    color: '#667eea',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  tableContainer: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    textAlign: 'right',
    color: '#333',
    marginBottom: '1rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#667eea',
    color: 'white',
    padding: '1rem',
    textAlign: 'right',
    borderBottom: '2px solid #555',
  },
  tr: {
    borderBottom: '1px solid #eee',
  },
  td: {
    padding: '1rem',
    textAlign: 'right',
    color: '#333',
  },
};

export default AdminDashboard;
