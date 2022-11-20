import Layout from "components/Layout/Layout";
import PageSpinner from "components/pageSpinner/PageSpinner";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "Routes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ component: Component, path }) => (
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
    </Routes>
  );
}

export default App;
