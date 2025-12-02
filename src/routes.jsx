import { useRoutes } from "react-router-dom";
import Layout from "./layout/DashboardLayout/Layout";
import ExecutiveDashboard from "./Views/Landing/components/Content/Dashboard/ExecutiveDashboard";
import StationsDashboard from "./Views/Landing/components/Content/StationsDashboard/StationsDashboard";
import HRDashboard from "./Views/Landing/components/Content/HRDashboard/HRDashboard";
import FIRDashboard from "./Views/Landing/components/Content/firdashboard/FIRDashboard";
import ForceReqDashboard from "./Views/Landing/components/Content/ForceReqDashboard/ForceReqDashboard";
import InventoryDashboard from "./Views/Landing/components/Content/InventoryDashboard/InventoryDashboard";
import FinancialDashboard from "./Views/Landing/components/Content/FinancialDashboard/FinancialDashboard";
import VehiclesDashboard from "./Views/Landing/components/Content/VehiclesDashboard/VehiclesDashboard";
import TendersDashboard from "./Views/Landing/components/Content/TendersDashboard/TendersDashboard";
import Login from "./Views/auth/Login";
import SignUp from "./Views/auth/SignUp";

export default function Router() {
  const element = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ExecutiveDashboard /> },
        { path: "dashboard/stations", element: <StationsDashboard /> },
        { path: "dashboard/hr", element: <HRDashboard /> },
        { path: "dashboard/fir", element: <FIRDashboard /> },
        { path: "dashboard/force_requisitions", element: <ForceReqDashboard /> },
        { path: "dashboard/inventory", element: <InventoryDashboard /> },
        { path: "dashboard/financial", element: <FinancialDashboard /> },
        { path: "dashboard/vehicles", element: <VehiclesDashboard /> },
        { path: "dashboard/tenders", element: <TendersDashboard /> },
      ],
    },
  ]);

  return element;
}
