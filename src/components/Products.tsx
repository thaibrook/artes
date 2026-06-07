import { Heart, Star, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 2,
    name: 'Carderno de Colorir do Homem Aranha',
    price: 19.90,
    oldPrice: 39.90,
    rating: 4.9,
    reviews: 87,
    badge: 'Mais Vendido',
    description: 'Mergulhe no universo do Homem-Aranha com nosso caderno de colorir exclusivo! Com ilustrações detalhadas e cenas icônicas, é perfeito para fãs de todas as idades. Deixe sua criatividade voar enquanto colore as aventuras do seu herói favorito. Ideal para relaxar e se divertir, este caderno é um must-have para qualquer amante do Homem-Aranha!',
    badgeColor: 'bg-peach-400',
    image: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/v1780856861/2_it8fka.png',
    category: 'Cadernos',
  },
  {
    id: 1,
    name: 'Livro de Colorir',
    price: 19.90,
    oldPrice: 39.90,
    rating: 4.8,
    reviews: 124,
    badge: 'Novo',
    description: 'Descubra a magia do nosso Livro de Colorir, onde cada página é uma tela em branco esperando pela sua criatividade! Com uma variedade de ilustrações encantadoras, desde flores delicadas até animais adoráveis, este livro é perfeito para todas as idades. Relaxe, divirta-se e dê vida às suas ideias com cores vibrantes. Ideal para momentos de lazer e expressão artística, nosso Livro de Colorir é o companheiro perfeito para inspirar sua imaginação!',
    badgeColor: 'bg-primary-400',
    image: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/q_auto/f_auto/v1780856839/1_ewrkcw.png',
    category: 'Cadernos',
  },
 {
    id: 7,
    name: 'Papeis para Colorir Bob Goods',
    price: 9.90,
    rating: 4.4,
    reviews: 67,
    description:'Dê vida às suas criações com nossos papéis para colorir Bob Goods! Perfeitos para artistas de todas as idades, esses papéis de alta qualidade são ideais para lápis de cor, canetinhas e aquarelas. Com uma variedade de designs encantadores, desde padrões florais até personagens divertidos, nossos papéis para colorir são o toque final perfeito para seus projetos artísticos. Deixe sua imaginação fluir e transforme cada página em uma obra-prima vibrante!',
    image: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/v1780857298/520806433_18069517865283646_9027492031339508463_n_tjtzep.webp',
    category: 'Papéis',
  },
  {
    id: 3,
    name: 'Pinturas no Quadro Personalizada',
    description:"Escolha a seu gosto. O Preço pode variar de acordo com o tamanho e complexidade da pintura. Entre em contato para um orçamento personalizado e vamos criar algo incrível juntos!",
    price: 59.90,
    oldPrice: 99.90,
    rating: 4.9,
    reviews: 56,
    badge: '-19%',
    badgeColor: 'bg-peach-400',
    image: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/v1780857487/607400373_18086653880283646_6214311306598601652_n_w0wzmj.webp',
    category: 'Artes',
  },
];

function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-primary-100 overflow-hidden
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold
                           px-3 py-1 rounded-full`}>
            {product.badge}
          </span>
        )}

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full
                     flex items-center justify-center transition-all duration-300
                     hover:bg-white hover:scale-110 shadow-sm"
        >
          <Heart
            size={16}
            className={`transition-colors duration-200 ${liked ? 'fill-primary-400 text-primary-400' : 'text-gray-400'
              }`}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/10 to-transparent h-16
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <span className="text-xs font-medium text-accent-500 tracking-wider uppercase">
          {product.category}
        </span>

        <h3 className=" text-lg font-semibold text-primary-700 mt-1.5 mb-2
                       group-hover:text-primary-500 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

         <p className=" text-xs font-light text-gray-500 mt-1.5 mb-2
                       group-hover:text-primary-500 transition-colors duration-300 ">
          {product.description}
        </p>


        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                className={i < Math.floor(product.rating) ? 'fill-peach-300 text-peach-300' : 'text-primary-100'}
              />
            ))}
          </div>
          <span className="text-xs text-primary-600/40">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary-700">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-primary-600/40 line-through">
                R$ {product.oldPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          <button className="w-10 h-10 bg-primary-400 rounded-full flex items-center justify-center
                             text-white transition-all duration-300 hover:bg-primary-500
                             hover:scale-110 active:scale-95 shadow-sm">
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="destaques" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-peach-400 font-medium text-sm tracking-wider uppercase">
            Seleção Especial
          </span>
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mt-3 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-primary-600/50 text-lg max-w-2xl mx-auto">
            Curadoria dos itens mais amados pelos nossos clientes. Qualidade e inspiração em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
}
