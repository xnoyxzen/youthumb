import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="google-site-verification" content="ev2zqiEtNbe8-uwfHM4WMVMk4cyoWIn13FaJiKH6WfE" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-X8WWC9D061"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-X8WWC9D061');
              `,
            }}
          />
        </Head>

        <body>
      
        
          <header>
            <nav>
              <ul>
                <li>
                  <h1><a href="/">Thumbnails Grabber</a></h1>
                </li>
                
              </ul>
            </nav>
          </header>

         

          <Main />
          <NextScript />
		  

<footer>
  
		
  

</footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;