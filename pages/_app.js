import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="YouTube Thumbnail Grabber view and Download : Grab All Youtube Thumbnails Size"
        description="Download youtube thumbnail image and Grab youtube video thumbnails images easy way get Thumbnail Image and save youtube thumbnail images with our free online thumbnail downloader tool "
        canonical="https://youtube-thumbnail-viewer.com"
        openGraph={{
          url: "https://youtube-thumbnail-viewer.com",
          title: "YouTube Thumbnail Grabber view and Download : Grab All Youtube Thumbnails Size",
          description: "Download youtube thumbnail image and Grab youtube video thumbnails images easy way get Thumbnail Image and save youtube thumbnail images with our free online thumbnail downloader tool",
          site_name: "YouTube Thumbnail Grabber view and Download : Grab All Youtube Thumbnails Size",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
