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

  console.log('🔍 DEBUG - Email receiver configured:', YOUR_EMAIL ? 'YES' : 'NO');
  console.log('🔍 DEBUG - Receiver email:', YOUR_EMAIL);
  console.log('🔍 DEBUG - User email to submit:', data.email);

  if (!YOUR_EMAIL) {
    console.error('❌ Email receiver not configured. Please set VITE_EMAIL_RECEIVER in .env file');
    // For development, just log the email
    console.log('Email submission (dev mode):', data);
    return { success: true };
  }

  console.log('📧 Sending to Formsubmit.co...');

  try {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('_subject', 'New Dipidi Waitlist Signup!');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_next', window.location.href); // Return to same page
    formData.append('source', data.source || 'footer-signup');

    const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('📬 Response status:', response.status);
    console.log('📬 Response OK:', response.ok);

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Success! Response:', result);
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error('❌ Failed! Status:', response.status, 'Error:', errorText);
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
