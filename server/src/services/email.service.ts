import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { config } from '../config';
import { logger } from '../config/logger';

// ─── Resend (lazy) ────────────────────────────────────
let _resend: Resend | null = null;
function getResend(): Resend | null {
  if (!config.RESEND_API_KEY) return null;
  if (!_resend) _resend = new Resend(config.RESEND_API_KEY);
  return _resend;
}

// ─── Nodemailer (lazy) ────────────────────────────────
let _transporter: nodemailer.Transporter | null = null;
function getTransporter(): nodemailer.Transporter | null {
  if (!config.SMTP_HOST || !config.SMTP_USER || !config.SMTP_PASS) return null;
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT ?? 587,
      secure: (config.SMTP_PORT ?? 587) === 465,
      auth: { user: config.SMTP_USER, pass: config.SMTP_PASS },
    });
  }
  return _transporter;
}

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  // 1. Try Resend
  const resend = getResend();
  if (resend) {
    const { error } = await resend.emails.send({
      from: config.FROM_EMAIL,
      to,
      subject,
      html,
    });
    if (error) {
      logger.error('Failed to send email via Resend', { to, subject, error });
      throw new Error(`Email send failed: ${error.message}`);
    }
    logger.info('Email sent via Resend', { to, subject });
    return;
  }

  // 2. Fall back to SMTP / nodemailer
  const transporter = getTransporter();
  if (transporter) {
    await transporter.sendMail({
      from: config.FROM_EMAIL,
      to,
      subject,
      html,
    });
    logger.info('Email sent via SMTP', { to, subject });
    return;
  }

  // 3. Neither configured
  logger.warn('No email provider configured — skipping send', { to, subject });
}
