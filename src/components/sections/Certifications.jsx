import { RevealOnScroll } from "../RevealOnScroll"

export const Certifications = () => {
    const certificationsData = [
        {
            title: "Red Hat Programming in Java EE",
            issuer: "Red Hat Certified",
            icon: "☕",
            description: "Professional certification demonstrating expertise in enterprise Java development using Java EE technologies, focusing on building scalable enterprise applications.",
            tags: ["Java EE", "Enterprise Development", "Red Hat", "Web Services"],
            link: "https://www.credly.com/badges/f23d14b6-c1b6-4e45-93d1-12f320e671a7/public_url"
        },
        {
            title: "Software Engineering Specialization",
            issuer: "Coursera Verified",
            icon: "🔀",
            description: "Comprehensive specialization covering software engineering principles, design patterns, development methodologies, and best practices for building robust software systems.",
            tags: ["Software Engineering", "Design Patterns", "SDLC", "Best Practices"],
            link: "https://coursera.org/verify/specialization/GENYP73PTJCQ"
        },
        {
            title: "Blockchain Specialization",
            issuer: "Coursera Verified",
            icon: "⛓️",
            description: "Advanced specialization in blockchain technology, covering cryptocurrency, smart contracts, distributed systems, and decentralized application development.",
            tags: ["Blockchain", "Smart Contracts", "Cryptocurrency", "DApps", "Web3"],
            link: "https://coursera.org/verify/specialization/XC7A4ZF6MCW1"
        },
        {
            title: "Agile with Atlassian Jira",
            issuer: "Coursera Verified",
            icon: "⚙️",
            description: "Comprehensive certification in Agile project management methodologies using Atlassian Jira, covering sprint planning, backlog management, and team collaboration.",
            tags: ["Agile", "Scrum", "Jira", "Project Management", "Atlassian"],
            link: "https://coursera.org/verify/ER2K8LIJI983"
        }
    ];

    const stats = [
        {
            icon: "📜",
            value: "4",
            label: "Professional Certifications"
        },
        {
            icon: "💻",
            value: "3",
            label: "Specializations"
        },
        {
            icon: "🎓",
            value: "2",
            label: "Platforms"
        },
        {
            icon: "🏆",
            value: "100%",
            label: "Completion Rate"
        }
    ];

    return (
        <>
            <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
                <RevealOnScroll>
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent text-center">
                            Certifications & Achievements
                        </h2>

                        {/* Certifications Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {certificationsData.map((cert, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-4xl">{cert.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                                {cert.title}
                                            </h4>
                                            <p className="text-sm text-cyan-400">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                        {cert.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cert.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-500/20 transition"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                    >
                                        🔗 View Credential
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="max-w-3xl mx-auto">
                            <div className="p-8 rounded-xl border border-white/10">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="text-center"
                                        >
                                            <div className="text-3xl mb-2">{stat.icon}</div>
                                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                                                {stat.value}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-400">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
};