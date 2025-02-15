import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Services() {
    return (
        <>
            <Head>
                <title>Contact - Albania Wedding Company</title>
                <meta name="description" content="Plan your dream wedding or special event with Albania Wedding Company. We offer professional DJ services, stunning lighting, heavy fog effects, and more to make your event unforgettable." />
                <meta name="keywords" content="wedding planner Albania, event planner Albania, professional DJ services, wedding lighting, heavy fog effects, birthday event planning, Albania Wedding Company" />
                <meta name="author" content="Albania Wedding Company" />
            </Head>
            <Header position="static" />
            <ContactForm />
            <Footer />
        </>
    );
}
