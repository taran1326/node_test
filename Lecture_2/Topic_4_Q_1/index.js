const axios = require("axios");

module.exports = function () {
  (async () => {
    const res = await axios.get(
      "https://api.codingninjas.com/api/v3/event_tags"
    );
    console.log(res.data);
  })();
};
