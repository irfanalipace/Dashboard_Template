




import React from 'react';
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

import { lineSeries, funnelStages, attendance, topStations, alerts } from '../../../../../mocks/dashboardData';

const kpisData = [
  { id: 1, label: "Force Requisitions", value: 373, type: "FR", url:"force_requisitions" },
  { id: 2, label: "Total Stations", value: 125, type: "stations", url:"stations" },
  { id: 3, label: "Total HR", value: 38, type: "hr", url:"hr" },
  { id: 4, label: "Total FIR", value: 210, type: "fir", url:"fir" },
  { id: 5, label: "Total Inventory", value: 18, type: "ims", url:"inventory" },
  { id: 6, label: "Total Financial", value: 42, type: "TF", url:"financial" },
  { id: 7, label: "Total Vehicles", value: 125, type: "tv", url:"vehicles" },
  { id: 8, label: "Total Tenders", value: 38, type: "TT", url:"tenders" },
];


export default function ExecutiveDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {kpisData.map(k => (
          <KPICard
            key={k.id}
            label={k.label}
            value={k.value}
            type={k.type}
            onClick={() => navigate(`/dashboard/${k.url}`)}
          />

        ))}
      </div>



      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6"><MapCard /></div>
        <div className="md:col-span-6"><DualLineChart data={lineSeries} /></div>
      </div>

      <div className="flex gap-4 items-stretch">
        <div className="flex-1 bg-white rounded-xl shadow p-4">
          <TopStationsTable data={topStations} />
        </div>
        <div className="flex-1 bg-white rounded-xl shadow p-4">
          <FunnelChart data={funnelStages} />
        </div>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SalesOverTime />
        <SalesVsRefunds />
      </div>

    </div>
  );
}
