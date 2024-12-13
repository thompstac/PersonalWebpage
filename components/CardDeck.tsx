'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CardData, cardData } from '@/lib/card-data'

interface CardDeckProps {
  category: string
  onClose: () => void
  theme: { color: string; lightColor: string }
}

export default function CardDeck({ category, onClose, theme }: CardDeckProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const cards = cardData.filter((card) => card.category === category)

  const shuffleToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const currentCard = cards[currentCardIndex]

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>
      <div
        className="bg-white rounded-lg p-4 max-w-md w-full"
        style={{ backgroundColor: theme.lightColor, color: theme.color }}
      >
        <Image
          src={currentCard.imageUrl}
          alt={currentCard.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{currentCard.title}</h3>
        <p className="mb-2">{currentCard.description}</p>
        <p className="mb-4">{currentCard.details}</p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 rounded-lg text-white font-semibold"
            style={{ backgroundColor: theme.color }}
            onClick={shuffleToNextCard}
          >
            Next Card
          </button>
          <button
            className="px-4 py-2 rounded-lg text-white font-semibold"
            style={{ backgroundColor: theme.color }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

