import "./App.css";
import Dictionary from "./Dictionary";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="Aura" />
        </main>

        <footer className="App-footer">
          <div className="footer-icons">
            <a
              href="https://github.com/2leatileQuere"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://dictionary-project2025.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Netlify"
            >
              <i className="fas fa-globe"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/leatile-qu%C3%A9r%C3%A9-53532b1a8/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <p className="footer-text">
            Coded by Leatile Quere • Open sourced •{" "}
            <a
              href="https://github.com/2leatileQuere/dictionary-project2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
