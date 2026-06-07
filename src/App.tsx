import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
