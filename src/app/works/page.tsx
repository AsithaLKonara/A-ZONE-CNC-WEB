"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "CNC Cutting", "Laser Engraving", "Sign Boards", "Custom Fabrication", "Prototype Projects"];

const projects = [
  {
    title: "Acrylic LED Sign",
    category: "Sign Boards",
    material: "Acrylic + LED",
    process: "Laser Cut + Engraving",
    client: "Retail Store",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800"
  },
  {
    title: "MDF Pattern Wall",
    category: "CNC Cutting",
    material: "18mm MDF",
    process: "CNC Routing",
    client: "Interior Designer",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800"
  },
  {
    title: "Leather Logo Branding",
    category: "Laser Engraving",
    material: "Genuine Leather",
    process: "Precision Laser Marking",
    client: "Fashion Brand",
    image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=800"
  },
  {
    title: "Industrial Aluminium Panel",
    category: "Custom Fabrication",
    material: "5mm Aluminium",
    process: "CNC Cut + Drill",
    client: "Factory Solutions",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"
  },
  {
    title: "Scale Prototype Model",
    category: "Prototype Projects",
    material: "Plexiglass + Wood",
    process: "Multi-tool Fabrication",
    client: "Architecture Firm",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
  },
  {
    title: "Custom Wood Signage",
    category: "Sign Boards",
    material: "Oak Wood",
    process: "Deep Engraving",
    client: "Local Cafe",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800"
  }
];

export default function Works() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-orbitron font-bold text-gradient uppercase">Portfolio</h1>
        <p className="text-slate-400">Showcasing our precision and craftsmanship across various projects.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
              filter === cat 
                ? "bg-accent-cyan text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                : "glass text-slate-300 hover:border-accent-cyan"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <p className="text-accent-cyan text-xs uppercase tracking-widest font-bold">{project.category}</p>
                    <p className="text-white text-sm">Material: {project.material}</p>
                    <p className="text-white text-sm">Process: {project.process}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-orbitron">{project.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{project.client}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
