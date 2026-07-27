function Modal({ children, close }) {

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-2xl p-8 w-[450px] shadow-xl">

        {children}

        <button
          onClick={close}
          className="mt-5 text-sm text-slate-500 hover:text-slate-800"
        >
          Cancelar
        </button>

      </div>

    </div>

  );

}


export default Modal;