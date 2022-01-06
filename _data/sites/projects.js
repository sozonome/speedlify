module.exports = {
  name: "Some Projects", // optional, falls back to object key
  description: "Some Projects",
  // // skip if localhost
  // // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    frequency: 30, // max once every 30 minutes
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run",
  },
  urls: [
    "https://sznm.dev/",
    "https://agustinusnathaniel.com/",
    "https://olamonde.me/",
    "https://olamonde.me/sozonome",
    "https://olamonde.me/agustinusnathaniel",
    "https://spoker.sznm.dev/",
    "https://publicapis.sznm.dev/",
    "https://muvees.sznm.dev/",
    "https://gaas.sznm.dev/",
    "https://covid19.sznm.dev/",
    "https://kapturalumina.sznm.dev/",
    "https://v5.agustinusnathaniel.com/",
    "https://base.sznm.dev/"
  ],
};
