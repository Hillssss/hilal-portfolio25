import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Ambil data dari body request
    const { firstname, lastname, email, phone, service, message } = body;

    // Validasi input (agar tidak undefined)
    if (!firstname || !lastname || !email || !message || !service) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT), // Pastikan port dalam bentuk angka
      secure: true, // true untuk port 465, false untuk lainnya
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Kirim email ke admin/penerima utama
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${process.env.SMTP_USER}>`, // Dari emailmu sendiri
      to: process.env.SMTP_USER, // Email utama penerima
      replyTo: email, // Jika dibalas, langsung ke email user
      subject: `New Contact Form Submission: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background: #f4f4f4; border-radius: 10px;">
          <h2 style="background: #333; color: white; padding: 10px; text-align: center; border-radius: 5px;">
            New Contact Form Submission
          </h2>
          <p><strong>Nama:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 5px; border-left: 5px solid #333;">
            ${message}
          </div>
          <p style="text-align: center; margin-top: 20px; font-size: 12px; color: #555;">
            This email was sent from your contact form.
          </p>
        </div>
      `,
    });

    // Kirim auto-reply ke pengirim
    await transporter.sendMail({
      from: `"Hilal Hibatullah Agus" <${process.env.SMTP_USER}>`, // Ganti dengan nama bisnis kamu
      to: email, // Email pengirim
      subject: "Terima Kasih! Saya telah menerima pesan Anda",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background: #f4f4f4; border-radius: 10px;">
          <h2 style="background: #333; color: white; padding: 10px; text-align: center; border-radius: 5px;">
            Terima Kasih Sudah Menghubungi Saya!
          </h2>
          <p>Halo <strong>${firstname} ${lastname}</strong>,</p>
          <p>Saya telah menerima pesan Anda dan akan segera merespons secepatnya.</p>
          <p><strong>Pesan Anda:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 5px; border-left: 5px solid #333;">
            ${message}
          </div>
          <p>Jika ini mendesak, silakan hubungi kami langsung di ${process.env.SMTP_USER}.</p>
          <p>Salam,</p>
          <p><strong>Tim Support</strong></p>
        </div>
      `,
    });
   ;
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
     console.error("MAIL ERROR:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
