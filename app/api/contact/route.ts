import { contactFormSchema } from "@/lib/validations/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate body using Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const issue = validationResult.error.issues[0];
      return NextResponse.json(
        { error: issue?.message || "Invalid form data provided." },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Send email notification to Md Ramjan Ali
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mdramjan.ict@gmail.com"],
      subject: `📩 New Portfolio Contact from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">New Contact Form Message</h2>
          <p style="font-size: 14px; color: #333333;">You have received a new message from your portfolio website:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="margin: 5px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #ea580c;">${email}</a></p>
          </div>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; white-space: pre-wrap; font-size: 14px; color: #1f2937;">${message}</div>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eeeeee;" />
          <p style="font-size: 12px; color: #888888; text-align: center;">Sent automatically from your portfolio contact form.</p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact Form Submission Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
