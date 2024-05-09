import { Navigate, Route, Routes } from "react-router-dom";
import { IndexProductPage } from "./product/pages/IndexProductPage";
import { IndexCategoryPage } from "./category/pages/IndexCategoryPage";
import { ProductByIdPage } from "./product/pages/ProductByIdPage";

export const InventoryRoutes = () => {
  return (
    <>
      <h1>Inventory</h1>
      <hr />
      <div className="container">
        <Routes>
          {/* PRODUCTOS */}
          <Route path="/product" element={<IndexProductPage />} />
          <Route path="/product/:id" element={<ProductByIdPage />} />
          {/* CATEGORIA */}
          <Route path="/category" element={<IndexCategoryPage />} />
          <Route path="/*" element={<Navigate to={"/product"} />} />
        </Routes>
      </div>
    </>
  );
};
