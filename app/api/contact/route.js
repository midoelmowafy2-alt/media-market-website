export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'الحقول المطلوبة غير مكتملة' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // هنا يمكن حفظ البيانات في قاعدة بيانات أو إرسالها
    console.log('رسالة جديدة:', { name, email, phone, message });

    return new Response(
      JSON.stringify({ message: 'تم استلام رسالتك بنجاح! سنتواصل معك قريباً' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('خطأ:', error);
    return new Response(
      JSON.stringify({ error: 'حدث خطأ في معالجة الرسالة' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
