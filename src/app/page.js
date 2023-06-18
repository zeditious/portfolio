import Head from "next/head";

import NavBar from "./NavBar/page";
import Home from "./Home/page";

export default function Index() {
  return (
    <div id="/" className="bg-black bg-opacity-50">
      <Head>
        <title>Ian Allish</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <Home />
    </div>
  );
}
