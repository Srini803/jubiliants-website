import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jubiliants.com'
  const routes = ['','/software-solutions/digital-transformation','/software-solutions/custom-applications','/software-solutions/mobile-applications','/artificial-intelligence/agentic-ai','/artificial-intelligence/automation-with-ai','/artificial-intelligence/digital-transformation-with-ai','/case-studies','/about','/contact']
  return routes.map(route => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: route === '' ? 1 : 0.8 }))
}
