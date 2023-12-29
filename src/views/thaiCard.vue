<template>
  <div class="graybg"></div>
</template>

<script>
import liff from "@line/liff";

import { ContactService } from '@/services/ContactService'

export default {
  
  data() {
    return {
      // 版本号
      version: "1.1.1",
      message: "",

      contactId: "",
      contact: "",

      flexJson: {},

      theUser: "",
      loading: false,

    };
  },

  created: async function() {

    this.theUser = this.getUrl("userid");
    let theUser = this.getUrl("userid");
    console.log(this.theUser, theUser)

    try {
        this.loading = true

        // let response = ContactService.getCardSpec(this.theUser).then(() => {
        let response = await ContactService.getCardSpec(this.theUser)
            if (response) {
                // console.log('view page-------->', response.data.records)

                this.contact = response.data.records[0]
                console.log('this contact-------->', this.contact.fields)

                // flex Json ----------------------------------------------

                let the_text = this.contact.fields.name.replace(/\s+/g, '');
                let the_tel = this.contact.fields.tel
                let the_label = this.contact.fields.tel_label
                let the_img_2013 = this.contact.fields.img
                let the_line_id = this.contact.fields.line_id
                // let the_share_url = "https://1b0a-27-189-213-239.ngrok-free.app/?userid=" + this.contact.fields.id
                let the_share_url = "https://liff.line.me/2002510427-JDBgB1KQ/?userid=4"

                // flex Json ----------------------------------------------

                const flexJson = {
                  type: "bubble",
                  size: "kilo",
                  hero: {
                    type: "image",
                    size: "full",
                    aspectRatio: "20:13",
                    aspectMode: "cover",
                    url: the_img_2013,
                  },
                  body: {
                    type: "box",
                    layout: "vertical",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: the_text,
                        wrap: true,
                        weight: "bold",
                        size: "lg",
                        style: "normal",
                      },
                      {
                        type: "text",
                        text: "Ant Global Property",
                        size: "sm",
                      },

                      {
                        type: "text",
                        text: "Thai Real Estate - Buy / Sale / Rent",
                        wrap: true,
                        size: "sm",
                      },

                      {
                        type: "button",
                        style: "link",
                        height: "sm",
                        action: {
                          type: "uri",
                          label: the_label,
                          uri: the_tel,
                        },
                      },
                    ],
                  },
                  footer: {
                    type: "box",
                    layout: "vertical",
                    spacing: "sm",
                    contents: [
                      {
                        type: "button",
                        style: "primary",
                        action: {
                          type: "uri",
                          label: "Line ID",
                          uri: the_line_id,
                        },
                        height: "sm",
                      },

                      {
                        type: "button",
                        style: "primary",
                        action: {
                          type: "uri",
                          label: "Share",
                          uri: the_share_url,
                        },
                        color: "#1B74E4",
                        height: "sm",
                        margin: "lg",
                      },

                    ],
                  },
                };

                this.flexJson = flexJson
                // console.log(this.flexJson, '<<<<<<<<<<<<<<<<<<<<------------')

                // flex Json ----------------------------------------------
                  
                this.loading = false

            }   
        // })     
    }
    catch (error) {
        this.errorMessage = error
        this.loading = false
    } 

  },  

  mounted: async function() {

    try {
        this.loading = true

        liff
          .init({ liffId: "2002510427-JDBgB1KQ" })
          .then(() => {
            if (!liff.isLoggedIn()) {
              console.log("用戶未登入 2023-12-28 - thai_card.vue");
              liff.login();
            } else {
              console.log("用戶已经登入 2023-12-28 - thai_card.vue");
              const myLink = liff.permanentLink.createUrl();
              console.log(
                "2023-12-28 - thai_card.vue -liff.permanentLink.createUrl",
                myLink
              );
              console.log(
                this.theUser, "2023-12-28 - user"
              );

              // ------------------------------

              // flex Json ----------------------------------------------

              let the_text = this.contact.fields.name.replace(/\s+/g, '');
              let the_tel = this.contact.fields.tel
              let the_label = this.contact.fields.tel_label
              let the_img_2013 = this.contact.fields.img
              let the_line_id = this.contact.fields.line_id
              // let the_share_url = "https://1b0a-27-189-213-239.ngrok-free.app/?userid=" + this.contact.fields.id
              let the_share_url = "https://liff.line.me/2002510427-JDBgB1KQ/?userid=" + this.contact.fields.id

              // flex Json ----------------------------------------------

              const flexJson = {
                type: "bubble",
                size: "kilo",
                hero: {
                  type: "image",
                  size: "full",
                  aspectRatio: "20:13",
                  aspectMode: "cover",
                  url: the_img_2013,
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: the_text,
                      wrap: true,
                      weight: "bold",
                      size: "lg",
                      style: "normal",
                    },
                    {
                      type: "text",
                      text: "Ant Global Property",
                      size: "sm",
                    },

                    {
                      type: "text",
                      text: "Thai Real Estate - Buy / Sale / Rent",
                      wrap: true,
                      size: "sm",
                    },

                    {
                      type: "button",
                      style: "link",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: the_label,
                        uri: the_tel,
                      },
                    },
                  ],
                },
                footer: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "button",
                      style: "primary",
                      action: {
                        type: "uri",
                        label: "Line ID",
                        uri: the_line_id,
                      },
                      height: "sm",
                    },

                    {
                      type: "button",
                      style: "primary",
                      action: {
                        type: "uri",
                        label: "Share",
                        uri: the_share_url,
                      },
                      color: "#1B74E4",
                      height: "sm",
                      margin: "lg",
                    },

                  ],
                },
              };

              // ------------------------------

              this.sendD(flexJson, the_text)
            }
          })
          .catch((err) => {
            console.log("Init Failed", err);
          });
    }
    catch (error) {
        this.errorMessage = error
        this.loading = false
    }      
  },

  methods: {

    sendD(flexJson, theText) {

      let theName = theText + "'s Name Card"

      let theFlexJson = flexJson

      liff
        .shareTargetPicker([
          {
            type: "flex",
            altText: theName,
            contents: theFlexJson,
          },
        ])
        .then(function (res) {
          if (res) {
            console.log(`[${res.status}] Message sent!`);
          } else {
            console.log(
              "TargetPicker was opened at least. Whether succeeded to send message is unclear"
            );
          }

          liff.closeWindow();
        })
        .catch(function (error) {
          console.log("something wrong happen", error);
        });
      
    },

    getUrl(args) {
      console.log("getUrl -----------------------------------");
      let whichUser = "";
      whichUser = this.getQueryVariable(args);
      console.log(whichUser);
      console.log("getUrl -----------------------------------");

      return whichUser;
    },

    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },

  },
};
</script>

<style scoped>
</style>
