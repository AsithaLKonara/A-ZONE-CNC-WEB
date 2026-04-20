import { Cpu, Zap, Box, Lightbulb } from "lucide-react";

const services = [
  {
    title: "CNC Cutting",
    icon: <Cpu className="w-8 h-8 text-accent-cyan" />,
    description: "High-precision routing and cutting for various sheet materials.",
    materials: ["MDF", "Acrylic", "Aluminium", "Plastic"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800"
  },
  {
    title: "Laser Engraving",
    icon: <Zap className="w-8 h-8 text-accent-purple" />,
    description: "Intricate laser detailing and permanent marking on organic and metallic surfaces.",
    materials: ["Wood", "Acrylic", "Leather", "Metal Marking"],
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800"
  },
  {
    title: "Custom Fabrication",
    icon: <Box className="w-8 h-8 text-accent-cyan" />,
    description: "End-to-end fabrication for signage, architectural panels, and industrial components.",
    materials: ["Signs", "Panels", "Decorations", "Industrial Parts"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
  },
  {
    title: "Prototyping",
    icon: <Lightbulb className="w-8 h-8 text-accent-purple" />,
    description: "Rapid development of product samples and unique custom builds.",
    materials: ["Product Samples", "Custom Builds", "Design Iterations"],
    image: "https://images.unsplash.com/photo-1531239662811-78fe02969d63?q=80&w=800"
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-orbitron font-bold text-gradient">OUR SERVICES</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We combine cutting-edge technology with artisanal precision to deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div key={index} className="glass rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                {service.icon}
                <h2 className="text-2xl font-orbitron font-bold">{service.title}</h2>
              </div>
              <p className="text-slate-400">{service.description}</p>
              
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-accent-cyan">Materials supported:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map((m, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider text-slate-300">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
