import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={28} className="text-primary-400" />
          </div>

          <h2 className=" text-3xl sm:text-4xl font-bold text-primary-700 mb-4">
            Faça seu pedido !
          </h2>
          <p className="text-primary-600/50 text-lg mb-8">
            faça uma encomenda conosco e tenha a experiência de receber um produto artesanal, feito com cuidado e atenção aos detalhes. Entre em contato para discutir suas ideias e necessidades, e deixe-nos criar algo especial para você.
          </p>
          <a
            href="https://wa.me/5592985019752"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="submit"
              className="btn-primary bg-mint-500 hover:bg-mint-400 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Fale conosco !
              <ArrowRight size={16} />
            </button>
          </a>

        </div>
      </div>
    </section>
  );
}
