import { RevealOnScroll } from "../RevealOnScroll";

export const Hobbies = () => {
  const hobbiesData = [
    {
      title: "Content Creation & Video Editing",
      icon: "🎬",
      description: "Crafting engaging digital stories and visual content. From concept to final cut, I love bringing ideas to life through creative editing and storytelling.",
      tags: ["🎞️ Video Editing", "📱 Social Media", "🎨 Creative Design"]
    },
    {
      title: "Self-Improvement",
      icon: "🌱",
      description: "Constantly working on myself to become better each day, learning new skills and improving habits for personal growth.",
      tags: ["🕒 Time Management", "📈 Productivity Tracking", "🤝 Emotional Intelligence", "📚 Continuous Learning", "💪 Self-discipline"]
    },
    {
      title: "Infotainment",
      icon: "📺",
      description: "Passionate about educational entertainment content. I love exploring documentaries, tech reviews, and content that combines learning with fun.",
      tags: ["🧠 Learning", "📖 Knowledge", "🎯 Research"]
    },
    {
      title: "Fitness & Diet",
      icon: "💪",
      description: "Maintaining a healthy lifestyle through balanced nutrition and regular exercise. Fitness fuels productivity and mental clarity for better coding sessions.",
      tags: ["🥗 Nutrition", "🏋️ Strength Training", "🧘 Wellness"]
    }
  ];

  const connections = [
    { hobby: "🎬", arrow: "➜", benefit: "Better UX Design" },
    { hobby: "🌱", arrow: "➜", benefit: "Better Human" },
    { hobby: "📺", arrow: "➜", benefit: "Tech Awareness" },
    { hobby: "💪", arrow: "➜", benefit: "Mental Clarity" }
  ];

  return (
    <section id="hobbies" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="rounded-xl p-8 border border-white/10 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-2 mb-2">
                <span>❤️</span> Personal Interests & Hobbies
              </h3>
              <p className="text-gray-400">Beyond the curriculum - What drives my passion</p>
            </div>

            {/* Hobbies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {hobbiesData.map((hobby, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition hover:bg-blue-500/5"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{hobby.icon}</div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-cyan-400">
                        {hobby.title}
                      </h5>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {hobby.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {hobby.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-500/10 text-blue-300 py-1 px-2 rounded-full text-xs font-medium hover:bg-blue-500/20 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6">
              <div className="text-center">
                <h6 className="text-lg font-bold text-cyan-400 mb-3 flex items-center justify-center gap-2">
                  <span>💡</span> How Hobbies Shape My Tech Journey
                </h6>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  My diverse interests contribute to my technical growth - content creation enhances my UI/UX perspective,
                  self-improvement teaches me discipline for better coding, infotainment keeps me updated with tech trends,
                  and fitness ensures the mental clarity needed for problem-solving.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  {connections.map((conn, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-3 py-2 rounded-full text-sm font-medium text-blue-300 hover:border-blue-500/50 transition"
                    >
                      {conn.hobby} {conn.arrow} {conn.benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};