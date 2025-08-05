import { useState, useEffect } from "react";
import { db } from "../db";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const loadProducts = async () => {
    const all = await db.products.toArray();
    setProducts(all);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async () => {
    if (!form.name || !form.price || !form.stock) return;
    await db.products.add({
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
    });
    setForm({ name: "", price: "", stock: "" });
    loadProducts();
  };

  return (
    <div className="m-4 rounded-lg bg-gray-800 p-4">
      <h2 className="mb-4 text-xl">Productos</h2>
      <div className="mb-4 flex-wrap gap-2">
        <input
          type="text"
          placeholder="Nombre"
          className="rounded bg-gray-700 p-2 text-white"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          className="rounded bg-gray-700 p-2 text-white"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          className="rounded bg-gray-700 p-2 text-white"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />
        <button className="rounded bg-green-600 px-4 py-2" onClick={addProduct}>
          +
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price}</td>
              <td className="p-2">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
