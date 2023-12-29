import axios from "axios";
// import airtable from 'airtable';

// GPT
export const ContactService = {

  // wonderful.2023 -- Thai Card -- card_info (tblAXgj8uC71IqX8B)
  serverAirURL: "https://api.airtable.com/v0/appXdwGBmnwwvQ8SD",
  air_token: "patqeUrC7eLbBBjx5.3fa0ab9407f2512416c9ae44562fa2a83c5c4231022022c745b418e940e79667",

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  async getCardSpec(contactId) {

    let dataURL = `${this.serverAirURL}/card_info?filterByFormula=({id}=${contactId})`

    let headers = {
      'Content-Type': 'application/json', // Example header
      'Authorization': `Bearer ${this.air_token}`
    };

    return axios.get(dataURL, { headers: headers });
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

}