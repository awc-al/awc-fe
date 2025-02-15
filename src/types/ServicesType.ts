interface ServicesCardProps {
    title: string;
    imageSrc: string;
    altText?: string;
    items: ServicesItems[]
}
interface ServicesItems {
    title: string;
    imageSrc: string;
    altText?: string;
    images?: ImageType[],
    desc: string;
}

type ImageType = {
    src: string;
    alt: string;
};
interface AboutUsProps {
    title: string;
    description: string;
    imageSrcLarge: string;
}

export type { ServicesCardProps, AboutUsProps }