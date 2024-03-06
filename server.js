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

app.listen(5432, () => {
    console.log("App is listening on http://localhost:5432");
})
