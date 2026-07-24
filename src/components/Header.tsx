import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
        border-slate-200/50 dark:border-slate-700/50"> 
        <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
                <button > 
                    <Menu className="h-5 w-5"></Menu>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header;