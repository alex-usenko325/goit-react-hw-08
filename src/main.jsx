import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
