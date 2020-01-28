import React from 'react';
import { ImageCarousel } from '../../components/ImageCarousel';
import { LoadIndicator } from '../../components/LoadIndicator';

export const HomePage = () => (
  <article className="flex flex-col lg:flex-row flex-1 pb-8">
    <section className="w-full lg:w-2/3 p-5">
      <ImageCarousel />
      <article className="p-5">
        <h1 className="mb-3 text-3xl font-bold text-lightgray-700">Мини-приют "Мы за право на жизнь"</h1>
        <p className="mt-2 text-lightgray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, pariatur voluptates illo ipsum atque mollitia quod iusto laboriosam ex aliquid magni quae beatae voluptate quam nisi magnam est at corporis iste. Commodi natus expedita quasi, cupiditate error maiores eos ea libero at pariatur sint id inventore reprehenderit molestiae ducimus alias nemo reiciendis molestias iusto delectus odio consequuntur illo totam? Officiis, autem? Harum laboriosam. Commodi natus expedita quasi, cupiditate error maiores eos ea libero at pariatur sint id inventore reprehenderit.</p>
      </article>
    </section>
    <section className="w-full lg:w-1/3 h-72 lg:h-auto p-5">
      <div className="w-full h-full flex items-center justify-center font-bold text-3xl rounded-xl text-lightgray-500 bg-lightgray-200">
        <LoadIndicator message="Ищем последние новости..." />
      </div>
    </section>
  </article>
);