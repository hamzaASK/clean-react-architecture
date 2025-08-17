"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import de tes pages
import ProductList from "@/features/products/pages/ProductList";
import Test from "@/features/products/pages/Test";
import { DashboardLayout } from "./common/components/test/DashboardLayout";
import { ChartAreaInteractive } from "./common/components/test/ChartAreaInteractive";
import { SectionCards } from "./common/components/test/SectionCards";
import LoginPage from "./common/components/test/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>


        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<ProductList />} />
          <Route path="/test" element={<Test />} />
          <Route path="/chart" element={<ChartAreaInteractive />} />
          <Route path="/cards" element={<SectionCards />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Plus tard : routes protégées */}
          {/* <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} /> */}
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
