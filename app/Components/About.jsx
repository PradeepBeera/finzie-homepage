'use client'

export default function About() {
  return (
<section className="bg-[#F9F7F4] py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
    
    <div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#241C15] mb-6">Built for speed. Powered by AI.</h2>
        <p className="text-lg text-[#241C15] mb-6">
        Whether you're automating tasks with agents or working with expert freelancers, Finzie AI helps you get results faster.
        </p>
        <button className="mt-4 bg-[#FFE01B] text-[#241C15] font-semibold px-6 py-3 rounded-full shadow hover:shadow-md transition">
        Learn More
        </button>
    </div>
    </div>
</section>
  )
}
