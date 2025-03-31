import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { Badge } from '@/components/ui/badge';
import { News } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSection = () => {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ['/api/news'],
  });

  // Get the two most recent news items
  const recentNews = news?.slice(0, 2);

  return (
    <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-8 sm:py-10 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 leading-tight">
              Defendendo os direitos dos <span className="text-amber-400">Auditores Fiscais</span> do DF
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-neutral-100 max-w-xl">
              Há mais de 30 anos trabalhando para valorização da carreira e proteção dos interesses da classe fiscal.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link href="/sobre#associe-se">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 h-auto font-semibold w-full sm:w-auto text-xs sm:text-sm md:text-base">
                  Associe-se
                </Button>
              </Link>
              <Link href="/servicos">
                <Button variant="outline" className="bg-white hover:bg-neutral-100 text-[#1A3A6E] px-4 sm:px-5 py-2 sm:py-2.5 h-auto font-semibold w-full sm:w-auto text-xs sm:text-sm md:text-base">
                  Conheça nossos serviços
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-4 lg:pl-8">
            <div className="bg-white rounded-lg shadow-md sm:shadow-xl p-3 sm:p-4 md:p-5 lg:p-6 text-neutral-800">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-[#1A3A6E]">Notícias urgentes</h3>
              <div className="space-y-3 sm:space-y-4">
                {isLoading ? (
                  <>
                    <div className="border-b border-neutral-200 pb-3 sm:pb-4">
                      <Skeleton className="h-3 sm:h-4 w-16 sm:w-20 mb-1.5 sm:mb-2" />
                      <Skeleton className="h-5 sm:h-6 w-full mb-1.5 sm:mb-2" />
                      <Skeleton className="h-3 sm:h-4 w-full" />
                    </div>
                    <div className="pb-3 sm:pb-4">
                      <Skeleton className="h-3 sm:h-4 w-16 sm:w-20 mb-1.5 sm:mb-2" />
                      <Skeleton className="h-5 sm:h-6 w-full mb-1.5 sm:mb-2" />
                      <Skeleton className="h-3 sm:h-4 w-full" />
                    </div>
                  </>
                ) : (
                  <>
                    {recentNews?.map((item, index) => (
                      <div key={item.id} className={`${index === 0 ? 'border-b border-neutral-200' : ''} pb-3 sm:pb-4`}>
                        <Badge variant={item.category.toLowerCase() === "urgente" ? "warning" : 
                               item.category.toLowerCase() === "comunicado" ? "primary" : 
                               item.category.toLowerCase() === "legislativo" ? "legislative" : "primary"}
                               className="text-xs sm:text-sm">
                          {item.category}
                        </Badge>
                        <h4 className="font-medium text-base sm:text-lg mt-1.5 sm:mt-2 line-clamp-2">{item.title}</h4>
                        <p className="text-neutral-600 text-sm sm:text-base mt-1 line-clamp-2">{item.excerpt}</p>
                      </div>
                    ))}
                  </>
                )}
                <Link href="/noticias" className="text-[#1A3A6E] hover:text-blue-800 font-medium flex items-center text-sm sm:text-base pt-1">
                  Ver todas as notícias
                  <i className="fas fa-arrow-right ml-1.5 sm:ml-2 text-xs sm:text-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
