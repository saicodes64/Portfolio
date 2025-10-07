import { useEffect, useState } from "react"

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("")
    const fullText = "<Sai The Developer/>"

    useEffect(() => {
        
        return () => {
          document.body.style.overflow = "";
        };
      }, []);
    

    useEffect(()=> {  
        let index = 0;
        const interval =  setInterval(() => {
            setText(fullText.substring(0, index));
            document.body.style.overflow = "hidden";
            index++;

            if(index > fullText.length){
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }

        }, 100);

        return () => clearInterval(interval);
    },[onComplete]);

    return (
        <div className = "fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
           <div className = "mb-4 text-4xl font-mono font-bold"> {text} <span className="animate-blink">|</span>
           </div>

           <div className ="w-[500px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
              <div className = "w-[40%] h-[2px] bg-cyan-500 shadow-[0_0_15px_#3b8286] animate-loading-bar"></div>
           </div>
        </div>
       
    )
}