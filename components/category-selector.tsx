'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { categories } from '@/lib/card-data'

export function CategorySelector({ onSelectCategory }: { onSelectCategory: (category: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 w-full max-w-md mx-auto">
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => handleCategorySelect(category.name)}
          className={`text-white text-sm sm:text-base w-full sm:w-auto ${selectedCategory === category.name ? 'opacity-100' : 'opacity-70'}`}
          style={{
            backgroundColor: category.primary,
            borderColor: category.secondary,
          }}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}

