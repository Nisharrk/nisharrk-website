import Head from "next/head";
import Main from "@/src/components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nisharrk</title>
        <meta
          name="description"
          content="Hi there, This is your friendly-neighbourhood sharrk"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
