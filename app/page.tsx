'use client'

import { useState } from 'react'
import { CategorySelector } from '@/components/category-selector'
import { CardDisplay } from '@/components/card-display'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-24" style={{ backgroundColor: '#e47a80', color: '#fbd4d6' }}>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center">Birth Card Roulette</h1>
      <CategorySelector onSelectCategory={setSelectedCategory} />
      <CardDisplay category={selectedCategory} />
    </main>
  )
}

