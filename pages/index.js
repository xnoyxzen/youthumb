import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  const openInDefaultBrowser = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <p className="text-gray-600">
          Get high-quality thumbnail images for free with our Image Grabber tool. Easily download  thumbnail images and photos of various qualities using this application. Simply paste the video's thumbnail URL into the input box below and click 'Get Thumbnail'.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter Video URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Get Thumbnails images
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {thumbnailOptions.map((option, index) => (
        <div key={index} className="thumbnail-option">
          <img src={option.url} alt={`Thumbnail ${index + 1}`} />
          <div className="button-container">
            <button
              className="btn-blue"
              onClick={() => copy(option.url)}
            >
              Copy Image URL
            </button>
            <button
              className="btn-blue"
              onClick={() => openInDefaultBrowser(option.url)}
            >
              Open in Browser
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
      <div>
      </div>
    </div>
  );
};

export default Index; 