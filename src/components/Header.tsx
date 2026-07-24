import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
        border-slate-200/50 dark:border-slate-700/50"> 
        <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg text-slate-600 dark:text-slate-200
                    hover:bg-slate-100 hover:cursor-pointer"> 
                    <Menu className="h-5 w-5"></Menu>
                </button>
                <div className="hidden md:block">
                    <h1 className="text-xl font-black text-slate-800 dark:text-white ">Dashboard</h1>
                    <p>Welcome back Alex! Here's what's happenning today.</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Header;