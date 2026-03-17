import React from 'react';

// Composant Bouton pour Geraldine (Gros boutons tactiles)
export const BoutonPrincipal = () => (
  <button
    style={{
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '18px',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '300px',
    }}
  >
    Signaler un sucre caché
  </button>
);

// Composant Input pour Gérard (800x600)
export const ChampSaisie = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <label style={{ fontWeight: 'bold' }}>Nom du produit :</label>
    <input
      type="text"
      placeholder="Ex: Yaourt aux fruits"
      style={{
        padding: '10px',
        border: '2px solid #333',
        borderRadius: '4px',
        width: '100%',
        maxWidth: '400px',
      }}
    />
  </div>
);

// Composant Badge pour Léa (Gamification)
export const BadgeGamer = () => (
  <span
    style={{
      backgroundColor: '#ffc107',
      padding: '5px 15px',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '14px',
    }}
  >
    🏆 Expert Chasseur
  </span>
);
