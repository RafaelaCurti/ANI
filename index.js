const { error } = require("console");
const express = require("express");
const app = express();
const port = 3600;
const router= require("./routers/Index");

router(app);

app.listen(port, (error) => {
    if (error) {
        console.log("Deu erro :( ");
        return;
    }
    else {
        console.log("Sistema no Ar");
    }
})