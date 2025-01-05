import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Rings } from "react-loader-spinner";
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
    <PersistGate
      loading={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Rings color="#3f51b5" height={80} width={80} />
        </div>
      }
      persistor={persistor}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
