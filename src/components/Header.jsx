export default function Header({ isOnline }) {
  return (
    <header className="flex items-center justify-between bg-gray-900 p-4">
      <h1 className="text-2xl font-bold">Demo Inventario</h1>
      <span
        className={`rounded-full px-3 py-1 text-sm ${isOnline ? "bg-green-600" : "bg-red-600"}`}
      >
        {isOnline ? "🟢 Online" : "🔴 Offline"}
      </span>
    </header>
  );
}
