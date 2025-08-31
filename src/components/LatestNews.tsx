'use client';

import Image from 'next/image';
import React from 'react';

type NewsArticle = {
  title: string;
  source: string;
  image: string;
};

const newsArticles: NewsArticle[] = [
  {
    title: 'Boeing HQ team Seattle',
    source: 'The Himalaya Jet',
    image: '/news1.webp',
  },
  {
    title: 'Rt. Hon’ble Prime Minister of Nepal Sher Bahadur Deuba',
    source: 'The Himalaya Jet',
    image: '/news2.webp',
  },
  {
    title: 'The Rt Hon Kwasi Kwarteng',
    source: 'The Himalaya Jet',
    image: '/news3.webp',
  },
  {
    title: 'H.H. Princess Asharaje Gaekwad',
    source: 'The Himalaya Jet',
    image: '/news4.webp',
  },
  {
    title: 'Hon’ble Prem Bahadur Ale ',
    source: 'The Himalaya Jet',
    image: '/news5.webp',
  },
];

const LatestNews: React.FC = () => {
  return (
    <section className="p-4 md:p-6 lg:p-8 mx-auto app-layout">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">Latest News</h2>
      <p className="text-gray-500 mb-4 md:mb-6">Top headlines and breaking news</p>

      {/* Top row with 2 large items */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
        {newsArticles.slice(0, 2).map((article, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-sm group"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={index === 0} // Prioritize loading first image
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
              <div className="font-semibold text-base sm:text-lg md:text-xl leading-tight line-clamp-2">
                {article.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 mt-1">{article.source}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom row with 3 smaller items */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        {newsArticles.slice(2, 5).map((article, index) => (
          <div
            key={index + 2}
            className="relative w-full sm:w-1/3 h-[180px] sm:h-[250px] md:h-[320px] rounded-xl overflow-hidden shadow-sm group"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
              <div className="font-semibold text-base sm:text-lg leading-tight line-clamp-2">
                {article.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 mt-1">{article.source}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;