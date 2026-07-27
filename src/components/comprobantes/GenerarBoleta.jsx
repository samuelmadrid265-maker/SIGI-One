import { useContext, useState } from "react";
import { InventoryContext } from "../../context/InventoryContext";

function GenerarBoleta({ setBoleta }) {

  const {
    clients,
    products,
    sales,
    addSale
  } = useContext(InventoryContext);

  const [cliente, setCliente] = useState("");
  const [items, setItems] = useState([]);
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);

  function agregarProducto() {

    const prod = products.find(
      p => p.name === producto
    );

    if (!prod) {
      alert("Producto no encontrado");
      return;
    }

    setItems([
      ...items,
      {
        product: prod.name,
        quantity: Number(cantidad),
        price: Number(prod.salePrice)
      }
    ]);

    setProducto("");
    setCantidad(1);
  }

  // ===========================
  // CÁLCULOS
  // ===========================

  const total = items.reduce(

    (acum, item) =>

      acum +

      (Number(item.price) * Number(item.quantity)),

    0

  );

  const subtotal = total / 1.18;

  const igv = total - subtotal;

  // ===========================

  function generar() {

    if (items.length === 0) {

      alert("Agrega productos");

      return;

    }

    const nuevaBoleta = {

      code: `B001-${String(sales.length + 1).padStart(6, "0")}`,

      date: new Date().toLocaleDateString(),

      client: cliente || "Cliente general",

      items,

      subtotal,

      igv,

      total

    };

    addSale({

      ...nuevaBoleta,

      payment: "Efectivo",

      status: "Pagada"

    });

    setBoleta(nuevaBoleta);

    alert("Boleta generada correctamente");

    setItems([]);

    setCliente("");

  }

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">

        Generar boleta

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>

          <label className="text-slate-600">

            Cliente

          </label>

          <select

            value={cliente}

            onChange={(e) => setCliente(e.target.value)}

            className="w-full border rounded-xl p-3 mt-2"

          >

            <option value="">

              Cliente general

            </option>

            {

              clients.map(client => (

                <option

                  key={client.id}

                  value={client.name}

                >

                  {client.name}

                </option>

              ))

            }

          </select>

        </div>

        <div>

          <label className="text-slate-600">

            Producto

          </label>

          <select

            value={producto}

            onChange={(e) => setProducto(e.target.value)}

            className="w-full border rounded-xl p-3 mt-2"

          >

            <option value="">

              Seleccionar producto

            </option>

            {

              products.map(product => (

                <option

                  key={product.id}

                  value={product.name}

                >

                  {product.name}

                </option>

              ))

            }

          </select>

        </div>

      </div>

      <div className="flex gap-4 mt-5">

        <input

          type="number"

          min="1"

          value={cantidad}

          onChange={(e) => setCantidad(e.target.value)}

          className="border rounded-xl p-3 w-32"

        />

        <button

          onClick={agregarProducto}

          className="bg-blue-600 text-white px-5 rounded-xl"

        >

          Agregar producto

        </button>

      </div>

      <div className="mt-6">

        {

          items.map((item, index) => (

            <div

              key={index}

              className="flex justify-between border-b py-3"

            >

              <span>

                {item.product} x{item.quantity}

              </span>

              <span>

                S/ {(item.price * item.quantity).toFixed(2)}

              </span>

            </div>

          ))

        }

      </div>

      <div className="text-right mt-6 space-y-2">

        <p>

          Subtotal:

          <b> S/ {subtotal.toFixed(2)}</b>

        </p>

        <p>

          IGV:

          <b> S/ {igv.toFixed(2)}</b>

        </p>

        <p className="text-xl font-bold">

          Total:

          <b> S/ {total.toFixed(2)}</b>

        </p>

      </div>

      <button

        onClick={generar}

        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"

      >

        Generar boleta

      </button>

    </div>

  );

}

export default GenerarBoleta;