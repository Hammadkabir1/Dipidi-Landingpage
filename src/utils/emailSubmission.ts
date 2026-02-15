/**
 * Email submission utility for Google Sheets integration
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste the following code in Code.gs:
 *
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *
 *   // Add headers if sheet is empty
 *   if (sheet.getLastRow() === 0) {
 *     sheet.appendRow(['Timestamp', 'Email', 'Source']);
 *   }
 *
 *   // Add the data
 *   sheet.appendRow([
 *     new Date(),
 *     data.email,
 *     data.source || 'landing-page'
 *   ]);
 *
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ success: true }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 *
 * 4. Deploy > New deployment
 * 5. Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Copy the Web App URL and paste it in the .env file as VITE_GOOGLE_SHEETS_URL
 */

export interface EmailSubmissionData {
  email: string;
  source?: string;
}

export async function submitEmail(data: EmailSubmissionData): Promise<{ success: boolean; error?: string }> {
  // Get the Google Sheets web app URL from environment variable
  const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  if (!SHEETS_URL) {
    console.error('Google Sheets URL not configured. Please set VITE_GOOGLE_SHEETS_URL in .env file');
    // For development, just log the email
    console.log('Email submission (dev mode):', data);
    return { success: true };
  }

  try {
    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With no-cors, we can't read the response, so we assume success if no error is thrown
    return { success: true };
  } catch (error) {
    console.error('Error submitting email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit email',
    };
  }
}
