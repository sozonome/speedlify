module.exports = {
  name: 'sznm.dev', // optional, falls back to object key
  description: "sznm.dev",
  options: {
    frequency: 60 * 23, // (in minutes), 23 hours
    freshChrome: 'site',
  },
  urls: [
    'https://sznm.dev/',
    'https://sznm.dev/projects/',
    'https://sznm.dev/blog/',
    'https://sznm.dev/about/',
    // some posts
    'https://sznm.dev/blog/2020-05-02-self-challenge/',
  ],
};
