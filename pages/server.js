const express = require("express");
const payload = require("payload");

const app = express();

payload.init({
  secret: "SECRET_KEY",
  mongoURL: "mongodb://localhost/payload",
  express: app,
});

app.listen(3000, async () => {
  console.log(
    "Express is now listening for incoming connections on port 3000."
  );
});
