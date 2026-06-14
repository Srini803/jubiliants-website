import { MetadataRoute } from 'next'
const base = 'https://jubiliants.com'
const routes = [
  '',
  '/software-solutions/custom-software-development',
  '/software-solutions/web-applications',
  '/software-solutions/mobile-applications',
  '/software-solutions/erp-solutions',
  '/software-solutions/saas-development',
  '/software-solutions/cloud-solutions',
  '/software-solutions/digital-transformation',
  '/artificial-intelligence/agentic-ai',
  '/artificial-intelligence/ai-automation',
  '/artificial-intelligence/generative-ai',
  '/artificial-intelligence/computer-vision',
  '/artificial-intelligence/ai-chatbots',
  '/artificial-intelligence/machine-learning',
  '/case-studies',
  '/about',
  '/contact',
]
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(r => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: r === '' ? 1 : r.length < 15 ? 0.9 : 0.8 }))
}
