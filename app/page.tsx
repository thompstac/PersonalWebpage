import { categories } from '@/lib/card-data'
import CategorySelector from '@/components/CategorySelector'

const bgStyle = {
  backgroundColor: categories[0].primary,
  color: categories[0].secondary,
}

export default function Home() {
  return (
    <main className="min-h-screen p-8" style={bgStyle}>
      <h1 className="text-4xl font-bold mb-8 text-center">Birth Card Roulette</h1>
      <CategorySelector />
    </main>
  )
}

