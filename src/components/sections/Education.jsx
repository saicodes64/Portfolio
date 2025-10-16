import { RevealOnScroll } from "../RevealOnScroll"

export const Education = () => {
    const educationData = [
        {
            institute: "Pimpri Chinchwad University",
            subtext: "PCET's PCU",
            qualification: "B.Tech - Computer Science",
            details: "Currently in 5th Semester",
            grade: "8.82",
            gradeType: "CGPA",
            gradePercent: 88.2,
            duration: "2023 - 2027",
            status: "Ongoing",
            statusColor: "text-blue-400"
        },
        {
            institute: "Modern College",
            subtext: "Higher Secondary",
            qualification: "HSC - 12th",
            details: "Science Stream",
            grade: "69",
            gradeType: "%",
            gradePercent: 69,
            duration: "2021 - 2023",
            status: "Completed",
            statusColor: "text-green-400"
        },
        {
            institute: "RKS School",
            subtext: "Secondary School",
            qualification: "SSC - 10th",
            details: "Maharashtra Board",
            grade: "86",
            gradeType: "%",
            gradePercent: 86,
            duration: "2021",
            status: "Completed",
            statusColor: "text-green-400"
        }
    ];

    const academicStats = [
        {
            icon: "🏆",
            value: "8.82",
            label: "Current CGPA"
        },
        {
            icon: "📅",
            value: "5th",
            label: "Current Semester"
        },
        {
            icon: "🎓",
            value: "2027",
            label: "Expected Graduation"
        }
    ];

    return (
        <>
            <section id="education" className="min-h-screen flex items-center justify-center py-20">
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent text-center">
                            Education
                        </h2>

                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="text-5xl mb-3">🎓</div>
                            <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                Academic Journey
                            </h4>
                            <p className="text-gray-400">Building a strong foundation through quality education</p>
                        </div>

                        {/* Education Table */}
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="px-4 py-3 text-left text-cyan-400 font-semibold">🏫 Institute</th>
                                        <th className="px-4 py-3 text-left text-cyan-400 font-semibold">📜 Qualification</th>
                                        <th className="px-4 py-3 text-left text-cyan-400 font-semibold">🎖️ Grade</th>
                                        <th className="px-4 py-3 text-left text-cyan-400 font-semibold">📆 Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {educationData.map((edu, index) => (
                                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition">
                                            <td className="px-4 py-4">
                                                <div>
                                                    <p className="font-semibold text-white">{edu.institute}</p>
                                                    <p className="text-sm text-cyan-400">{edu.subtext}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div>
                                                    <span className="inline-block bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-sm font-medium mb-1">
                                                        {edu.qualification}
                                                    </span>
                                                    <p className="text-sm text-gray-400">{edu.details}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div>
                                                    <p className="font-semibold text-cyan-300">{edu.grade} {edu.gradeType}</p>
                                                    <div className="w-32 h-1.5 bg-gray-700 rounded-full mt-1 overflow-hidden">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                                            style={{ width: `${edu.gradePercent}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div>
                                                    <p className="font-semibold text-white">{edu.duration}</p>
                                                    <p className={`text-sm font-medium ${edu.statusColor}`}>{edu.status}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Academic Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {academicStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-center"
                                >
                                    <div className="text-4xl mb-2">{stat.icon}</div>
                                    <h5 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                                        {stat.value}
                                    </h5>
                                    <p className="text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
};