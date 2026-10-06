import { Seo } from '../components/ui/Seo'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="container-site py-24 text-center">
      <Seo title="Page not found | Mamashay" description="The page you requested is not available." />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-navy">This page is not available.</h1>
      <p className="mt-2 text-sm text-muted">Check the link or continue shopping from the catalogue.</p>
      <Button to="/" className="mt-6">
        Back to home
      </Button>
    </div>
  )
}
