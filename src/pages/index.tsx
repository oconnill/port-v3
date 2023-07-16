import Head from "next/head";
import styles from "./styles.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel OConnell</title>
        <meta name="description" content="Portfolio of Daniel O'Connell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main className={"p-10"}>
        <div className={'p-10'}>
          <div className={`flex ${styles.do_logo}`}>
            <div className={styles.do_logo_d}></div>
            <div className={styles.do_logo_o}></div>
          </div>
        </div>
        <div className={"mb-0.5 text-sky-500"}>Daniel O'Connell</div>
        <div className={"pt-2"}>
          I'm a front-end software engineer (former graphic designer) based in
          Boise, ID. specialize in building intuitive and accessible digital
          experiences(React, NextJS, Typescript).
        </div>
        <a
          className={"text-yellow-400 underline"}
          href={"https://www.linkedin.com/in/danieloconne11/"}
        >
          LinkedIn
        </a>
        {/*<SelectedWork />*/}
      </main>
    </>
  );
}
