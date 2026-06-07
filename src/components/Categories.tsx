import { BookOpen, Pen, Palette, Ruler, Gift, Briefcase } from 'lucide-react';

const categories = [
  {
    icon: BookOpen,
    title: 'Cadernos & Agendas',
    description: 'Para registrar suas ideias e organizar seus dias com um material que é a sua cara e gosto.',
    lightColor: 'bg-primary-50',
    textColor: 'text-primary-500',
    borderColor: 'border-primary-100',
    hoverBg: 'hover:bg-primary-50',
  },
  // {
  //   icon: Pen,
  //   title: 'Canetas & Lápis',
  //   description: 'Escrita fina, marcadores e materiais de desenho',
  //   lightColor: 'bg-accent-50',
  //   textColor: 'text-accent-500',
  //   borderColor: 'border-accent-100',
  //   hoverBg: 'hover:bg-accent-50',
  // },
  {
    icon: Palette,
    title: 'Artes & Pintura',
    description: 'Artes à mão, desenhos personalizados, pintura e muito mais',
    lightColor: 'bg-accent-50',
    textColor: 'text-accent-500',
    borderColor: 'border-accent-100',
    hoverBg: 'hover:bg-accent-50',
  },
  {
    icon: Ruler,
    title: 'Escritório',
    description: 'Materiais organizativos e suprimentos de trabalho, encontre tudo para seu escritório ou home office',
    lightColor: 'bg-mint-50',
    textColor: 'text-mint-600',
    borderColor: 'border-mint-100',
    hoverBg: 'hover:bg-mint-50',
  },
  {
    icon: Gift,
    title: 'Presentes Criativos',
    description: 'Kits, caixas e itens especiais para presentear, seja para um amigo criativo ou para se mimar só escolher o presente perfeito para você.',
    lightColor: 'bg-cream-100',
    textColor: 'text-peach-500',
    borderColor: 'border-cream-200',
    hoverBg: 'hover:bg-cream-100',
  },
  {
    icon: Briefcase,
    title: 'Material Escolar',
    description: 'Tudo para voltar às aulas com estilo único, desde o material básico até itens que tornam o dia a dia escolar mais divertido e organizado.',
    lightColor: 'bg-accent-50',
    textColor: 'text-accent-600',
    borderColor: 'border-accent-100',
    hoverBg: 'hover:bg-accent-50',
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent-500 font-medium text-sm tracking-wider uppercase">
            Explore
          </span>
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mt-3 mb-4">
            Nossas Categorias
          </h2>
          <p className="text-primary-600/50 text-lg max-w-2xl mx-auto">
            Encontre exatamente o que procura — da escrita à pintura, do escritório ao presente criativo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`group relative bg-white rounded-2xl p-6 sm:p-8 border ${cat.borderColor}
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                         hover:border-transparent cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 ${cat.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex flex-col items-center relative z-10">
                <div className={` w-14 h-14 ${cat.lightColor} rounded-2xl flex items-center justify-center mb-5
                                group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon size={26} className={cat.textColor} />
                </div>

                <h3 className={` text-xl font-semibold text-primary-700 mb-2
                               group-hover:text-primary-500 transition-colors duration-300`}>
                  {cat.title}
                </h3>

                <p className="text-primary-600/50 leading-relaxed text-center">
                  {cat.description}
                </p>

                <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${cat.textColor}
                                opacity-0 group-hover:opacity-100 transition-all duration-300
                                translate-x-0 group-hover:translate-x-1`}>
                  Explorar
                  <span className="text-xs">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
