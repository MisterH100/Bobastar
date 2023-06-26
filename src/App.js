import Header from './components/header';
import Banner from './components/banner';
import TopPoducts from './components/topProducts';
import Gallery from './components/gallery';
import Menu from './components/menu';
import Sponsors from './components/sponsors';
import Footer from './components/footer';


function App() {
  return (
    <div className="App bg-zinc-950">
      <Header/>
      <Banner/>
      <TopPoducts/>
      <Gallery/>
      <Menu/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
