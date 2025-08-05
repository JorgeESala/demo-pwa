export default function ConnectionToggle({ isOnline, setIsOnline }) {
  return (
    <div className="m-4">
      <button
        className={`rounded px-4 py-2 ${isOnline ? "bg-red-600" : "bg-green-600"}`}
        onClick={() => setIsOnline(!isOnline)}
      >
        {isOnline ? "Simular Offline" : "Volver Online"}
      </button>
    </div>
  );
}
