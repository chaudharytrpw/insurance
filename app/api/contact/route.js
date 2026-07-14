import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, vehicle, message } = body;

    console.log(email);
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // 1. Email to Admin
    // =========================
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚗 New Insurance Inquiry - ${vehicle}`,
      html: `
      <div style="font-family:Arial,sans-serif;background:#f5f7fb;padding:30px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

          <tr>
            <td style="background:#0F4C81;padding:25px;text-align:center;color:#fff;">
              <h1 style="margin:0;">New Insurance Inquiry</h1>
              <p style="margin-top:8px;">A new customer has submitted an inquiry.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              <table width="100%" cellpadding="10">

                <tr>
                  <td style="font-weight:bold;">👤 Name</td>
                  <td>${name}</td>
                </tr>

                <tr style="background:#f7f7f7;">
                  <td style="font-weight:bold;">📧 Email</td>
                  <td>${email}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;">📞 Phone</td>
                  <td>${phone}</td>
                </tr>

                <tr style="background:#f7f7f7;">
                  <td style="font-weight:bold;">🚘 Vehicle</td>
                  <td>${vehicle}</td>
                </tr>

                <tr>
                  <td style="font-weight:bold;">💬 Message</td>
                  <td>${message}</td>
                </tr>

              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#0F4C81;color:#fff;padding:15px;text-align:center;">
              Website Contact Form
            </td>
          </tr>

        </table>
      </div>
      `,
    });

    // =========================
    // 2. Thank You Email to Customer
    // =========================
    await transporter.sendMail({
      from: `"Insurance Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thank You for Contacting Us",
      html: `
      <div style="font-family:Arial,sans-serif;background:#eef4fb;padding:30px;">

      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

      <tr>
      <td style="background:#0F4C81;padding:30px;text-align:center;color:white;">
      <h1 style="margin:0;">Thank You, ${name} 🙏</h1>
      </td>
      </tr>

      <tr>
      <td style="padding:35px;">

      <p style="font-size:16px;line-height:28px;">
      We have successfully received your insurance inquiry.
      </p>

      <p style="font-size:16px;line-height:28px;">
      Our team will review your request and contact you as soon as possible.
      </p>

      <div style="background:#F7F9FC;border-radius:10px;padding:20px;margin:30px 0;">

      <h3 style="margin-top:0;color:#0F4C81;">
      Inquiry Details
      </h3>

      <table width="100%" cellpadding="8">

      <tr>
      <td><b>Name</b></td>
      <td>${name}</td>
      </tr>

      <tr>
      <td><b>Email</b></td>
      <td>${email}</td>
      </tr>

      <tr>
      <td><b>Phone</b></td>
      <td>${phone}</td>
      </tr>

      <tr>
      <td><b>Vehicle</b></td>
      <td>${vehicle}</td>
      </tr>

      <tr>
      <td><b>Message</b></td>
      <td>${message}</td>
      </tr>

      </table>

      </div>

      <div style="text-align:center;margin-top:30px;">

      <a href="https://yourwebsite.com"
      style="background:#0F4C81;color:#fff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:bold;display:inline-block;">
      Visit Our Website
      </a>

      </div>

      <p style="margin-top:35px;">
      Regards,<br>
      <b>Your Insurance Team</b>
      </p>

      </td>
      </tr>

      <tr>
      <td style="background:#0F4C81;color:#fff;text-align:center;padding:18px;">
      © ${new Date().getFullYear()} Your Company. All Rights Reserved.
      </td>
      </tr>

      </table>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}