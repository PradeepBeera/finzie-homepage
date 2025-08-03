'use client';

export default function Footer() {
  return (
    <footer className="bg-[#241C15] text-white py-10 px-6 md:px-12 border-t-4 border-[#FFE01B]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    
<div>
    <h2 className="text-2xl font-semibold">Finzie AI</h2>
    <p className="mt-2 text-sm text-[#FFDD87]">Get work done with AI agents or expert freelancers.</p>
</div>

<div className="flex gap-12 text-sm">
    <div>
    <h3 className="font-medium mb-2 text-[#FFE01B]">Company</h3>
    <ul className="space-y-1">
        <li><a href="#" className="hover:text-[#FFDD87]">About</a></li>
        <li><a href="#" className="hover:text-[#FFDD87]">Blog</a></li>
        <li><a href="#" className="hover:text-[#FFDD87]">Careers</a></li>
    </ul>
    </div>
    <div>
    <h3 className="font-medium mb-2 text-[#FFE01B]">Support</h3>
    <ul className="space-y-1">
        <li><a href="#" className="hover:text-[#FFDD87]">Contact</a></li>
        <li><a href="#" className="hover:text-[#FFDD87]">Help Center</a></li>
        <li><a href="#" className="hover:text-[#FFDD87]">Terms & Privacy</a></li>
    </ul>
    </div>
</div>
</div>

<div className="mt-10 text-center text-xs text-[#F9F7F4]">
© {new Date().getFullYear()} Finzie AI. All rights reserved.
</div>
</footer>
  );
}
