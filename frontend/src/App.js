import React, { useState, useEffect } from 'react';

function App() {
  const [apiStatus, setApiStatus] = useState('Chargement...');

  useEffect(() => {
    fetch('/api') // Le proxy ou docker-compose redirigera vers le backend
      .then(res => {
        if (res.ok) return "Backend Connecté 🟢"; 
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
      padding: '40px 20px',
      textAlign: 'center',
      color: '#333'
    },
    header: {
      marginBottom: '40px'
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
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '30px',
      marginTop: '30px',
      border: '1px solid #eaeaea'
    },
    status: {
      fontWeight: 'bold',
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      display: 'inline-block'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Le Phare Blanc ⚓</h1>
        <p style={styles.subtitle}>
          Guidons les consommateurs dans le brouillard des sucres cachés.
        </p>
      </header>
      
      <main>
        <section style={styles.card}>
          <h2>Bienvenue sur le prototype</h2>
          <p>
            Cette plateforme collaborative permet de signaler les produits industriels 
            trompeurs et d'aider la communauté à mieux consommer.
          </p>
          
          <div style={styles.status}>
            Statut API : {apiStatus}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
