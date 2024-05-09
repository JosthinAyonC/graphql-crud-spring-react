import { Route, Routes } from "react-router-dom";
import { InventoryRoutes } from "../modules/inventory/InventoryRoutes";

export const GraphQLRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<InventoryRoutes />} />
    </Routes>
  );
};

export const PrivateRoutes = ({ children }: { children: any }) => {
  //   const { logged } = useContext(AuthContext);
  //   return logged ? children : <Navigate to={"/auth/login"} />;
  return children;
};

export const PublicRoutes = ({ children }: { children: any }) => {
  //   const { logged } = useContext(AuthContext);
  //   return !logged ? children : <Navigate to={"/"} />;
  return children;
};
