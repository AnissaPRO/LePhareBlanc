import React from 'react';

// Styles inline simplistic for now, or use classes. 
// Can be moved to a CSS file later.
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
  },
  date: {
    fontSize: '0.875rem',
    color: '#666',
  },
  content: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#444',
  },
  tag: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginTop: '12px',
    backgroundColor: '#e0f2f1',
    color: '#00695c',
  }
};

const ArticleCard = ({ article }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{article.title}</h3>
        <span style={styles.date}>{article.date}</span>
      </div>
      <p style={styles.content}>{article.content}</p>
      {article.tag && (
        <span style={styles.tag}>
          {article.tag}
        </span>
      )}
    </div>
  );
};

export default ArticleCard;
