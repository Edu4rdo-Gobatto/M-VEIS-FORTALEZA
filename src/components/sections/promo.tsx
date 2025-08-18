import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Cadeira de Madeira", price: "R$ 350,00", image: "/fotos/cadeira.jpg" },
  { id: 2, name: "Mesa de Jantar", price: "R$ 1.200,00", image: "/fotos/mesa.jpg" },
  { id: 3, name: "Estante Moderna", price: "R$ 800,00", image: "/fotos/estante.jpg" },
  { id: 4, name: "Armário de Cozinha", price: "R$ 2.000,00", image: "/fotos/armario.jpg" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-2 font-bold text-lg text-[#6199d8]">{product.name}</h3>
      <p className="text-gray-700 font-semibold">{product.price}</p>
    </div>
  );
}

export function Promo() {
  return (

    <div className="bg-[#c9d6e2] py-8">

      <div className="flex flex-col items-center justify-center p-3">
        <p className="px-8 py-5 text-2xl rounded-2xl bg-[#6199d8] text-white shadow-md">
          Aproveite nossas melhores ofertas!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
