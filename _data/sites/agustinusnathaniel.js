module.exports = {
  name: 'agustinusnathaniel.com', // optional, falls back to object key
  description: 'agustinusnathaniel.com',
  // // skip if localhost
  // // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT || process.env.SITE_NAME !== 'speedlify',
  options: {
    frequency: 60 * 5, // every 5 hours max once
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: 'site',
  },
  urls: [
    'https://agustinusnathaniel.com/',
  ],
};
