'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('تم إرسال رسالتك بنجاح');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero">
          <div className="container">
            <h1>مرحبا بك في ميديا ماركت</h1>
            <p>الحل المتكامل لتسويقك وخدماتك</p>
            <button className="cta-button">ابدأ الآن</button>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <h2>خدماتنا</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>التسويق الرقمي</h3>
                <p>استراتيجيات تسويقية فعالة للوصول لعملائك</p>
              </div>
              <div className="service-card">
                <h3>إدارة وسائل التواصل</h3>
                <p>محتوى احترافي وتفاعل مع جمهورك</p>
              </div>
              <div className="service-card">
                <h3>تطوير الويب</h3>
                <p>مواقع حديثة وتطبيقات قوية</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2>تواصل معنا</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="اسمك" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="بريدك الإلكتروني" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="tel" placeholder="رقم هاتفك" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <textarea placeholder="رسالتك" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
              <button type="submit">إرسال</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
