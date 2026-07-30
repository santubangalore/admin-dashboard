import { Zap } from "lucide-react"

export const AppSidebar=()=>{

    return(
     <div className="transition duration-500 ease-in-out bg-white/80 dark:bg-slate-800/90
        backdrop-blur-xl broder-r border-slate-200/50 dark:border-slate-700/50 flex flex-col">
        <div className="p-6 border-b border-slate-200/50  ">
            <div className="flex items-center space-x-3 w-[150px] mb-5">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 
                    to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap height={24} width={24} className="text-white"/>
                </div>
               <div >
                   <h2 className="text-xl font-bold text-slate-800 dark:text-white"> Q-serve</h2>
                   <p className="text-xs text-slate-800">Admin Panel </p>
               </div>
            </div>
        </div>
       <nav className="flex-1 p-2 space-y-2 overflow-y-auto"> </nav>
       <div className="p-4 border-t border-slate-200/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl 
            bg-slate-50 dark:bg-slate-700/50">
           <img src="" alt="user" className="w-10 h-10 rounded-full ring-2 ring-blue-500" >
           </img>     
            <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Alex Duncan</p>
                     <p className="text-xs text-slate-500 dark:text-white truncate">Admininstrator</p>
                </div>
            </div>
        </div>
       </div>
    </div>
    )
}
