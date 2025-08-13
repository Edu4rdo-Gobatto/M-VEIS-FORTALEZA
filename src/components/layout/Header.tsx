export default function Header() {

  return (

    <header className="bg-blue-600 flex justify-between h-full w-screen p-3">

      <div className="max-w-8 max-h-8">
        <img src="./engrenagem.png" alt="config"
          className="w-full h-full"
        />
      </div>

      <div className="flex m-0 p-0 text-white font-semibold">
        <ul className="inline-flex space-x-3">
          <li>Pesquise</li>
          <li>MÓVEIS FORTALEZA</li>
          <li>FALE CONOSCO</li>
        </ul>
      </div>

      <div className="max-w-8 max-h-8">
        <img src="carrinho.png" alt="" 
          className="w-full h-full"
        />
      </div>
      
    </header>
    
  );
}
