import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
<main>
  <Hero />
  <Features />
  <About/>
  <Testimonials/>
  <Footer/>
</main>
  );
}
