import DocumentLayout from "components/Layout/DocumentLayout/DocumentLayout";
import Layout from "components/Layout/Layout";
import PageSpinner from "components/pageSpinner/PageSpinner";
import { CERTIFICATE_STEPS, DOCUMENT_TABS } from "constants/appConstants";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes, { paths } from "Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.main.map(({ component: Component, path }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<PageSpinner />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>

      {}
      <Route
        path={routes.certificates.path}
        element={
          <DocumentLayout tabItems={DOCUMENT_TABS} steps={CERTIFICATE_STEPS} />
        }
      >
        <Route index element={<Navigate to={paths.CERTIFICATES_UPLOAD} />} />
        {routes.certificates.children.map(({ component: Component, path }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<PageSpinner height="50vh" width="50vw" />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
