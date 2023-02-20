import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { CronJob } = require("cron");
  const fetch = require("node-fetch");

  new CronJob(
    "* * * * * *",
    async function () {
      console.log("GETTING!");
      const response = await fetch("http://localhost:3000/api/hello");
      console.log("RESPONSE", response);
    },
    null,
    true,
    "America/Los_Angeles"
  );

  return <Component {...pageProps} />;
}
