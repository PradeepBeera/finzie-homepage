'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Pradeep',
    quote: 'Finzie transformed our workflow. Smooth, fast, and efficient!',
    rating: 5,
  },
  {
    name: 'Aryan',
    quote: 'I was amazed by the results. Human + AI = Magic.',
    rating: 4,
  },
  {
    name: 'Kunal',
    quote: 'Incredible support and powerful automation.',
    rating: 5,
  },
  {
    name: 'Verma',
    quote: 'Got more done in one week than the last month!',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    quote: 'Smartest investment we’ve made this quarter.',
    rating: 4,
  },
]

export default function TestimonialsSection() {
  return (
<section className="bg-[#241C15] py-20 text-white">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {testimonials.map((testimonial, idx) => (
    <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="bg-[#32271E] p-6 rounded-2xl border border-transparent hover:border-[#FFE01B] transition-all shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}
    >
        <p className="text-sm italic mb-4">"{testimonial.quote}"</p>
        <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
            <Star
            key={i}
            className={`w-4 h-4 ${
                i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'
            }`}
            />
        ))}
        </div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
    </motion.div>
    ))}
    </div>
    </div>
</section>
  )
}
