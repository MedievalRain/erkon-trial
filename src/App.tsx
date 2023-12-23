import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ResetStyles } from "./ui/styles/ResetStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./ui/styles/Colors";

function App() {
  return (
    <Provider store={store}>
      <ResetStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
