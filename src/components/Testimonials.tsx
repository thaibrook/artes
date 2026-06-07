import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Elen Cris',
    role: '',
    text: 'Artista e Designer completa, atendimento excelente, produtos de alta qualidade da próxima pretendo comprar os cadernos personalizados.',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/v1780805113/480483177_986514053407750_1370785200092906621_n_hegspd.jpg',
  },
  {
    name:'Pedro Martins',
    role: 'Desenvolvedor de Software',
    text: 'A variedade de materiais personalizados é incrível, encontrei tudo o que precisava para minha apresentação de projeto. Os cadernos personalizados são um diferencial, super recomendo para quem quer algo único.',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/v1780804853/623864569_18151641130447492_2078793346533367312_n_ky2in6.jpg',
  },
  {
    name: 'Mathayus Onyx',
    role: 'Artista Plástico',
    text: 'this looks so glorious you make some of the most creative this beach drawing looks so tranquil and heavenly all the colors in this wow.',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/q_auto/f_auto/v1780804644/310961856_653777626093904_7730081330081840440_n_yjpeag.jpg',
  },
  {
    name: 'Ana Beatriz Lima',
    role: '',
    text: 'Adoro os kits criativos e os marcadores. Estava procurando um lugar que fizesse cadernos personalizados e encontrei a Brooks, o atendimento foi super atencioso e o resultado ficou incrível, super recomendo para quem quer algo único.',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dt2fzlvbh/image/upload/v1780805243/503495397_18048471359577938_1101754109317985629_n_fctoep.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-100 via-primary-200 to-mint-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-40 h-40 border border-primary-200 rounded-full" />
        <div className="absolute bottom-10 left-20 w-60 h-60 border border-accent-200 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-mint-200 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent-500 font-medium text-sm tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-primary-600/50 text-lg max-w-2xl mx-auto">
            A opinião de quem confia na Brooks é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary-100
                         transition-all duration-300 hover:bg-white/90 hover:-translate-y-1
                         hover:shadow-lg"
            >
              <Quote size={32} className="text-accent-300 mb-4" />

              <p className="text-primary-700/70 leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-peach-300 text-peach-300" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <div className="text-primary-700 font-medium text-sm">{t.name}</div>
                  <div className="text-primary-600/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
