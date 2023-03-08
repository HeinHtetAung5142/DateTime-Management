import Head from "next/head";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "@/styles/Home.module.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
            Get started by adding{" "}
            <code className={styles.code}>a new task</code>
          </p>
          <form>
            <TextField
              id="outlined-basic"
              label="Add a new task"
              variant="outlined"
              required
              sx={{
                margin: "10px",
                width: "100%",
              }}
            />
            <br />
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DateTimePicker
                label="Start Date and Time"
                sx={{
                  margin: "10px",
                  width: "100%",
                }}
              />
            </LocalizationProvider>
            <br />
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DateTimePicker
                label="End Date and Time"
                sx={{
                  margin: "10px",
                  width: "100%",
                }}
              />
            </LocalizationProvider>
            <br />
            <Button
              variant="outlined"
              sx={{
                padding: "10px 0",
                margin: "10px",
                width: "100%",
              }}
            >
              Add
            </Button>
          </form>
        </main>

        <footer className={styles.footer}>Powered by Hein Htet Aung</footer>
      </div>
    </ThemeProvider>
  );
}
