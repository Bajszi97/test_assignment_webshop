import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo";
import ProductPage from "./pages/ProductPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/all" replace />} />
          <Route element={<MainLayout />}>
            <Route path="/:category" element={<Home />} />
            <Route path="/:category/:product" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
