import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import servicesStyle from '@/styles/servicesHome.module.css';
import aboutUsStyle from '@/styles/aboutUs.module.css';
import ServicesCardHome from "@/components/ServicesCardHome";
import LineComponent from "@/components/Line";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import { servicesList } from "@/data/servicesList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Albania Wedding Company</title>
        <meta name="description" content="Plan your dream wedding or special event with Albania Wedding Company. We offer professional DJ services, stunning lighting, heavy fog effects, and more to make your event unforgettable." />
        <meta name="keywords" content="wedding planner Albania, event planner Albania, professional DJ services, wedding lighting, heavy fog effects, birthday event planning, Albania Wedding Company" />
        <meta name="author" content="Albania Wedding Company" />
      </Head>
      <Header />
      <Hero />
      <div className={servicesStyle.servicesContainer}>
        <h1>
          Our Services
        </h1>
        <LineComponent />
        <div className={servicesStyle.servicesList}>
          {
            servicesList.map((el, i) => (
              <Link key={i} href={`/services/${el.title.replace(/\s+/g, '_').toLowerCase()}`}>
                <ServicesCardHome items={[]} imageSrc={el.imageSrc} title={el.title} altText={el.altText} />
              </Link>
            ))
          }
          <button className={servicesStyle.viewMore}>View more</button>
        </div>
      </div>
      <div className={aboutUsStyle.aboutUsContainer}>
        <h1>
          About Us
        </h1>
        <LineComponent />
        <AboutUs
          title="At Albania Wedding Company, we specialize in creating memorable events that exceed expectations. Whether it’s a corporate gathering or a dream wedding, our team handles every detail with creativity and precision."
          description="With years of experience, we’re committed to making your vision come to life, stress-free. Let us turn your next event into an unforgettable experience!"
          imageSrcLarge="/about-us.webp"  // Replace with actual image path
        />
      </div>
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}
