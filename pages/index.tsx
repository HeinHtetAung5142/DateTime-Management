import Head from "next/head";
import TextField from "@mui/material/TextField";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To-Do App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>To-Do</a> App
        </h1>

        <p className={styles.description}>
          Get started by adding <code className={styles.code}>a new task</code>
        </p>
        <form>
          <TextField
            id="outlined-basic"
            label="Add a new task"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="Start Date and Time"
            type="datetime-local"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="End Date and Time"
            type="datetime-local"
            variant="outlined"
            required
          />
        </form>
        <br />
      </main>

      <footer className={styles.footer}>Powered by Hein Htet Aung</footer>
    </div>
  );
}
