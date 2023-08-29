import Naver from './components/NaverLogin';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">
          Logo
        </h1>
      </header>
      <main>
        <div className="login">
          <h2 className="title">Login</h2>
          <input type="text" placeholder="id" className="userId" />
          <input type="password" placeholder="password" className="password" />
          <button type="submit" className="submit">로그인</button>
          <Naver />
        </div>
      </main>
    </div>
  );
}

export default App;
