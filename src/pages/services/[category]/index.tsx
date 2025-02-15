import { GetStaticProps, GetStaticPaths } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LineComponent from "@/components/Line";
import Head from "next/head";
import servicesStyle from '@/styles/servicesHome.module.css';
import { servicesList } from "@/data/servicesList";
import ServicesCardHome from "@/components/ServicesCardHome";
import Link from "next/link";

interface ServicesProps {
    category: string;
}

export default function Services({ category }: ServicesProps) {
    // Find the service that matches the category
    const selectedService = servicesList.find(el => el.title.toLowerCase() === category.toLowerCase());

    return (
        <>
            <Head>
                <title> {category.charAt(0).toUpperCase() + category.slice(1)} - Albania Wedding Company</title>
                <meta name="description" content={`Explore ${category} services from Albania Wedding Company. We offer professional DJ services, stunning lighting, heavy fog effects, and more to make your event unforgettable.`} />
                <meta name="keywords" content="wedding planner Albania, event planner Albania, professional DJ services, wedding lighting, heavy fog effects, birthday event planning, Albania Wedding Company" />
                <meta name="author" content="Albania Wedding Company" />
            </Head>
            <Header position="static" />
            <div className={servicesStyle.servicesContainer}>
                <h1>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h1>
                <LineComponent />
                <div className={servicesStyle.servicesList}>
                    {selectedService ? (
                        selectedService.items?.map((item, i) => (
                            <Link key={i} href={`/services/${category.replace(/\s+/g, '_').toLowerCase()}/${item.title.replace(/\s+/g, '_').toLowerCase()}`}>
                                <ServicesCardHome imageSrc={item.imageSrc} title={item.title} altText={item.altText} items={[]} />
                            </Link>
                        ))
                    ) : (
                        <p>No services found for this category.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

// Get static paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
    // Generate paths based on available categories
    const paths = servicesList.map(service => ({
        params: {
            category: service.title.replace(/\s+/g, '_').toLowerCase()
        }
    }));

    return {
        paths,
        fallback: false, // Can be true/false or 'blocking' depending on your need
    };
};

// Get static props for each path
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { category } = params as { category: string };

    return {
        props: {
            category: category.replace(/_/g, " "), // Replace hyphens with spaces for better formatting
        },
    };
};
