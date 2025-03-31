import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="font-montserrat font-bold text-3xl text-neutral-800 mb-4">Sobre o SINAFITE-DF</h2>
            <p className="text-neutral-600 mb-4">
              Fundado em 1988, o Sindicato dos Funcionários Integrantes da Carreira Auditoria Fiscal do Tesouro do Distrito Federal (SINAFITE-DF) atua na defesa dos direitos e interesses profissionais dos Auditores Fiscais do DF.
            </p>
            <p className="text-neutral-600 mb-4">
              Nossa missão é valorizar a carreira fiscal, assegurando condições dignas de trabalho, remuneração adequada e fortalecendo o papel fundamental da Administração Tributária para a sociedade.
            </p>
            <p className="text-neutral-600 mb-6">
              Representamos mais de 700 auditores fiscais, entre ativos e aposentados, que diariamente contribuem para a justiça fiscal e o desenvolvimento do Distrito Federal.
            </p>
            <Link href="/sobre">
              <Button className="bg-[#1A3A6E] hover:bg-blue-900 text-white px-6 py-3 h-auto font-semibold">
                Conheça nossa história
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Sede do SINAFITE-DF" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Reunião da diretoria" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Assembleia Geral" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Negociação com governo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
