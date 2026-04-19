import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Rest API's", "Genrative AI"],
      icon: "🎨"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB" , "SQL"],
      icon: "⚙️"
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code"],
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-12 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6.5 ">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Technologies I use to bring digital products to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
            >
              {/* Top Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {group.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 text-sm font-medium bg-slate-950/80 border border-slate-800 rounded-xl text-slate-300 group-hover:bg-slate-800 group-hover:text-white transition-all shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Subtle Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;