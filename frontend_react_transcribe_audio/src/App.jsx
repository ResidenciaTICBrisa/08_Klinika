import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AudioUpload from "./components/AudioUpload.jsx";

function App() {
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <AudioUpload />
      </div>
    </>
  );
}

export default App;
