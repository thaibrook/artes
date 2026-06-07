import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  produtos: [
    { label: 'Cadernos & Agendas', href: '#' },
    { label: 'Canetas & Lápis', href: '#' },
    { label: 'Artes & Pintura', href: '#' },
    { label: 'Escritório', href: '#' },
    { label: 'Material Escolar', href: '#' },
    { label: 'Presentes Criativos', href: '#' },
  ],
  institucional: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Trocas e Devoluções', href: '#' },
    { label: 'Frete e Entrega', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer id="contato" className="bg-primary-900 text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-primary-400 rounded-full flex items-center justify-center">
                <span className=" font-bold text-sm text-white">B</span>
              </div>
              <span className=" text-xl font-semibold">Papelaria Brooks</span>
            </div>
            <p className="text-accent-100/70 text-sm leading-relaxed mb-6">
              Desde 2024 inspirando criatividade e organização. Tudo para o seu mundo criativo, em um só lugar.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.displayName}
                  href={href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center
                             transition-all duration-300 hover:bg-primary-500 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className=" font-semibold text-sm uppercase tracking-wider text-accent-100 mb-4">
              Produtos
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-100/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className=" font-semibold text-sm uppercase tracking-wider text-accent-100 mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-100/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className=" font-semibold text-sm uppercase tracking-wider text-accent-100 mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-peach-300 shrink-0 mt-0.5" />
                <span className="text-accent-100/60 text-sm">
                Estamos online em <a href="https://www.instagram.com/art_brook_star/" className="text-peach-300 hover:underline">Instagram</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-peach-300 shrink-0" />
                <a
                  href="https://wa.me/5592985019752"
                  className="text-accent-100/60 text-sm hover:text-white transition-colors duration-200"
                >
                  (92) 98501-9752
                </a>
              </li>
              {/* <li className="flex items-center gap-3">
                <Mail size={18} className="text-peach-300 shrink-0" />
                <span className="text-accent-100/60 text-sm">contato@papelariabrooks.com.br</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-accent-100/30 text-sm">
            &copy; {new Date().getFullYear()} Papelaria Brooks. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-accent-100/30 text-xs">Pagamentos seguros</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Pix'].map((card) => (
                <span
                  key={card}
                  className="bg-white/10 text-white/70 text-xs font-medium px-2.5 py-1 rounded"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
