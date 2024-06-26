const { google } = require("googleapis");
const getRange = require("../libs/sheet_functions");

const spreadsheetId = "your_spreadsheetId_here";

const auth = new google.auth.GoogleAuth({
  keyFile: "./service_account_auth_credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

getRange(auth, spreadsheetId, "H2:J").then(console.log);
