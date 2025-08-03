"use client";

import { Lightbulb, Users, CheckCircle } from "lucide-react";

export default function Features() {
  return (
<section className="py-16 px-4 md:px-10 bg-white">
<h2 className="text-3xl font-bold mb-12 text-[#241C15] text-center">Why choose Finzie AI?</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
    <Lightbulb className="mx-auto mb-4 text-[#FFE01B]" size={40} />
    <h3 className="text-xl font-semibold mb-2 text-[#241C15]">AI-First Workflow</h3>
    <p className="text-gray-700">Start with smart AI agents no waiting, no hassle. Get tasks done instantly.</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
    <Users className="mx-auto mb-4 text-[#FFE01B]" size={40} />
    <h3 className="text-xl font-semibold mb-2 text-[#241C15]">
    Human When Needed
    </h3>
    <p className="text-gray-700">
    Need help beyond AI? Easily switch to expert freelancers at any time.
    </p>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
    <CheckCircle className="mx-auto mb-4 text-[#FFE01B]" size={40} />
    <h3 className="text-xl font-semibold mb-2 text-[#241C15]">
    Results, Not Guesswork
    </h3>
    <p className="text-gray-700">
    Post a request. We get it done. Simple as that. No learning curves.
    </p>
</div>
</div>
</section>
  );
}
