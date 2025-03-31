import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-[#1E40AF] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-montserrat font-bold text-3xl mb-4">Faça parte do SINAFITE-DF</h2>
        <p className="max-w-2xl mx-auto mb-8 text-neutral-200">
          Junte-se a nós e fortaleça a luta pela valorização da carreira fiscal e da administração tributária do Distrito Federal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/sobre#associe-se">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 h-auto font-semibold w-full sm:w-auto">
              Associe-se agora
            </Button>
          </Link>
          <Link href="/servicos">
            <Button variant="outline" className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 h-auto font-semibold w-full sm:w-auto">
              Saiba mais sobre benefícios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
