## Obtaining Google Service Account Credentials

This project uses Google Service Accounts to securely authenticate with Google APIs. Follow these steps to obtain and use your credentials:

### 1. Create a Service Account:

1. Visit the [Google Cloud Console: Create Service Account Key](https://console.cloud.google.com/apis/credentials/serviceaccountkey) page.
2. From the **Service account** dropdown, select **New service account**.
3. Give your service account a descriptive name (e.g., "Spreadsheet Data Reader").
4. Optionally, assign a role to the service account that gives it the necessary permissions for your task (e.g., "Sheets Viewer" if you only need to read data).
5. Click **Create**.
6. In the "Grant this service account access to project" dialog, you can optionally grant more specific permissions. Be mindful of the principle of least privilege and only grant what's necessary.
7. Click **Continue**.
8. In the "Grant users access to this service account" dialog, you can add other users who should be able to manage this service account. This is optional.
9. Click **Done**.

### 2. Download the Key File:

1. On the Service Accounts page, you'll see your newly created service account.
2. Click on the email address of the service account.
3. Go to the **Keys** tab.
4. Click **Add Key** and select **Create new key**.
5. Choose the **JSON** key type.
6. Click **Create**. Your key file will be downloaded automatically.

**Important Security Note:**

- **Keep your JSON key file confidential!** Do not share it publicly or commit it to version control. Treat it like a password.

### 3. Use the Credentials in Your Code:

**Option A: Environment Variable**

1. Rename the downloaded key file to `credentials.json` (or any name you prefer).
2. Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the full path of the key file:

   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/credentials.json"
   ```

**Option B: `keyFile` Property**

1. In your Node.js code, provide the path to the key file when creating your `GoogleAuth` instance:

   ```javascript
   const { google } = require("googleapis");

   const auth = new google.auth.GoogleAuth({
     keyFile: "/path/to/your/credentials.json", // Update with the actual path
     scopes: [
       "[https://www.googleapis.com/auth/spreadsheets.readonly](https://www.googleapis.com/auth/spreadsheets.readonly)",
     ], // Or the necessary scopes for your tasks
   });
   ```
