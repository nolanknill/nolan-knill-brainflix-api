const express = require("express")
const app = express();

app.get("/pets", (req, res) => {
    return res.json([
        "Sophie",
        "Zeus",
        "Leeland",
        "Kermit"
    ]);
})

app.listen(5000, () => {
    console.log("http://localhost:5000 is currently running the application");
})
