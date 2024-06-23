const express = require('express');
const path = require('path');
const cors = require('cors');
const codeTutRoutes = require("./routes/codeTut.route");
const brighterSideRoutes = require("./routes/brighterSide.route");

const app = express();
const port = 8000;
const host = 'localhost';

app.use(cors());

app.use("/code-tut", codeTutRoutes);
app.use("/brighter-side", brighterSideRoutes);

app.get('/audio', (req, res) => {
  const filePath = req.query.filePath;
  const fileDirectory = path.join(__dirname, filePath);

  console.log(`Requested file: ${fileDirectory}`); // Debugging line

  res.sendFile(fileDirectory, err => {
    if (err) {
      if (!res.headersSent) {
        console.error(`Error sending file: ${err.message}`); // Debugging line
        res.status(404).send('File not found');
      } else {
        console.error('Error sending file after headers sent:', err.message);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
