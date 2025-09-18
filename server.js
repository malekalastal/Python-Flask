const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

let posts = [];

app.post("/addPost", (req, res) => {
    const { text } = req.body;
    if(text) {
        posts.unshift({ text });
        res.json({ success: true, posts });
    } else {
        res.json({ success: false });
    }
});

app.get("/getPosts", (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
