import { useState, useEffect } from "react";
import Header from "./components/Header";
import Metrics from "./components/Metrics";
import SalesChart from "./components/SalesChart";
import ProductTable from "./components/ProductTable";

export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [syncMessage, setSyncMessage] = useState("");

  const fakeMetrics = {
    salesToday: 2450,
    totalStock: 320,
    newClients: 5,
  };

  const fakeSalesData = [
    { date: "Lun", total: 120 },
    { date: "Mar", total: 300 },
    { date: "Mié", total: 250 },
    { date: "Jue", total: 400 },
    { date: "Vie", total: 500 },
    { date: "Sáb", total: 350 },
    { date: "Dom", total: 480 },
  ];

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setSyncMessage("✅ Datos sincronizados con la nube");
      setTimeout(() => setSyncMessage(""), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <Header isOnline={isOnline} />
      <Metrics metrics={fakeMetrics} />
      <ProductTable />
      <SalesChart dataPoints={fakeSalesData} />

      {!isOnline && (
        <div className="m-4 rounded bg-yellow-700 p-4">
          Trabajando en modo offline. Los datos se sincronizarán al volver la
          conexión.
        </div>
      )}

      {syncMessage && (
        <div className="m-4 rounded bg-green-700 p-4 transition-opacity duration-500">
          {syncMessage}
        </div>
      )}
    </div>
  );
}
