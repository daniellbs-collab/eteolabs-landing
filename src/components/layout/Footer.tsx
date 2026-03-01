import Image from 'next/image';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-deep border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/eteo-labs-logo.png"
                alt="Eteo Labs"
                width={282}
                height={223}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sistemas que transformam negócios. Governança, gestão e execução em nível estratégico.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Portfólio</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Dashboards inteligentes</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Empresas da área da saúde</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Comércios complexos</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Redes de serviços premium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#metodo" className="hover:text-cyan-400 transition-colors">Metodologia</a></li>
              <li><a href="#arquitetura" className="hover:text-cyan-400 transition-colors">Arquitetura</a></li>
              <li><a href="#planos" className="hover:text-cyan-400 transition-colors">Modelos comerciais</a></li>
              <li><a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">(c) 2026 Eteo Labs. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
