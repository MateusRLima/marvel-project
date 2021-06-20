import Header from './components/HeaderComponent/Header'
import HeroList from './components/HeroListComponent/HeroList';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{backgroundColor: "#E5E5E5"}}>
        <HeroList />
      </div>
    </div>
  );
}

export default App;
