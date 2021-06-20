import Header from './components/HeaderComponent/Header'
import HeroList from './components/HeroListComponent/HeroList';
import SearchInput from './components/SearchComponent/SearchInput';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: "1rem 8rem", backgroundColor: "#E5E5E5", overflowX: "auto"}}>
        <SearchInput />
        <HeroList />
      </div>
    </div>
  );
}

export default App;
