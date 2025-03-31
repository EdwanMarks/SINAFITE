import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { News } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';

const NewsDetail = () => {
  const [match, params] = useRoute('/noticias/:id');
  const newsId = params?.id ? parseInt(params.id) : null;
  
  const { data: news, isLoading, error } = useQuery<News>({
    queryKey: [`/api/news/${newsId}`],
    enabled: !!newsId,
  });
  
  useEffect(() => {
    if (news) {
      document.title = `${news.title} | Sinafite-DF`;
    }
  }, [news]);
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-8 w-64 mb-4" />
            <div className="flex items-center mb-6">
              <Skeleton className="h-4 w-32 mr-4" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-80 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error || !news) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="font-montserrat font-bold text-2xl mb-4">Notícia não encontrada</h1>
            <p className="text-neutral-600 mb-6">
              A notícia que você está procurando não existe ou foi removida.
            </p>
            <Link href="/noticias">
              <Button className="bg-[#1A3A6E]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Notícias
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article>
          <div className="bg-gradient-to-r from-[#1E40AF] to-[#1A3A6E] text-white py-12">
            <div className="container mx-auto px-4">
              <Link href="/noticias">
                <button className="flex items-center text-white mb-6 hover:text-amber-300 transition">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para todas as notícias
                </button>
              </Link>
              <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">{news.title}</h1>
              <div className="flex items-center flex-wrap gap-3">
                <span className="flex items-center text-neutral-200">
                  <Calendar className="mr-2 h-4 w-4" />
                  {formatDate(news.publishedAt)}
                </span>
                <Badge variant="primary" className="bg-white/20">{news.category}</Badge>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-12">
            {news.imageUrl && (
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full max-h-96 object-cover rounded-lg mb-8"
              />
            )}
            
            <div className="max-w-4xl mx-auto prose prose-lg" dangerouslySetInnerHTML={{ __html: news.content }} />
            
            <div className="border-t border-neutral-200 mt-12 pt-6">
              <div className="flex items-center justify-between">
                <Link href="/noticias">
                  <Button variant="outline" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para notícias
                  </Button>
                </Link>
                <Button variant="outline" className="flex items-center" onClick={() => navigator.share?.({
                  title: news.title,
                  text: news.excerpt,
                  url: window.location.href
                }).catch(err => console.error('Error sharing', err))}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
