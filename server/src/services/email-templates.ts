import { config } from '../config';

const clientUrl = config.CLIENT_URL;
const apiUrl = `${config.SERVER_URL}/api/${config.API_VERSION}`;

const buttonStyle =
  'display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;text-decoration:none;border-radius:10px;font-weight:600;font-size:15px;';

const containerStyle =
  'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;max-width:520px;margin:0 auto;background:#fff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;';

const headerStyle =
  'background:linear-gradient(135deg,#3b82f6,#8b5cf6);padding:32px 40px;text-align:center;';

const bodyStyle = 'padding:32px 40px;';

const footerStyle =
  'padding:20px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;color:#9ca3af;font-size:12px;';

export function verificationEmail(name: string, token: string): { subject: string; html: string } {
  const url = `${apiUrl}/auth/verify-email?token=${token}`;
  return {
    subject: 'Verify your email — GrowRight',
    html: `
<div style="background:#f3f4f6;padding:40px 20px;">
  <div style="${containerStyle}">
    <div style="${headerStyle}">
      <h1 style="color:#fff;margin:0;font-size:28px;font-weight:700;letter-spacing:-0.5px;">GrowRight</h1>
      <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:14px;">Child Development Tracking</p>
    </div>
    <div style="${bodyStyle}">
      <h2 style="color:#111827;font-size:22px;margin:0 0 12px;">Hi ${name},</h2>
      <p style="color:#4b5563;font-size:15px;line-height:1.6;margin:0 0 28px;">
        Thanks for signing up! Please verify your email address to activate your account and start tracking your child's development journey.
      </p>
      <div style="text-align:center;margin-bottom:28px;">
        <a href="${url}" style="${buttonStyle}">Verify Email Address</a>
      </div>
      <p style="color:#6b7280;font-size:13px;margin:0 0 8px;">Or copy this link into your browser:</p>
      <p style="color:#3b82f6;font-size:13px;word-break:break-all;margin:0 0 24px;">${url}</p>
      <p style="color:#9ca3af;font-size:13px;margin:0;">This link expires in <strong>24 hours</strong>. If you didn't create an account, you can safely ignore this email.</p>
    </div>
    <div style="${footerStyle}">
      © ${new Date().getFullYear()} GrowRight. Helping families track development milestones.
    </div>
  </div>
</div>`,
  };
}

export function passwordResetEmail(name: string, token: string): { subject: string; html: string } {
  const url = `${clientUrl}/reset-password?token=${token}`;
  return {
    subject: 'Reset your password — GrowRight',
    html: `
<div style="background:#f3f4f6;padding:40px 20px;">
  <div style="${containerStyle}">
    <div style="${headerStyle}">
      <h1 style="color:#fff;margin:0;font-size:28px;font-weight:700;letter-spacing:-0.5px;">GrowRight</h1>
    </div>
    <div style="${bodyStyle}">
      <h2 style="color:#111827;font-size:22px;margin:0 0 12px;">Hi ${name},</h2>
      <p style="color:#4b5563;font-size:15px;line-height:1.6;margin:0 0 28px;">
        We received a request to reset your password. Click the button below to choose a new one.
      </p>
      <div style="text-align:center;margin-bottom:28px;">
        <a href="${url}" style="${buttonStyle}">Reset Password</a>
      </div>
      <p style="color:#9ca3af;font-size:13px;margin:0;">This link expires in <strong>1 hour</strong>. If you didn't request a password reset, you can safely ignore this email.</p>
    </div>
    <div style="${footerStyle}">
      © ${new Date().getFullYear()} GrowRight
    </div>
  </div>
</div>`,
  };
}

export function childInviteEmail(
  inviterName: string,
  childName: string,
  token: string
): { subject: string; html: string } {
  const url = `${clientUrl}/accept-invite?token=${token}`;
  return {
    subject: `${inviterName} shared ${childName}'s profile with you — GrowRight`,
    html: `
<div style="background:#f3f4f6;padding:40px 20px;">
  <div style="${containerStyle}">
    <div style="${headerStyle}">
      <h1 style="color:#fff;margin:0;font-size:28px;font-weight:700;letter-spacing:-0.5px;">GrowRight</h1>
      <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:14px;">Child Development Tracking</p>
    </div>
    <div style="${bodyStyle}">
      <h2 style="color:#111827;font-size:22px;margin:0 0 12px;">You've been invited!</h2>
      <p style="color:#4b5563;font-size:15px;line-height:1.6;margin:0 0 28px;">
        <strong>${inviterName}</strong> has invited you to view <strong>${childName}</strong>'s development profile on GrowRight — including milestones, activities, and vaccinations.
      </p>
      <div style="text-align:center;margin-bottom:28px;">
        <a href="${url}" style="${buttonStyle}">Accept Invitation</a>
      </div>
      <p style="color:#6b7280;font-size:13px;margin:0 0 8px;">Or copy this link into your browser:</p>
      <p style="color:#3b82f6;font-size:13px;word-break:break-all;margin:0 0 24px;">${url}</p>
      <p style="color:#9ca3af;font-size:13px;margin:0;">
        This invitation expires in <strong>7 days</strong>. You'll need a GrowRight account to accept — create one for free at sign-up.
      </p>
    </div>
    <div style="${footerStyle}">
      © ${new Date().getFullYear()} GrowRight. Helping families track development milestones.
    </div>
  </div>
</div>`,
  };
}

export function childInviteAddedEmail(
  recipientName: string,
  inviterName: string,
  childName: string
): { subject: string; html: string } {
  const url = `${clientUrl}/children`;
  return {
    subject: `You now have access to ${childName}'s profile — GrowRight`,
    html: `
<div style="background:#f3f4f6;padding:40px 20px;">
  <div style="${containerStyle}">
    <div style="${headerStyle}">
      <h1 style="color:#fff;margin:0;font-size:28px;font-weight:700;letter-spacing:-0.5px;">GrowRight</h1>
    </div>
    <div style="${bodyStyle}">
      <h2 style="color:#111827;font-size:22px;margin:0 0 12px;">Hi ${recipientName},</h2>
      <p style="color:#4b5563;font-size:15px;line-height:1.6;margin:0 0 28px;">
        <strong>${inviterName}</strong> has added you as a viewer of <strong>${childName}</strong>'s profile. You can now see their milestones, activities, and vaccinations.
      </p>
      <div style="text-align:center;margin-bottom:28px;">
        <a href="${url}" style="${buttonStyle}">View Profile</a>
      </div>
    </div>
    <div style="${footerStyle}">
      © ${new Date().getFullYear()} GrowRight
    </div>
  </div>
</div>`,
  };
}
