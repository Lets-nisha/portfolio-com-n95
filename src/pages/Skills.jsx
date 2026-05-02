import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Rest API's", "Generative AI"],
      icon: "🎨",
      accent: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB" , "SQL"],
      icon: "⚙️",
      accent: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code"],
      icon: "🛠️",
      accent: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
            Technical <span className="text-blue-500">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
            Technologies I use to bring digital products to life with modern standards.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-blue-500/20 transition-all duration-500"
            >
              <div className="relative h-full p-8 rounded-[calc(1.5rem-1px)] bg-[#0a0f1d] border border-white/5 group-hover:border-blue-500/30 transition-all">
                
                {/* Icon with Glow */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-2xl shadow-lg`}>
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-wide group-hover:text-blue-400 transition-colors">
                    {group.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg text-gray-300 group-hover:bg-white/10 group-hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-2 -right-2 text-6xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   {group.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;