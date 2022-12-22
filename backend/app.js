const express = require("express");
const config = require("config");
// const cloudinary = require("cloudinary");

// cloudinary.config({
//   cloud_name: config.get("cloudinary.cloudName"),
//   api_key: config.get("cloudinary.apiKey"),
//   api_secret: config.get("cloudinary.apiSecret"),
// });

const app = express();

require("./startup/config")();
require("./startup/db")();
require("./startup/logging")();
require("./startup/routes")(app);

const port = config.get("server.port") || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
