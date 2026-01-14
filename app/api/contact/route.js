import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'الحقول المطلوبة غير مكتملة' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `رسالة جديدة من ${name}`,
      html: `
        <h2>رسالة من نموذج الاتصال</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone || 'لم يتم تقديمه'}</p>
        <p><strong>الرسالة:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'تم إرسال الرسالة بنجاح' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('خطأ في إرسال الرسالة:', error);
    return new Response(
      JSON.stringify({ error: 'حدث خطأ ما' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
