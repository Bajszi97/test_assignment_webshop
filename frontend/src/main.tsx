import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/ProductList";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import ApolloProvider from "./providers/ApolloProvider";
import { CartProvider } from "./providers/CartProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/all" replace />} />
            <Route element={<MainLayout />}>
              <Route path="/:category" element={<Home />} />
              <Route path="/:category/:product" element={<ProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ApolloProvider>
  </StrictMode>,
);
