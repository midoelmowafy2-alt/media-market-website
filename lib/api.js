const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Send contact message
export const sendContactMessage = async (data) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('فشل إرسال الرسالة');
    }
    
    return await response.json();
  } catch (error) {
    console.error('خطأ:', error);
    throw error;
  }
};

// Get all contacts (Admin only)
export const getContacts = async () => {
  try {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (!response.ok) {
      throw new Error('فشل جلب الرساللات');
    }
    
    return await response.json();
  } catch (error) {
    console.error('خطأ:', error);
    throw error;
  }
};

// Get server health status
export const getHealthStatus = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000'}/health`, {
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('الخادم غير متاح');
    }
    
    return await response.json();
  } catch (error) {
    console.error('خطأ:', error);
    throw error;
  }
};

// Handle API errors
export const handleApiError = (error) => {
  return {
    success: false,
    message: error.message || 'حدث خطأ عام',
    error: error,
  };
};
