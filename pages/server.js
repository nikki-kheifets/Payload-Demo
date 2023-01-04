const express = require("express");

const app = express();

app.listen(3000, async () => {
  console.log(
    "Express is now listening for incoming connections on port 3000."
  );
});
