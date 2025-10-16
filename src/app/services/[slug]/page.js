import ServiceClient from "./ServiceClient";

const serviceData = {
  "Website-Development": {
    slug: "Website-Development",
    title: "Website Development",
    imgSrc: "/img.png",
    des: "When building modern web applications, frameworks like Next.js offer powerful tools...",
  },
  "Mobile-App-Development": {
    slug: "Mobile-App-Development",
    title: "Mobile App Development",
    imgSrc: "/img.png",
    des: "We develop native and cross-platform mobile applications...",
  },
  "Software-Developer": {
    slug: "Software-Developer",
    title: "Software Developer",
    imgSrc: "/img.png",
    des: "When building modern web applications...",
  },
  "UI-UX": {
    slug: "UI-UX",
    title: "UI/UX",
    imgSrc: "/img.png",
    des: "We create visually appealing and user-friendly designs...",
  },
  "AI-Integration": {
    slug: "AI-Integration",
    title: "AI Integration",
    imgSrc: "/img.png",
    des: "We leverage artificial intelligence to automate workflows...",
  },
  "System-Design": {
    slug: "System-Design",
    title: "System Design",
    imgSrc: "/img.png",
    des: "We build robust system architectures...",
  },
};

// ✅ Static paths for Next.js export
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

// ✅ Pass service data to the client component
export default function Page({ params }) {
  const service = serviceData[params.slug];
  if (!service) return <h1>Service Not Found</h1>;
  return <ServiceClient service={service} />;
}
