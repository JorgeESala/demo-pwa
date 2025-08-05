export default function Metrics({ metrics }) {
  const cards = [
    { title: "Ventas Hoy", value: `$${metrics.salesToday}` },
    { title: "Inventario", value: metrics.totalStock },
    { title: "Clientes Nuevos", value: metrics.newClients },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-lg bg-gray-800 p-4 shadow-md transition hover:shadow-lg"
        >
          <h2 className="text-lg">{card.title}</h2>
          <p className="mt-2 text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
