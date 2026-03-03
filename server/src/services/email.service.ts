import { Resend } from 'resend';
import { config } from '../config';
import { logger } from '../config/logger';

const resend = new Resend(config.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!config.RESEND_API_KEY) {
    logger.warn('RESEND_API_KEY not set — skipping email send', { to, subject });
    return;
  }

  const { error } = await resend.emails.send({
    from: config.FROM_EMAIL,
    to,
    subject,
    html,
  });

  if (error) {
    logger.error('Failed to send email', { to, subject, error });
    throw new Error(`Email send failed: ${error.message}`);
  }

  logger.info('Email sent', { to, subject });
}
