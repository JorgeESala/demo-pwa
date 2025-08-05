import Dexie from "dexie";

export const db = new Dexie("DemoInventarioDB");
db.version(1).stores({
  products: "++id,name,price,stock",
  sales: "++id,date,total",
});
