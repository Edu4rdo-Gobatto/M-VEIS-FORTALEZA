
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Jogo de Cadeiras", price: "R$ 1200,00", description: "Jogo com 6 cadeiras de madeira, com assento almofadado.", image: "/fotos/cadeira.png" },
  { id: 2, name: "Mesa de Jantar", price: "R$ 3.200,00", description: "Mesa de madeira, 400x100cm.", image: "/fotos/mesa.png" },
  { id: 3, name: "Estante Moderna", price: "R$ 999,00", description: "Estante de madeira, com 4 compartimentos.", image: "/fotos/estante.png" },
  { id: 4, name: "Armário de Cozinha", price: "R$ 2.875,00", description: "Armário de 4 portas entalhado.", image: "/fotos/armario_4_portas.png" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-[#ced8e1] rounded-lg w-[270px] h-[310px] flex flex-col items-center text-center shadow-lg p-3">
      <h3 className="mb-2 font-bold text-lg text-[#6199d8]">{product.name}</h3>
      <img
        src={product.image}
        alt={product.name}
        className="w-[150px] h-[150px] object-cover rounded-lg"
      />
      <p className="text-green-500 font-bold py-2">{product.price}</p>
      <p className="text-gray-600 font-medium text-sm px-2">{product.description}</p>
    </div>
  );
}

export function Promo() {
  return (

    <div className="bg-[#beb8ab] py-10">
      
      <div className="flex flex-col items-center justify-center mb-8">
        <p className="px-8 py-4 text-2xl rounded-2xl bg-[#a57d5e] text-white shadow-md">
          Aproveite nossas melhores ofertas!
        </p>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide items-center justify-center gap-6">
        {products.map((item) => (
        <ProductCard key={item.id} product={item} />))}
      </div>

    </div>
  );
}

