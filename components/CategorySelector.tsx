'use client'

import { useState } from 'react'
import CardDeck from './CardDeck'
import { categories } from '@/lib/card-data'

// const categories = [
//   { name: 'Mental Exercises', color: '#b33687', lightColor: '#f2adda' },
//   { name: 'Body Awareness', color: '#e79775', lightColor: '#ebcfc4' },
//   { name: 'Visualization Activities', color: '#7c68d1', lightColor: '#bdb0f3' },
//   { name: 'Labor Activities', color: '#8ec4cb', lightColor: '#d1f9fe' },
//   { name: 'Birth Positions', color: '#89e1ae', lightColor: '#d2fce4' },
// ]

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div>
      {!selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="p-4 rounded-lg text-lg font-semibold transition-colors"
              style={{
                backgroundColor: category.color,
                color: '#fbd4d6',
              }}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        <CardDeck
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
          theme={{
            color: categories.find((c) => c.name === selectedCategory)!.primary,
            lightColor: categories.find((c) => c.name === selectedCategory)!.secondary,
          }}
        />
      )}
    </div>
  )
}

