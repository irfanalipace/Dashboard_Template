

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import KPICard from '../../../../../components/KPICard/KPICard';
import DualLineChart from '../../../../../components/charts/DualLineChart';
import FunnelChart from '../../../../../components/charts/FunnelChart';
import DonutChart from '../../../../../components/charts/DonutChart';
import TopStationsTable from '../../../../../components/Tables/TopStationsTable';
import AlertsList from '../../../../../components/Alert/AlertsList';
import MapCard from '../../../../../components/KPICard/MapCard';
import SalesOverTime from '../../../../../components/charts/SalesOverTime';
import SalesVsRefunds from '../../../../../components/charts/SalesVsRefunds';

import {
  lineSeries,
  funnelStages,
  attendance,
  topStations,
  alerts,

} from '../../../../../mocks/dashboardData';
import FieldStaffDevelopmenet from '../../FieldStaffDevelopmenet/FieldStaffDevelopmenet';
import FieldStaffDeploymentCard from '../../FieldStaffDevelopmenet/FieldStaffDeploymentCard';
import InventoryAssetsCard from '../ESInoventory/InventoryAssetsCard';
import ChartCard from '../../../../../components/charts/ChartCard';
import BeautifulLineChart from '../../../../../components/charts/BeautifulLineChart';
import BeautifulBarChart from '../../../../../components/charts/BeautifulBarChart';
import BeautifulDonutChart from '../../../../../components/charts/BeautifulDonutChart';
import HRMISChart from '../../HRMS/HRMISChart.JSX';
import FinanceChart from '../../Financel/FinanceChart';
import ActivityChart from '../../ActivityManagment/ActivityChart';
import LegalChart from '../../Financel/LegalChart';
import Loader from '../../../../../components/loader/Loader';
const kpisData = [
  { id: 1, label: "Force Requisitions", value: 373, type: "FR", url: "force_requisitions" },
  { id: 2, label: "Total Stations", value: 125, type: "stations", url: "stations" },
  { id: 3, label: "Total HR", value: 38, type: "hr", url: "hr" },
  { id: 4, label: "Total FIR", value: 210, type: "fir", url: "fir" },
  { id: 5, label: "Total Inventory", value: 18, type: "ims", url: "inventory" },
  { id: 6, label: "Total Financial", value: 42, type: "TF", url: "financial" },
  { id: 7, label: "Total Vehicles", value: 125, type: "tv", url: "vehicles" },
  { id: 8, label: "Total Tenders", value: 38, type: "TT", url: "tenders" },
];
const lineData = [
  { name: "Field Staff", value: 88 },
  { name: "Admin", value: 78 },
  { name: "Legal & Compliance", value: 82 },
  { name: "Finance & Procurement", value: 75 },
  { name: "Operations", value: 90 },
];

const barData = [
  { name: "Station A", value: 120 },
  { name: "Station B", value: 80 },
];

const donutData = [
  { name: "Field Staff Utilized", value: 320 },
  { name: "Field Staff Non-Utilized", value: 80 },
  { name: "Admin", value: 50 },
  { name: "Legal & Compliance", value: 40 },
  { name: "Finance & Procurement", value: 30 },
];

export default function ExecutiveDashboard() {
  const [selectedId, setSelectedId] = useState(kpisData[0]?.id);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) return <Loader />;
  return (
    <div className="space-y-6 bg-[#F9FAFB]">


      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {kpisData.map(k => (
          <KPICard
            key={k.id}
            label={k.label}
            value={k.value}
            type={k.type}
            isSelected={selectedId === k.id}
            onClick={() => {
              setSelectedId(k.id);
              navigate(`/dashboard/${k.url}`);
            }}
          />
        ))}
      </div>



      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

        <div className="md:col-span-6"><FieldStaffDeploymentCard /></div>
        <div className="md:col-span-6"><LegalChart /></div>
      </div>



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <HRMISChart />
        <FinanceChart />
        <ActivityChart />

      </div>
      <div className="flex-1 bg-white rounded-xl shadow p-4 flex justify-center items-center">
        <InventoryAssetsCard />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-12 col-span-1 h-[400px]">
          <MapCard />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <TopStationsTable data={topStations} />
        <SalesOverTime />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <DonutChart value={attendance.present} />
        </div>

        <div className="space-y-4 bg-white rounded-xl shadow p-4">
          <h3 className="text-sm font-medium">Attendance</h3>
          <ul className="text-sm space-y-2">
            {attendance.breakdown.map((t, i) => (
              <li key={i} className="flex justify-between">
                <span>{t.tehsil}</span>
                <span>{t.value}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <AlertsList items={alerts} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">

        <ChartCard title="Performance Comparison">
          <BeautifulLineChart data={lineData} />
        </ChartCard>

        <ChartCard title="Fuel Analytics">
          <BeautifulBarChart data={barData} />
        </ChartCard>

        <ChartCard title="Requisition Source Tracking">
          <BeautifulDonutChart data={donutData} />
        </ChartCard>

      </div>
    </div>
  );
}
