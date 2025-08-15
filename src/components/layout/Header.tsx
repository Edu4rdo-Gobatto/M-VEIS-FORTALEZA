
export default function Header() {

  return (

    <header className="bg-[#a57d5e] flex items-center w-screen h-14">

      <div className="w-8 h-8">
        <img src="./fotos/engrenagem.png" alt="config" className="w-full h-full ml-3" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 text-white text-xl font-bold">
        MÓVEIS FORTALEZA
      </div>

      <div className="ml-auto flex items-center gap-3 text-white font-bold">
        <span className="-mr-3">Finalize suas compras</span>
        <img src="./fotos/carrinho.png" alt="Carrinho de compras" className="w-8 h-8 mr-5" />
      </div>

    </header>
  );
}
