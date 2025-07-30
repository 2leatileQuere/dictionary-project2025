import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="d-flex justify-content-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <div className="container text-center mt-5">
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/2leatileQuere"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
              <a
                href="https://dictionary-project2025.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Netlify"
              >
                <i className="fa-solid fa-globe fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/leatile-qu%C3%A9r%C3%A9-53532b1a8/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <br />
          Coded by Leatile Quere - Open sourced
        </footer>
      </div>
    </div>
  );
}

export default App;
