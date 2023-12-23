import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { ResetStyles } from "./ui/styles/ResetStyles";

function App() {
  return (
    <Provider store={store}>
      <ResetStyles />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
