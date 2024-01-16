import Hero from "../../modules/hero/Hero";
import { Example } from "../ui/Menu/Example";
import ContactForm from "../../modules/contactForm/ContactForm";
import WhyWeChoose from "../../modules/choose/WhyWeChoose";
import Footer from "../../modules/footer/Footer";
import Blog from "../../modules/blog/Blog";
import Review from "../../modules/review/Review";
import Gallery from "../../modules/gallery/Gallery";
import Feature from "../../modules/feature/Feature";

const Navbar = () => {
  return (
    <div className="container">
      <Example />
      <Hero />
      <Feature />
      <Gallery />
      <Blog />
      <WhyWeChoose />
      <Review />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Navbar;
