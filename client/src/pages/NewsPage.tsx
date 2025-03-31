import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/news/NewsCard';
import { News } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const NewsPage = () => {
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Parse the URL for initial category filter
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const category = params.get('categoria');
    if (category) {
      setCategoryFilter(category);
    }
    
    // Set document title
    document.title = "Notícias | Sinafite-DF";
  }, [location]);
  
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ['/api/news'],
  });
  
  // Filter news by category and search term
  const filteredNews = news?.filter(item => {
    const matchesCategory = !categoryFilter || item.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Get unique categories for filter
  const categories = [...new Set(news?.map(item => item.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Notícias e Comunicados</h1>
            <p className="text-neutral-100 max-w-3xl">
              Acompanhe as últimas atualizações e informações relevantes para a categoria fiscal no Distrito Federal.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                <Button 
                  variant={!categoryFilter ? "default" : "outline"}
                  onClick={() => setCategoryFilter(null)}
                  className="mb-2 md:mb-0"
                >
                  Todos
                </Button>
                {categories?.map(category => (
                  <Button 
                    key={category}
                    variant={categoryFilter === category.toLowerCase() ? "default" : "outline"}
                    onClick={() => setCategoryFilter(category.toLowerCase())}
                    className="mb-2 md:mb-0"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="w-full md:w-64">
                <Input
                  placeholder="Buscar notícias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(6).fill(0).map((_, index) => (
                  <Skeleton key={index} className="h-96" />
                ))}
              </div>
            ) : filteredNews && filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map(newsItem => (
                  <NewsCard key={newsItem.id} news={newsItem} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Nenhuma notícia encontrada</h3>
                <p className="text-neutral-600">
                  Tente usar outros termos de busca ou remover os filtros aplicados.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
