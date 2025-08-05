import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function SalesChart({ dataPoints }) {
  const data = {
    labels: dataPoints.map((d) => d.date),
    datasets: [
      {
        label: "Ventas",
        data: dataPoints.map((d) => d.total),
        fill: false,
        borderColor: "#4ade80",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="m-4 rounded-lg bg-gray-800 p-4">
      <h2 className="mb-4 text-xl">Ventas últimos 7 días</h2>
      <Line data={data} />
    </div>
  );
}
