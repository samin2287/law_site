import { servicesData } from "@/data/servicesData";
import { teamData } from "@/data/teamData";
import { insightsData } from "@/data/insightsData";

export default function sitemap() {
  const baseUrl = "https://sterling-associates.demo";

  const staticRoutes = [
    "",
    "/our-firm",
    "/services",
    "/our-people",
    "/insights",
    "/contact",
    "/consultation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const teamRoutes = teamData.map((lawyer) => ({
    url: `${baseUrl}/our-people/${lawyer.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightRoutes = insightsData.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes, ...insightRoutes];
}
