import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?cleaning")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Sparkling Cleaning Services</h1>
          <p className="mt-4 text-lg md:text-2xl">Professional cleaning for homes, events & catering</p>
        </div>
      </div>
    </section>
  );
}
