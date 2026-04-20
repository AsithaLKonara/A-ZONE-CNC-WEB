import { Target, Clock, ShieldCheck, DollarSign } from "lucide-react";

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      {/* Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-orbitron font-bold text-gradient uppercase">Our Mission</h1>
          <p className="text-slate-300 leading-relaxed text-lg">
            A ZONE CNC & Laser Solutions specializes in precision CNC cutting and laser engraving for signage, fabrication, and custom projects. We bridge the gap between digital design and physical reality, delivering industrial-grade quality with a commitment to craftsmanship.
          </p>
          <div className="p-6 glass border-l-4 border-accent-cyan rounded-r-2xl italic text-slate-400">
            &quot;Your vision, our precision. Bringing complex designs to life through advanced fabrication technology.&quot;
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-accent-cyan/20 blur-[80px] rounded-full" />
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" 
            alt="Workshop" 
            className="relative rounded-3xl border border-glass-border shadow-2xl"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-orbitron font-bold uppercase tracking-widest">Why Choose Us</h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Target />, title: "High Precision", desc: "Industrial-grade machines for sub-millimeter accuracy." },
            { icon: <Clock />, title: "Fast Delivery", desc: "Efficient workflows ensuring your projects stay on schedule." },
            { icon: <ShieldCheck />, title: "Custom Support", desc: "Expert design assistance for complex fabrication needs." },
            { icon: <DollarSign />, title: "Competitive Pricing", desc: "Premium fabrication quality at industry-standard rates." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl text-center space-y-4 hover:border-accent-cyan transition-colors group">
              <div className="mx-auto w-12 h-12 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-orbitron uppercase">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-orbitron font-bold uppercase tracking-widest">The Workshop</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600" className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" alt="CNC Machine" />
          <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600" className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Laser Machine" />
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Production Area" />
        </div>
      </section>
    </main>
  );
}
