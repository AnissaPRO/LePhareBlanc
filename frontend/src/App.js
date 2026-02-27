import React, { useState, useEffect } from 'react';
import ArticlesList from './components/ArticlesList';

function App() {
  const [apiStatus, setApiStatus] = useState('Chargement...');

  useEffect(() => {
    fetch('/api')
      .then(res => {
        if (res.ok) {
           return res.text().then(text => "Backend Connecté 🟢");
        }
        return "Erreur Backend 🔴";
      })
      .then(msg => setApiStatus(msg))
      .catch(() => setApiStatus("Backend Injoignable 🔴"));
  }, []);

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fbfbfb',
      minHeight: '100vh',
      color: '#333'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      paddingBottom: '20px',
      borderBottom: '1px solid #eaeaea'
    },
    title: {
      fontSize: '2.5rem',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
      fontWeight: '300'
    },
    status: {
      marginTop: '10px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: apiStatus.includes('🟢') ? '#27ae60' : '#c0392b'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Le Phare Blanc ⚓</h1>
        <p style={styles.subtitle}>
          Guidons les consommateurs dans le brouillard des sucres cachés.
        </p>
        <div style={styles.status}>Statut API : {apiStatus}</div>
      </header>
      
      <main>
         <ArticlesList />
      </main>
    </div>
  );
}

export default App;
