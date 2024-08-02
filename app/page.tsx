import {
  Header,
  Hero,
  LogoTicket,
  ProductShowCase,
  Pricing,
  Testimonial,
  CallToAction,
  Footer,
} from './sections';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Hero />
      <LogoTicket />
      <ProductShowCase />
      <Pricing />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}
