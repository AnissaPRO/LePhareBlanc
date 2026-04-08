import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour afficher l'interface de secours au prochain rendu
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Crash JS capturé :', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            color: 'red',
            border: '2px solid red',
            borderRadius: '8px',
            margin: '20px',
          }}
        >
          <h2> Oups ! Le Phare Blanc a un problème technique.</h2>
          <p>Une erreur critique est survenue dans l'interface.</p>
          <button onClick={() => window.location.reload()}>
            Actualiser la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
