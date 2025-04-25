import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { ApolloProvider } from "./providers/ApolloProvider";
import { CartProvider } from "./providers/CartProvider";
import { ScrollToTop } from "./components";
import {
  Error404,
  Error500,
  ProductDetailsPage,
  ProductListPage,
} from "./pages";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider>
      <CartProvider>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={Error500}>
            <Routes>
              <Route path="/" element={<Navigate to="/all" replace />} />
              <Route element={<MainLayout />}>
                <Route path="/:category" element={<ProductListPage />} />
                <Route
                  path="/:category/:product"
                  element={<ProductDetailsPage />}
                />
                <Route path="/404" element={<Error404 />} />
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
            <ScrollToTop />
          </ErrorBoundary>
        </BrowserRouter>
      </CartProvider>
    </ApolloProvider>
  </StrictMode>,
);
