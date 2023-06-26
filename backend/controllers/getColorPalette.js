//? AXIOS
const axios = require('axios');

// const pexels_api_key = 'KjGUmD7IxShebLPS7jQVEoCCD5HckhVAv1wt8BaLRD06cyuarWqWqqSV';

// In Express, middleware functions are expected to either call the next function to pass control to the next middleware in the chain or
// send a response to the client using res.send(), res.json(), or similar methods.
const getColorPalette = async (req, res, next) => {
    try {
        const colorPaletteURL = 'http://colormind.io/api/';
        const response = await axios.post(colorPaletteURL, {
          model: 'default'
        });
        // console.log(response.data)
        res.send(response.data);
      } catch (error) {
        console.log(error)
      }
};

module.exports = getColorPalette;