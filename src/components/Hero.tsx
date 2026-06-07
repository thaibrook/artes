import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-accent-100 to-mint-100" />


      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-200/50">
              <Sparkles size={16} className="text-accent-400" />
              <span className="text-primary-600 text-sm font-medium">Novidades chegando toda semana</span>
            </div>
          </div>

          <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-700 leading-[1.1] mb-6 animate-fade-up-delay-1">
            Tudo para o seu{' '}
            <span className="relative">
              <span className="relative z-10">mundo criativo</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent-400/60 -z-0 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-600/70 leading-relaxed mb-10 max-w-xl animate-fade-up-delay-2">
            Cadernos, agendas, impressão, artes à mão e muito mais. Na <b>Papelaria Brooks</b> você encontra
            tudo para dar vida às suas ideias e projetos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a href="#destaques" className="btn-primary inline-flex items-center justify-center gap-2 text-base">
              Conhecer Produtos
              <ArrowRight size={18} />
            </a>
            <a href="#sobre" className="inline-flex items-center justify-center gap-2 border-2 border-accent-300 text-accent-600 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-accent-400 hover:text-white hover:-translate-y-0.5">
              Nossa História
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
