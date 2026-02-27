import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleCard from './ArticleCard';

// Mock data generation
const generateMockArticles = (count, startId) => {
  return Array.from({ length: count }, (_, index) => ({
    id: startId + index,
    title: `Alerte #${startId + index}`,
    date: new Date().toLocaleDateString(),
    content: `Ceci est le contenu de l'alerte numéro ${startId + index}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    tag: `Category ${(startId + index) % 3 === 0 ? 'Urgent' : 'Info'}`,
  }));
};

const ArticlesList = () => {
  const [items, setItems] = useState(generateMockArticles(10, 1));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // Simulate API call delay
    setTimeout(() => {
      const nextItems = generateMockArticles(10, items.length + 1);
      
      // Stop condition for infinite scroll (e.g., after 50 items)
      if (items.length >= 50) {
        setHasMore(false);
        return;
      }
      
      setItems((prevItems) => [...prevItems, ...nextItems]);
    }, 1000);
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Geist Mono", monospace, sans-serif' // Example font
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Liste des Alertes</h1>
      
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: 'center', marginTop: '20px' }}>Chargement...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Vous avez vu toutes les alertes !</b>
          </p>
        }
      >
        {items.map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ArticlesList;
