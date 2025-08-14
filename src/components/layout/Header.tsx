
export default function Header() {

  return (

    <header className="bg-[#a57d5e] relative flex items-center h-12 w-screen p-3">

      <div className="w-8 h-8">
        <img src="./fotos/engrenagem.png" alt="config" className="w-full h-full" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 text-white text-xl font-bold">
        MÓVEIS FORTALEZA
      </div>

      <div className="ml-auto flex items-center gap-3 text-white font-bold">
        <span>Fale Conosco</span>
        <img src="./fotos/whatsapp.png" alt="contato" className="-ml-3 w-6 h-6" />
        <img src="./fotos/carrinho.png" alt="Carrinho de compras" className="w-8 h-8" />
      </div>

    </header>
  );
}
