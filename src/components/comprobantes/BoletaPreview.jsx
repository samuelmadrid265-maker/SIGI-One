import { useEffect, useState } from "react";
import { generarPDF } from "../../utils/pdfGenerator";

function BoletaPreview({ boleta }) {

  const [empresa, setEmpresa] = useState({});
  const [logo, setLogo] = useState("");

  useEffect(() => {

    const saved = localStorage.getItem("companyData");

    if (saved) {
      setEmpresa(JSON.parse(saved));
    }

    const savedLogo = localStorage.getItem("companyLogo");

    if (savedLogo) {
      setLogo(savedLogo);
    }

  }, []);

  if (!boleta) {

    return (
      <div className="bg-white rounded-2xl shadow-sm border p-10 text-center text-slate-500 mt-8">
        Aún no hay una boleta generada.
      </div>
    );

  }

  const subtotal =
    boleta.subtotal ??
    boleta.items.reduce(
      (t, item) => t + Number(item.price) * Number(item.quantity),
      0
    );

  const igv =
    boleta.igv ??
    subtotal * 0.18;

  const total =
    boleta.total ??
    subtotal + igv;

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-8 mt-8">

      <div className="text-center border-b pb-6 mb-6">

        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-28 object-contain mx-auto mb-4"
          />
        )}

        <h2 className="text-3xl font-bold">
          {empresa.nombre || "Nombre Empresa"}
        </h2>

        <p>{empresa.razon || "Razón social"}</p>

        <p>RUC: {empresa.ruc || "00000000000"}</p>

        <p>{empresa.direccion || "Dirección"}</p>

        <p>Tel: {empresa.telefono || "-"}</p>

      </div>

      <div className="flex justify-between mb-6">

        <div>

          <p className="font-semibold">
            BOLETA ELECTRÓNICA
          </p>

          <p>
            Nº {boleta.code}
          </p>

        </div>

        <div className="text-right">

          <p>Fecha:</p>

          <p className="font-semibold">
            {boleta.date}
          </p>

        </div>

      </div>

      <div className="mb-6">

        <h3 className="font-bold">
          Cliente
        </h3>

        <p>
          {boleta.client}
        </p>

      </div>

      <table className="w-full border-collapse">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-3 text-left">
              Producto
            </th>

            <th className="p-3">
              Cantidad
            </th>

            <th className="p-3">
              Precio
            </th>

            <th className="p-3">
              Total
            </th>

          </tr>

        </thead>

        <tbody>

          {boleta.items.map((item, index) => (

            <tr
              key={index}
              className="border-t"
            >

              <td className="p-3">
                {item.product}
              </td>

              <td className="p-3 text-center">
                {item.quantity}
              </td>

              <td className="p-3 text-center">
                S/ {Number(item.price).toFixed(2)}
              </td>

              <td className="p-3 text-center">
                S/ {(Number(item.price) * Number(item.quantity)).toFixed(2)}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="mt-8 text-right space-y-2">

        <p>
          Subtotal:
          <b> S/ {subtotal.toFixed(2)}</b>
        </p>

        <p>
          IGV:
          <b> S/ {igv.toFixed(2)}</b>
        </p>

        <p className="text-2xl font-bold">
          TOTAL:
          {" "}S/ {total.toFixed(2)}
        </p>

      </div>

      <button
        onClick={() => generarPDF(empresa, { ...boleta, subtotal, igv, total })}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Descargar PDF
      </button>

    </div>

  );

}

export default BoletaPreview;