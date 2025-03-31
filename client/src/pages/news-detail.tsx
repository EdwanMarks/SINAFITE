import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Article } from '@shared/schema';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate } from '@/lib/hooks';
import { ArrowRightIcon } from '@/components/ui/icons';

const NewsDetail: React.FC = () => {
  const [, params] = useRoute('/news/:id');
  const articleId = params?.id ? parseInt(params.id) : undefined;
  
  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: [`/api/articles/${articleId}`],
    enabled: !!articleId,
  });
  
  const { data: relatedArticles, isLoading: isLoadingRelated } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
    select: (data) => data
      .filter(a => a.id !== articleId && a.category === article?.category)
      .slice(0, 3),
    enabled: !!article,
  });

  if (error) {
    return (
      <>
        <Header />
        <main className="flex-grow py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Artigo não encontrado</h1>
            <p className="text-neutral-600 mb-8">O artigo que você está tentando acessar não existe ou foi removido.</p>
            <Link href="/news">
              <Button>Voltar para notícias</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article ? `${article.title} | Sinafite-DF` : 'Carregando notícia...'}</title>
        <meta name="description" content={article?.summary || 'Carregando conteúdo da notícia...'} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Article content */}
          <article className="py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-10 w-3/4 mb-6" />
                  <div className="flex items-center space-x-4 mb-8">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-64 w-full mb-8" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : (
                <>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
                    {article?.title}
                  </h1>
                  
                  <div className="flex items-center text-sm text-neutral-500 mb-8">
                    <span>{article && formatDate(article.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <span>{article?.category}</span>
                  </div>
                  
                  <div className="w-full h-64 bg-neutral-200 mb-8 rounded-lg overflow-hidden">
                    {/* Use a placeholder gradient for image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary-dark opacity-20" />
                  </div>
                  
                  <div className="prose max-w-none">
                    {article?.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-neutral-200">
                    <Link href="/news">
                      <Button variant="outline">
                        Voltar para todas as notícias
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </article>
          
          {/* Related articles */}
          {!isLoading && article && (
            <section className="py-12 bg-neutral-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8">Notícias relacionadas</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {isLoadingRelated ? (
                    Array(3).fill(0).map((_, i) => (
                      <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <Skeleton className="w-full h-40" />
                        <div className="p-6">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-full mb-4" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </div>
                    ))
                  ) : relatedArticles?.length === 0 ? (
                    <div className="col-span-3 text-center py-8">
                      <p className="text-neutral-600">Não há notícias relacionadas no momento.</p>
                    </div>
                  ) : (
                    relatedArticles?.map((relatedArticle) => (
                      <div key={relatedArticle.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-full h-40 bg-neutral-200">
                          {/* Use a placeholder gradient for image */}
                          <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary-dark opacity-20" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-neutral-800 mb-2">{relatedArticle.title}</h3>
                          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                            {relatedArticle.summary}
                          </p>
                          <Link href={`/news/${relatedArticle.id}`}>
                            <a className="text-primary text-sm font-medium hover:text-primary-dark transition-colors duration-200 inline-flex items-center">
                              Leia mais
                              <ArrowRightIcon className="ml-1 w-4 h-4" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewsDetail;
