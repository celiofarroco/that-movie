const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const PORT = 3000;

app.listen(PORT, () => console.log("listening on port " + PORT));
