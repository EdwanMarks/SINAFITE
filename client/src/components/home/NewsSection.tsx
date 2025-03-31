import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { News } from '@/lib/types';
import { formatDate } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/news/NewsCard';

const NewsSection = () => {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ['/api/news'],
  });

  // Get the three most recent news
  const recentNews = news?.slice(0, 3);

  return (
    <section className="py-20 relative overflow-hidden bg-neutral-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-neutral-200/50 -z-10"></div>
      <div className="absolute -left-10 top-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-3 py-1 rounded-full">Mantenha-se atualizado</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-neutral-800">Últimas Notícias</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl">Acompanhe as informações mais recentes sobre a categoria e o trabalho do sindicato</p>
          </div>
          
          <Button asChild variant="outline" className="mt-6 md:mt-0 group">
            <Link href="/news">
              <span className="flex items-center">
                Ver todas as notícias
                <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden p-6 animate-pulse">
                <div className="w-full h-48 bg-neutral-200 rounded-lg mb-6"></div>
                <div className="flex items-center mb-3">
                  <div className="h-5 w-24 bg-neutral-200 rounded"></div>
                  <div className="mx-2 h-5 w-5 rounded-full bg-neutral-200"></div>
                  <div className="h-5 w-16 bg-neutral-200 rounded"></div>
                </div>
                <div className="h-7 w-3/4 bg-neutral-200 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-neutral-200 rounded"></div>
                  <div className="h-4 w-full bg-neutral-200 rounded"></div>
                  <div className="h-4 w-2/3 bg-neutral-200 rounded"></div>
                </div>
                <div className="mt-6 h-6 w-28 bg-neutral-200 rounded"></div>
              </div>
            ))
          ) : (
            recentNews?.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))
          )}
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-2xl overflow-hidden shadow-md">
          <div className="md:flex items-center px-6 py-8 md:p-10">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">
                Inscreva-se na nossa newsletter
              </h3>
              <p className="text-white/90">
                Receba atualizações sobre negociações, direitos, eventos e mais.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button variant="secondary" className="bg-white hover:bg-white/90 text-primary shadow-md">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
