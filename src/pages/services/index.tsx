import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LineComponent from "@/components/Line";
import Head from "next/head";
import servicesStyle from '@/styles/servicesHome.module.css';
import { servicesList } from "@/data/servicesList";
import ServicesCardPage from "@/components/ServicesCardPage";
import Link from "next/link";

export default function Services() {
    return (
        <>
            <Head>
                <title>Services - Albania Wedding Company</title>
                <meta name="description" content="Plan your dream wedding or special event with Albania Wedding Company. We offer professional DJ services, stunning lighting, heavy fog effects, and more to make your event unforgettable." />
                <meta name="keywords" content="wedding planner Albania, event planner Albania, professional DJ services, wedding lighting, heavy fog effects, birthday event planning, Albania Wedding Company" />
                <meta name="author" content="Albania Wedding Company" />
            </Head>
            <Header position="static" />
            <div className={servicesStyle.servicesContainer}>
                <h1>
                    Our Services
                </h1>
                <LineComponent />
                <div className={servicesStyle.servicesList}>
                    {
                        servicesList.map((el, i) => (
                            <Link className={servicesStyle.linkCard} key={i} href={`/services/${el.title.replace(/\s+/g, '_').toLowerCase()}`}>
                                <ServicesCardPage key={i} imageSrc={el.imageSrc} title={el.title} altText={el.altText} items={el.items} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}
