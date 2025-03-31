const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1A3A6E] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl mb-4">Nossa Representatividade</h2>
          <p className="max-w-2xl mx-auto text-neutral-200">O SINAFITE-DF tem se destacado na defesa dos interesses da classe fiscal e na busca por uma administração tributária mais eficiente.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-amber-400 text-4xl font-bold mb-2">35</div>
            <div className="text-xl font-medium mb-1">Anos de História</div>
            <p className="text-neutral-300">Defendendo os direitos dos auditores fiscais do DF</p>
          </div>
          
          <div className="text-center">
            <div className="text-amber-400 text-4xl font-bold mb-2">700+</div>
            <div className="text-xl font-medium mb-1">Filiados</div>
            <p className="text-neutral-300">Entre auditores ativos e aposentados</p>
          </div>
          
          <div className="text-center">
            <div className="text-amber-400 text-4xl font-bold mb-2">50+</div>
            <div className="text-xl font-medium mb-1">Convênios</div>
            <p className="text-neutral-300">Parcerias com empresas e instituições</p>
          </div>
          
          <div className="text-center">
            <div className="text-amber-400 text-4xl font-bold mb-2">100%</div>
            <div className="text-xl font-medium mb-1">Comprometimento</div>
            <p className="text-neutral-300">Com a valorização da carreira fiscal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
