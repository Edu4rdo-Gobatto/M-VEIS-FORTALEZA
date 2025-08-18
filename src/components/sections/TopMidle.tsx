export function TopMidle() {
  const produtos = [
    { nome: "Clássicos", img: "/fotos/classico.jpg" },
    { nome: "Demolição", img: "/fotos/demolicao.jpg" },
    { nome: "Planejados", img: "/fotos/planejado.jpg" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#e8ebee] gap-10 p-6">
      
      <div className="flex flex-col justify-center max-w-[400px] p-4">
        <h2 className="text-[#eeb250] font-bold text-xl">
          Qualidade e confiança para seu lar.
        </h2>
        <p className="text-black text-base leading-relaxed mt-5">
          Há mais de 10 anos no mercado, trabalhamos com legítimos <strong>móveis de madeira</strong> de alta qualidade,
          pensados para unir durabilidade, conforto e design elegante. 
          Cada peça é cuidadosamente selecionada para transformar sua casa em um ambiente acolhedor para toda sua família e amigos. 
          Conte com nosso atendimento especializado para encontrar móveis que realmente combinam com você e seu lar.
        </p>
        <a 
          href="https://wa.me/559999999999" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-green-500 font-bold mt-5 hover:underline"
        >
          <span>Fale Conosco</span>
          <img src="./fotos/whatsapp_verde.png" alt="Contato via WhatsApp" className="w-6 h-6 ml-2" />
        </a>
      </div>

      <div 
        className="flex flex-col items-center justify-center bg-cover bg-center h-full w-full min-h-[450px] max-w-[950px] rounded-xl overflow-hidden"
        style={{ backgroundImage: "url('/fotos/sala1.jpg')" }}
      >
        <h3 className="mb-10 px-4 py-2 text-2xl uppercase text-white bg-[#ced8e1] bg-opacity-80 rounded-xl border-b-2 border-white">
          Busque o seu interior!
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {produtos.map((produto, index) => (
            <div 
              key={index}
              className="bg-[#ced8e1] shadow-[0_0_50px] shadow-blue-300 text-white flex flex-col items-center justify-center border-0 rounded-2xl p-3 hover:scale-105 transition-transform"
            >
              <span className="font-medium">{produto.nome}</span>
              <img 
                src={produto.img} 
                alt={`Categoria ${produto.nome}`} 
                className="w-40 h-40 object-cover m-3 rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-4 p-4">
        <h2 className="text-[#eeb250] font-bold text-lg">
          Estamos aqui para te receber
        </h2>
        <p className="max-w-[400px] text-black">
          Venha conhecer nossa loja de <strong>Móveis de Madeira</strong> e escolher as peças perfeitas para transformar seu lar.
        </p>
        <div className="w-full max-w-[400px] h-[280px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7809.6175223834025!2d-55.51409081083089!3d-11.848656100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7801eaf606857%3A0x7aac2fd058e9b763!2sM%C3%B3veis%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1755281810287!5m2!1spt-BR!2sbr"
            loading="lazy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da loja Móveis Fortaleza"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
