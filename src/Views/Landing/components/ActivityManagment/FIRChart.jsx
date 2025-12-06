import ChartCard from "../../../../components/charts/ChartCard";
import BeautifulDonutChart from "../../../../components/charts/BeautifulDonutChart";
import BeautifulLineChart from "../../../../components/charts/BeautifulLineChart";

const firTrendData = [
  { month: "Jan", registered: 320, disposed: 180 },
  { month: "Feb", registered: 340, disposed: 200 },
  { month: "Mar", registered: 360, disposed: 220 },
  { month: "Apr", registered: 390, disposed: 250 },
  { month: "May", registered: 410, disposed: 270 },
  { month: "Jun", registered: 430, disposed: 290 },
  { month: "Jul", registered: 460, disposed: 310 },
  { month: "Aug", registered: 480, disposed: 330 },
  { month: "Sep", registered: 500, disposed: 350 },
  { month: "Oct", registered: 520, disposed: 370 },
  { month: "Nov", registered: 540, disposed: 390 },
  { month: "Dec", registered: 560, disposed: 410 },
];

const firCategoryData = [
  { category: "Theft", value: 1200 },
  { category: "Assault", value: 950 },
  { category: "Fraud", value: 780 },
  { category: "Harassment", value: 620 },
  { category: "Other", value: 430 },
];

export default function FIRChart() {
  return (
    <>
      {/* Line chart for FIR trend */}
      <ChartCard title="FIR Trends (Monthly)">
        <BeautifulLineChart
          data={firTrendData.map(d => ({ name: d.month, registered: d.registered }))}
          dataKey="registered"
          label="Registered FIRs"
          stroke="#2D7DD2"
        />
        <BeautifulLineChart
          data={firTrendData.map(d => ({ name: d.month, disposed: d.disposed }))}
          dataKey="disposed"
          label="Disposed FIRs"
          stroke="#4CAF50"
        />
      </ChartCard>

      {/* Donut chart for FIR categories */}
      <ChartCard title="FIR Category Breakdown">
        <BeautifulDonutChart
          data={firCategoryData.map(d => ({ name: d.category, value: d.value }))}
          dataKey="value"
          nameKey="name"
          colors={["#2D7DD2", "#4CAF50", "#F8B400", "#E63946", "#6A4C93"]}
        />
      </ChartCard>
    </>
  );
}
