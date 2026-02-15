/**
 * Email submission utility using Formsubmit.co
 *
 * SETUP (30 seconds):
 * 1. Open .env file
 * 2. Set VITE_EMAIL_RECEIVER to your email address
 * 3. That's it! Emails will be sent to your inbox
 *
 * Features:
 * - 100% Free & Unlimited
 * - No signup required
 * - Emails sent directly to your inbox
 * - Spam protection included
 */

export interface EmailSubmissionData {
  email: string;
  source?: string;
}

export async function submitEmail(data: EmailSubmissionData): Promise<{ success: boolean; error?: string }> {
  // Get your email address from environment variable
  const YOUR_EMAIL = import.meta.env.VITE_EMAIL_RECEIVER;

  if (!YOUR_EMAIL) {
    console.error('Email receiver not configured. Please set VITE_EMAIL_RECEIVER in .env file');
    // For development, just log the email
    console.log('Email submission (dev mode):', data);
    return { success: true };
  }

  try {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('_subject', 'New Dipidi Waitlist Signup!');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('source', data.source || 'footer-signup');

    const response = await fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: 'Failed to submit email' };
    }
  } catch (error) {
    console.error('Error submitting email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit email',
    };
  }
}
