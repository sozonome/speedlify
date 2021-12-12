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
    "https://agustinusnathaniel.com/",
    "https://covid19.sznm.dev/",
    "https://sznm.dev/",
    "https://advicegen.sznm.dev/",
    "https://kapturalumina.sznm.dev/",
    "https://nextarter-chakra.sznm.dev/",
    "https://addtocal.sznm.dev/",
    "https://publicapis.sznm.dev/",
    "https://muvees.sznm.dev/",
    "https://gaas.sznm.dev/",
    "https://snowpack-react-chakra-starter.sznm.dev",
    "https://vite-react-chakra-starter.sznm.dev",
    "https://spoker.sznm.dev/",
    "https://olamonde.me/",
    "https://olamonde.me/sozonome",
    "https://olamonde.me/agustinusnathaniel",
    "https://nextarter-mui.sznm.dev/",
    "https://nextarter-daisy.sznm.dev/",
    "https://mixtarter-chakra.sznm.dev/",
    "https://mixtarter-tailwind.sznm.dev/"
  ],
};
