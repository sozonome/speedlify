module.exports = {
	name: "Some Projects", // optional, falls back to object key
	description: "Some Projects",
	// // skip if localhost
	// // skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://covid19.sznm.dev/",
		"https://addtocal.sznm.dev/",
		"https://kapturalumina.sznm.dev/",
		"https://nextchakra-starter.sznm.dev/",
		"https://advicegen.sznm.dev/",
		"https://instaprofile.sznm.dev/",
		"https://le-cook.sznm.dev/",
		"https://igdl.sznm.dev/"
	]
};