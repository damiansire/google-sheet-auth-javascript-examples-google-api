const { google } = require("googleapis");
const getRange = require("./sheet_functions");

const spreadsheetId = "your_spreadsheetId_here";

const auth = new google.auth.GoogleAuth({
  keyFile: "./application_credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

getRange(auth, spreadsheetId, "H2:J").then(console.log);
