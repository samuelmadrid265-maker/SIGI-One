function Card({ title, value, icon: Icon, color }) {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6 border">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h3>

        </div>


        <div className={`p-3 rounded-xl ${color}`}>

          <Icon size={28} className="text-white"/>

        </div>


      </div>

    </div>

  );
}


export default Card;