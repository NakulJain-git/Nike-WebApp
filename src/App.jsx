import { Hero,Offer,Reviews,Subscribe,Footer,Superquality,Services,PopularProducts} from "./sections";
import { Nav } from "./components";
const App= ()=>(
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <Superquality/>
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <Offer />
    </section>
    <section className="bg-pale-blue padding">
      <Reviews />
    </section>
    <section className="bg-slate-900/15 padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t text-white">
      <Footer />
    </section>
      
  </main>
);
export default App;