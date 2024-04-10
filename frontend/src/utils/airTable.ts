import Airtable from "airtable";

export const base = new Airtable({ apiKey: "YOUR_API_KEY" }).base(
  "YOUR_BASE_ID"
);
