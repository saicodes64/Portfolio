import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";   // disables body scrolling when the mobile menu is open, and enables it back when the menu is closed
    }, [menuOpen])

    
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-sm border-white/10 border-b shadow-lg">
             <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                    Sai
                    </a>
                    <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden"
                         onClick = {() => setMenuOpen((prev)=> !prev)}>
                        &#9776;
                    </div>

                    <div className = "hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                        <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
                        <a href="#certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
             </div>
        </nav>
    )
}
