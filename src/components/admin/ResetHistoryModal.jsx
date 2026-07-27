import Modal from "../Modal";

import {

  getResetHistory

} from "../../utils/resetHistory";

function ResetHistoryModal({

  close

}){

  const history = getResetHistory();

  return(

    <Modal close={close}>

      <h2 className="text-2xl font-bold mb-6">

        Historial de reinicios

      </h2>



      {

        history.length===0

        ?

        (

          <div className="text-slate-500">

            No existen reinicios registrados.

          </div>

        )

        :

        (

          <div className="max-h-[500px] overflow-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="p-3 text-left">

                    Fecha

                  </th>

                  <th className="p-3 text-left">

                    Hora

                  </th>

                  <th className="p-3 text-left">

                    Usuario

                  </th>

                  <th className="p-3 text-left">

                    Módulo

                  </th>

                  <th className="p-3 text-left">

                    Registros

                  </th>

                </tr>

              </thead>



              <tbody>

                {

                  history.map((item)=>(

                    <tr

                      key={item.id}

                      className="border-t"

                    >

                      <td className="p-3">

                        {item.fecha}

                      </td>



                      <td className="p-3">

                        {item.hora}

                      </td>



                      <td className="p-3">

                        {item.usuario}

                      </td>



                      <td className="p-3 font-semibold">

                        {item.modulo}

                      </td>



                      <td className="p-3">

                        {item.registros}

                      </td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        )

      }

    </Modal>

  );

}

export default ResetHistoryModal;