import { Navigate, Route, Routes } from "react-router-dom";
import { IndexProductPage } from "./product/pages/IndexProductPage";
import { IndexCategoryPage } from "./category/pages/IndexCategoryPage";

export const InventoryRoutes = () => {
  return (
    <>
      <h1>Inventory</h1>
      <div className="container">
        <Routes>
          <Route path="/product" element={<IndexProductPage />} />
          <Route path="/category" element={<IndexCategoryPage />} />
          <Route path="/*" element={<Navigate to={"/product"} />} />
        </Routes>
      </div>
    </>
  );
};
