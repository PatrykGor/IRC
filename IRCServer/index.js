const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
const longpoll = require("express-longpoll")(app);

app.use(cors())

app.use(express.json());
app.use("/", express.static("../IRCClient/static"));

longpoll.create("/update");

app.post("/send", (req, res) => {
    console.log("Received: " + JSON.stringify(req.body));
    longpoll.publish("/update", req.body)
    res.send("OK");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
