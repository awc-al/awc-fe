import { GetStaticProps, GetStaticPaths } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LineComponent from "@/components/Line";
import Head from "next/head";
import servicesStyle from '@/styles/servicesHome.module.css';
import { servicesList } from "@/data/servicesList";
import CategoryGallery from "@/components/CategoryGallery";

interface ServicesProps {
    subcategory: string;
    category: string;
}

export default function ServicesInner({ subcategory, category }: ServicesProps) {
    const selectedService = servicesList.find(el => el.title.toLowerCase() === category.toLowerCase());
    const selectedSubCategory = selectedService?.items?.find(el => el.title.toLowerCase() === subcategory.toLowerCase());

    if (!selectedService || !selectedSubCategory) {
        return <div>Service or subcategory not found</div>;
    }

    return (
        <>
            <Head>
                <title>{subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} - Albania Wedding Company</title>
                <meta name="description" content={`Explore ${subcategory} services from Albania Wedding Company. We offer professional DJ services, stunning lighting, heavy fog effects, and more to make your event unforgettable.`} />
                <meta name="keywords" content="wedding planner Albania, event planner Albania, professional DJ services, wedding lighting, heavy fog effects, birthday event planning, Albania Wedding Company" />
                <meta name="author" content="Albania Wedding Company" />
            </Head>
            <Header position="static" />
            <div className={servicesStyle.servicesContainer}>
                <h1>
                    {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                </h1>
                <p>
                    {selectedSubCategory.desc}
                </p>
                <LineComponent />
                <div className={servicesStyle.servicesList}>
                    <CategoryGallery images={selectedSubCategory.images || []} />
                </div>
            </div>
            <Footer />
        </>
    );
}

// Get static paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
    // Generate paths based on available categories and subcategories
    const paths = servicesList.flatMap(service =>
        service.items.map(item => ({
            params: {
                category: service.title.replace(/\s+/g, '_').toLowerCase(),
                subcategory: item.title.replace(/\s+/g, '_').toLowerCase()
            }
        }))
    );

    return {
        paths,
        fallback: 'blocking', // Can be true/false or 'blocking' depending on your need
    };
};

// Get static props for each path
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { subcategory, category } = params as { subcategory: string; category: string };

    return {
        props: {
            subcategory: subcategory.replace(/_/g, " "), // Replace hyphens with spaces for better formatting
            category: category.replace(/_/g, " ")
        },
    };
};
