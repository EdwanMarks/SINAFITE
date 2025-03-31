import { Link } from 'wouter';
import { News } from '@/lib/types';
import { formatDate } from '@/lib/hooks';

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <article className="group bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:border-primary/30">
      <div className="md:flex">
        <div className="md:w-[280px] w-full h-48 md:h-auto relative overflow-hidden flex-shrink-0">
          {/* Article image or gradient placeholder */}
          {news.imageUrl ? (
            <img 
              src={news.imageUrl} 
              alt={news.title} 
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/20 to-primary-dark/10 absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
          )}
          
          {/* Category label */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-primary shadow-sm">
            {news.category}
          </div>
          
          {/* Image overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Date label */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded text-neutral-600 flex items-center shadow-sm">
            <svg className="h-3 w-3 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(news.publishedAt)}
          </div>
        </div>
        
        <div className="p-6 md:p-8 flex-1">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-200">
              {news.title}
            </h2>
            <p className="text-neutral-600 mb-6 line-clamp-3">
              {news.excerpt}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <Link href={`/news/${news.id}`}>
              <a className="inline-flex items-center text-primary font-medium hover:underline transition-all duration-200 group-hover:translate-x-1">
                Leia mais
                <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Link>
            
            <div className="flex items-center text-neutral-500 text-sm">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Tempo de leitura: 5 min</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
