import { cn } from '../../lib/utils'

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-md bg-line/80', className)} />
}

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white p-3">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <Skeleton className="mt-3 h-3 w-20" />
      <Skeleton className="mt-2 h-4 w-4/5" />
      <Skeleton className="mt-3 h-4 w-24" />
      <Skeleton className="mt-4 h-10 w-full" />
    </div>
  )
}

export function CategoryCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <Skeleton className="h-40 w-full" />
      <div className="space-y-2 p-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  )
}

export function ProductDetailsSkeleton() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <Skeleton className="aspect-square w-full rounded-2xl" />
        <div className="mt-3 grid grid-cols-4 gap-3">
          <Skeleton className="aspect-square rounded-lg" />
          <Skeleton className="aspect-square rounded-lg" />
          <Skeleton className="aspect-square rounded-lg" />
          <Skeleton className="aspect-square rounded-lg" />
        </div>
      </div>
      <div className="space-y-4 pt-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-9 w-3/4" />
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  )
}
