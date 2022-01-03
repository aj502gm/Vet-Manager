const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    console.log("Connected to React");
    // res.redirect("/");
    res.send([{algo: "algo"}, {algo: "algo2"}]);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
