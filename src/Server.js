const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//static files from the public directory
app.use(express.static(path.join(__dirname, '..','public')));

//serve the main html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});


app.listen(PORT, () => {
    console.log(`The server is currently running at http://localhost:${PORT}/`)
})