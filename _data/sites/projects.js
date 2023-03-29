module.exports = {
  name: "Projects", // optional, falls back to object key
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
    "https://wus.sh/",
    "https://wus.sh/sozonome",
    "https://wus.sh/agustinusnathaniel",
    "https://spoker.dev/intro",
    "https://publicapis.sznm.dev/",
    "https://muvees.sznm.dev/",
    "https://gaas.sznm.dev/",
    "https://base.sznm.dev/",
    "https://xtarter.sznm.dev/",
  ],
};
