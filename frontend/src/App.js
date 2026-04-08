import React, { useState, useEffect } from 'react';

const BuggyComponent = () => {
  const user = null;
  return <div>{user.name}</div>;
};

function App() {
  const [apiStatus, setApiStatus] = useState('Chargement...');
  const [showBug, setShowBug] = useState(false);
  const [is404, setIs404] = useState(false); // État pour la page 404

  useEffect(() => {
    fetch('http://localhost:8000/status')
      .then((res) => {
        if (res.ok) return 'Backend Connecté 🟢';
        return 'Erreur Backend 🔴';
      })
      .then((msg) => setApiStatus(msg))
      .catch(() => setApiStatus('Backend Injoignable 🔴'));
  }, []);

  // --- LOGIQUE DE TEST ---
  const handleTestDb = async (force404 = false) => {
    try {
      // Si force404 est vrai, on appelle une URL qui n'existe pas
      const url = force404
        ? 'http://localhost:8000/route-inexistante'
        : 'http://localhost:8000/db-test';

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: '' }), // Force l'erreur 500 car vide
      });

      // CAS 404 : On bascule l'affichage du Front
      if (response.status === 404) {
        setIs404(true);
        return;
      }

      // CAS 500 : Erreur Call API
      if (!response.ok) {
        const errorData = await response.json();
        alert(
          `RÉPONSE API ERREUR ${response.status}\nCode : ${errorData.code}\nMessage : ${errorData.message}`,
        );
        return;
      }

      const data = await response.json();
      alert('Donnée enregistrée !');
    } catch (err) {
      alert('Impossible de joindre le serveur.');
    }
  };

  // --- AFFICHAGE DE LA PAGE 404 ---
  if (is404) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '100px',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: '5rem' }}>404</h1>
        <h2>⚓ Perdu dans le brouillard ?</h2>
        <p>Le Phare Blanc ne trouve pas cette ressource.</p>
        <button
          onClick={() => setIs404(false)}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Retourner au port
        </button>
      </div>
    );
  }

  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '30px',
      marginTop: '30px',
      border: '1px solid #eaeaea',
    },
    status: {
      fontWeight: 'bold',
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      <header>
        <h1 style={{ color: '#2c3e50' }}>Le Phare Blanc ⚓</h1>
        <p style={{ color: '#7f8c8d' }}>
          POC - Gestion des erreurs & Persistance
        </p>
      </header>

      <main>
        <section style={styles.card}>
          <div style={styles.status}>Statut API : {apiStatus}</div>

          <div
            style={{
              marginTop: '30px',
              display: 'flex',
              gap: '10px',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => handleTestDb(false)}
              style={{
                width: '300px',
                padding: '10px',
                backgroundColor: '#e67e22',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              1. Tester Erreur Call API (500)
            </button>

            <button
              onClick={() => handleTestDb(true)}
              style={{
                width: '300px',
                padding: '10px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              2. Tester Page Inexistante (404)
            </button>

            <button
              onClick={() => setShowBug(true)}
              style={{
                width: '300px',
                padding: '10px',
                backgroundColor: '#c0392b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              3. Provoquer un Crash JS
            </button>
          </div>

          {showBug && <BuggyComponent />}
        </section>
      </main>
    </div>
  );
}

export default App;
