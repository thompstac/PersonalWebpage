'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CardData, cardData, categories } from '@/lib/card-data'
import Image from 'next/image'

export function CardDisplay({ category }: { category: string | null }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentCard, setCurrentCard] = useState<CardData | null>(null)
  const [categoryCards, setCategoryCards] = useState<CardData[]>([])

  useEffect(() => {
    if (category) {
      const filteredCards = cardData.filter(card => card.category === category)
      setCategoryCards(filteredCards)
      setCurrentCard(filteredCards[Math.floor(Math.random() * filteredCards.length)])
    } else {
      setCategoryCards([])
      setCurrentCard(null)
    }
    setIsFlipped(false)
  }, [category])

  const handleFlip = () => setIsFlipped(!isFlipped)

  const handleShuffle = () => {
    const newCard = categoryCards[Math.floor(Math.random() * categoryCards.length)]
    setCurrentCard(newCard)
    setIsFlipped(false)
  }

  const handleClose = () => {
    setCurrentCard(null)
    setIsFlipped(false)
  }

  if (!currentCard) {
    return null
  }

  const categoryColors = categories.find(cat => cat.name === currentCard.category)

  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto sm:h-96" style={{ backgroundColor: categoryColors?.secondary }}>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl" style={{ color: categoryColors?.primary }}>{currentCard.title}</CardTitle>
        <CardDescription className="text-gray-700 text-sm sm:text-base">{currentCard.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-sm sm:text-base mb-4">
          {isFlipped ? currentCard.details : 'Flip the card to see more details.'}
        </p>
        {isFlipped && currentCard.details.includes('![') && (
          <div className="mt-4">
            <Image
              src={currentCard.details.match(/$$(.*?)$$/)?.[1] || ''}
              alt={currentCard.details.match(/\[(.*?)\]/)?.[1] || 'Card image'}
              width={300}
              height={200}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
        <Button className="w-full sm:w-auto text-sm" onClick={handleFlip} style={{ backgroundColor: categoryColors?.primary }}>Flip</Button>
        <Button className="w-full sm:w-auto text-sm" onClick={handleShuffle} style={{ backgroundColor: categoryColors?.primary }}>Shuffle</Button>
        <Button className="w-full sm:w-auto text-sm" onClick={handleClose} variant="destructive">Close</Button>
      </CardFooter>
    </Card>
  )
}

