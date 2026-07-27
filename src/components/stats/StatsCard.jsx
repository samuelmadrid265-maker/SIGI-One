function StatsCard({

  title,
  value,
  icon

}){


  return(

    <div className="
      bg-white
      rounded-2xl
      shadow-sm
      border
      p-5
      flex
      items-center
      justify-between
    ">


      <div>

        <p className="text-slate-500 text-sm">

          {title}

        </p>


        <h2 className="text-3xl font-bold mt-2">

          {value}

        </h2>


      </div>



      <div className="
        text-3xl
        bg-blue-100
        rounded-xl
        p-3
      ">

        {icon}

      </div>


    </div>

  );

}


export default StatsCard;