const path = require("path");
const fs = require("fs");

const runCommand = require("../utils/runCommand");
const { handleFullRequest, handleRangeRequest } = require("../utils/videoRender")

const renderVideo = async (req, res) => {
  await runCommand('npx remotion render brighterSideRemotion');
  const videoPath = path.resolve('out/brighterSideRemotion.mp4');
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    handleRangeRequest(req, res, videoPath, fileSize, range);
  } else {
    handleFullRequest(res, videoPath, fileSize);
  }
};

const getJsonData = async (req, res) => {
  try {
    const response = await axios.get('https://api.byteshop.in/podcast/brighterside/data.json');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}

module.exports = {
  renderVideo,
  getJsonData
};
