import React from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { ArrowRightIcon } from '@/components/ui/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { Article } from '@shared/schema';
import { formatDate } from '@/lib/hooks';

const LatestNews: React.FC = () => {
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
    queryFn: async () => {
      const response = await fetch('/api/articles?limit=3');
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      return response.json();
    }
  });

  return (
    <section className="py-10 sm:py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-10 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800">Últimas Notícias</h2>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg text-neutral-600">
              Acompanhe as atualizações da categoria e do sindicato
            </p>
          </div>
          <Link href="/news" className="mt-3 md:mt-0 inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-200">
            Ver todas as notícias
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {isLoading ? (
            // Skeleton loading state
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <Skeleton className="w-full h-36 sm:h-40 md:h-48" />
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center text-xs sm:text-sm text-neutral-500 mb-1.5 sm:mb-2">
                    <Skeleton className="h-3 sm:h-4 w-20 sm:w-24" />
                    <span className="mx-1 sm:mx-2">•</span>
                    <Skeleton className="h-3 sm:h-4 w-14 sm:w-16" />
                  </div>
                  <Skeleton className="h-5 sm:h-6 w-5/6 mb-1.5 sm:mb-2" />
                  <Skeleton className="h-3 sm:h-4 w-full mb-1" />
                  <Skeleton className="h-3 sm:h-4 w-full mb-1" />
                  <Skeleton className="h-3 sm:h-4 w-2/3 mb-3 sm:mb-4" />
                  <Skeleton className="h-3 sm:h-4 w-14 sm:w-16" />
                </CardContent>
              </Card>
            ))
          ) : (
            articles?.map((article) => (
              <Card key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-full h-36 sm:h-40 md:h-48 bg-neutral-200 overflow-hidden">
                  {/* Use a placeholder gradient for image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary-dark opacity-20" />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-neutral-500 mb-1.5 sm:mb-2">
                    <span>{article.publishedAt ? formatDate(article.publishedAt) : 'Sem data'}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-1.5 sm:mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                  <Link href={`/news/${article.id}`} className="text-sm sm:text-base text-primary font-medium hover:text-primary-dark transition-colors duration-200">
                    Leia mais
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
