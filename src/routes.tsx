import { Navigate, createBrowserRouter } from "react-router-dom";
import { SuspendedPage } from "./pages/SuspendedPage";
import { lazy } from "react";

const PhoneFormPage = lazy(() => import("./pages/PhoneFormPage"));
const CodeFormPage = lazy(() => import("./pages/CodeFormPage"));
const ProtectedPage = lazy(() => import("./pages/ProtectedPage"));

export const router = createBrowserRouter([
  {
    path: "/",

    children: [
      { path: "", element: <Navigate to="/app" /> },
      {
        path: "auth",
        children: [
          { path: "", element: <Navigate to="phone" /> },
          {
            index: true,
            path: "phone",
            element: (
              <SuspendedPage>
                <PhoneFormPage />
              </SuspendedPage>
            ),
          },
          {
            path: "code",
            element: (
              <SuspendedPage>
                <CodeFormPage />
              </SuspendedPage>
            ),
          },
        ],
      },
      {
        path: "/app",
        element: (
          <SuspendedPage>
            <ProtectedPage />
          </SuspendedPage>
        ),
      },
    ],
  },
]);
