import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { ApolloProvider } from "./providers/ApolloProvider";
import { CartProvider } from "./providers/CartProvider";
import { ScrollToTop } from "./components";
import { ProductDetailsPage, ProductListPage } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/all" replace />} />
            <Route element={<MainLayout />}>
              <Route path="/:category" element={<ProductListPage />} />
              <Route path="/:category/:product" element={<ProductDetailsPage />} />
            </Route>
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </CartProvider>
    </ApolloProvider>
  </StrictMode>,
);
