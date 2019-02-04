// import spotify from '../credentials';

// const AuthorizeSpotify = (req, res) => {

// 	const url = `https://accounts.spotify.com/authorize?&client_id${
// 		spotify.client_id
// 	}&redirect_uri=${encodeURI(
// 		spotify.redirect_uri
// 	)}&response_type=code&scope=${spotify.scope}`;

// 	res.redirect(url);
// };

// export default AuthorizeSpotify;










// const spotify = require('../credentials');

// const authorizeSpotify = (req, res) => {
// 	const scopes = 'user-read-recently-played';

// 	const url = `https://accounts.spotify.com/authorize?&client_id=${
// 	spotify.client_id
// 	}&redirect_uri=${encodeURI(
// 	spotify.redirect_uri
// 	)}&response_type=code&scope=${scopes}`;

// 	res.redirect(url);
// };

// module.exports = authorizeSpotify;