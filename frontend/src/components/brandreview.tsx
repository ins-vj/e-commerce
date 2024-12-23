'use client'

import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Rating {
  category: string
  score: number
}

export default function BrandReview() {
  const ratings: Rating[] = [
    { category: "STYLE & DESIGN", score: 4.9 },
    { category: "QUALITY", score: 4.8 },
    { category: "COMFORT", score: 4.7 },
    { category: "CUSTOMER SERVICE", score: 4.8 }
  ]

  const [activeSlide, setActiveSlide] = useState(Array(6).fill(0))

  const renderStars = (score: number) => {
    const stars = []
    const fullStars = Math.floor(score)
    const hasHalfStar = score % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className="w-6 h-6 fill-pink-400 text-pink-400" 
        />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          className="w-6 h-6 fill-pink-400 text-pink-400" 
        />
      )
    }

    return stars
  }

  const testimonialImages = [
    ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"]
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-800">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Ratings Section */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            <span className="text-pink-400">2,50,000+</span> GIRLS<br />
            LOVE MYTALORZONE
          </h2>
          
          <div className="space-y-6">
            {ratings.map((rating, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4">
                <span className="text-lg font-medium">{rating.category}</span>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {renderStars(rating.score)}
                  </div>
                  <span className="text-lg font-medium ml-2">{rating.score}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-pink-50 rounded-lg">
            <p className="text-lg italic text-gray-700">
              "Offering creative, unique, and diverse clothing for girls. From traditional to western, 
              we bring trendy styles that celebrate every girl's individuality."
            </p>
            <p className="mt-4 font-semibold text-pink-600">- Sahiba</p>
          </div>
        </div>

        {/* Testimonial Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {testimonialImages.map((images, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={images[activeSlide[index]]}
                alt={`Customer style ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => {
                      const newActiveSlide = [...activeSlide]
                      newActiveSlide[index] = dotIndex
                      setActiveSlide(newActiveSlide)
                    }}
                    className={`w-2 h-2 rounded-full ${
                      activeSlide[index] === dotIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Show image ${dotIndex + 1} of style ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

