// app/api/kinde-webhook/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// For signature verification (highly recommended for production)
import crypto from "crypto";

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports (uses STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const rawBody = await req.text(); // Get raw body for signature verification
    const signature = req.headers.get("x-kinde-signature");

    // --- Webhook Signature Verification (CRITICAL FOR PRODUCTION) ---
    // Make sure to set KINDE_WEBHOOK_SECRET in your .env.local
    if (process.env.KINDE_WEBHOOK_SECRET && signature) {
      const hmac = crypto.createHmac(
        "sha256",
        process.env.KINDE_WEBHOOK_SECRET
      );
      hmac.update(rawBody);
      const digest = hmac.digest("hex");

      if (digest !== signature) {
        console.warn(
          "Webhook signature mismatch! Request might be fraudulent."
        );
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 403 }
        );
      }
    } else if (process.env.NODE_ENV === "production") {
      console.error("KINDE_WEBHOOK_SECRET or signature missing in production!");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }
    // --- End Signature Verification ---

    const payload = JSON.parse(rawBody); // Parse after verification
    const eventType = payload.event_type;
    const user = payload.data.user;

    // Log the event for debugging
    console.log(`Kinde Webhook Event Received: ${eventType}`);
    console.log("User Data:", user);

    const fromEmail = process.env.FROM_EMAIL;
    if (!fromEmail) {
      console.error("FROM_EMAIL environment variable is not set.");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    switch (eventType) {
      case "user.created":
        // Handle User Sign-Up
        await transporter.sendMail({
          from: fromEmail,
          to: user.email,
          subject: "Welcome to ScentEcho!",
          html: `<h1>Hello ${user.given_name || user.email},</h1>
                 <p>Welcome to ScentEcho! We're thrilled to have you join our community.</p>
                 <p>Explore our exquisite fragrances and discover your signature scent.</p>
                 <p>Best regards,<br/>The ScentEcho Team</p>`,
        });
        console.log(`[Email Sent] Welcome email to: ${user.email}`);
        break;

      case "user.logged_in":
        // Handle User Sign-In (Login Alert)
        // You might want to make this optional or only send for first-time logins from new devices
        await transporter.sendMail({
          from: fromEmail,
          to: user.email,
          subject: "Login Alert: Your ScentEcho Account",
          html: `<p>Hi ${user.given_name || user.email},</p>
                 <p>This is a notification that your ScentEcho account was accessed recently.</p>
                 <p>If this was you, no action is needed. If you did not log in, please secure your account immediately.</p>
                 <p>Thank you,<br/>The ScentEcho Security Team</p>`,
        });
        console.log(`[Email Sent] Login alert to: ${user.email}`);
        break;

      case "user.logged_out":
        // Handle User Sign-Out (Optional: Confirmation)
        // This is less common to send an email for, but possible for audit trails or confirmation.
        await transporter.sendMail({
          from: fromEmail,
          to: user.email,
          subject: "ScentEcho: Account Logged Out",
          html: `<p>Dear ${user.given_name || user.email},</p>
                 <p>You have successfully logged out of your ScentEcho account.</p>
                 <p>We hope to see you again soon!</p>
                 <p>Sincerely,<br/>The ScentEcho Team</p>`,
        });
        console.log(`[Email Sent] Logout confirmation to: ${user.email}`);
        break;

      default:
        console.log(`Unhandled Kinde event type: ${eventType}`);
        break;
    }

    return NextResponse.json(
      { message: "Webhook received and processed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing Kinde webhook or sending email:", error);
    // In production, avoid sending specific error details to the client for security
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
