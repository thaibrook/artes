import { Clock, Heart, Award, Truck } from 'lucide-react';

const features = [
  // {
  //   icon: Clock,
  //   title: 'Mais de 20 Anos',
  //   description: 'Tradição e confiança no mercado de papelaria fina',
  //   bg: 'bg-primary-50',
  //   iconColor: 'text-primary-400',
  // },
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada produto selecionado com carinho e atenção aos detalhes',
    bg: 'bg-peach-50',
    iconColor: 'text-peach-400',
  },
  {
    icon: Award,
    title: 'Atendimento Premium',
    description: 'Trabalhamos com objetivo de oferecer a melhor experiência de compra para nossos clientes, procuramos entender e entrar o melhor produto para cada cliente, seja para uso pessoal ou para presentear alguém especial.',
    bg: 'bg-accent-50',
    iconColor: 'text-accent-400',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Receba em toda a Manaus com embalagem especial',
    bg: 'bg-mint-50',
    iconColor: 'text-mint-400',
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-peach-500 font-medium text-sm tracking-wider uppercase">
              Nossa História
            </span>
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mt-3 mb-6 leading-tight">
              Onde a criatividade{' '}
              <span className="relative inline-block">
                encontra
                <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-peach-200/50 rounded-sm -z-10" />
              </span>{' '}
              qualidade
            </h2>
            <div className="space-y-4 text-primary-600/60 leading-relaxed">
              <p>
                Desde 2024, a <b>Papelaria Brooks</b> nasceu do sonho de oferecer muito mais do que
                materiais de escritório. Nosso objetivo sempre foi ser o espaço onde artistas,
                estudantes, profissionais e entusiastas encontram inspiração.
              </p>
              <p>
                Com uma curadoria cuidadosa de produtos nacionais e importados, cada item em nossas
                prateleiras foi escolhido para despertar a vontade de criar, organizar e expressar.
                Acreditamos que o simples ato de escrever pode transformar ideias em realidade.
              </p>
              <p>
                Hoje, com presença online, levamos a
                experiência Brooks para <b>todos</b> — sempre com o mesmo cuidado e atenção
                que nos definem desde o primeiro dia.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://res.cloudinary.com/dt2fzlvbh/image/upload/q_auto/f_auto/v1780804425/IMG_8429_lzilnl.jpg"
                    alt="Papéis e materiais artesanais"
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://res.cloudinary.com/dt2fzlvbh/image/upload/q_auto/f_auto/v1780804647/3qr34r_ccpwxh.png"
                    alt="Papéis e materiais artesanais"
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
         
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {features.map((feat) => (
            <div
              key={feat.title}
              className={`text-center p-6 rounded-2xl ${feat.bg} border border-white
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 ${feat.bg} rounded-2xl flex items-center justify-center
                              mx-auto mb-4`}>
                <feat.icon size={24} className={feat.iconColor} />
              </div>
              <h3 className=" text-lg font-semibold text-primary-700 mb-2">
                {feat.title}
              </h3>
              <p className="text-primary-600/50 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
