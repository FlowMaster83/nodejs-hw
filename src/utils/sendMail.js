import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};


// import { BrevoClient } from "@getbrevo/brevo";

// const brevo = new BrevoClient({
//   apiKey: process.env.BREVO_API_KEY,
// });

// export const sendEmail = async ({ from, to, subject, html }) => {
//   return await brevo.transactionalEmails.sendTransacEmail({
//     subject,
//     htmlContent: html,
//     sender: { email: from },
//     to: [{ email: to }],
//   });
// };
