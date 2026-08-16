import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from "lucide-react";
import myLogo from '../assets/profile_1.png';
type HeaderProps ={
    SidebarCollapsed:boolean,
    onToggleSidebar:any
}

const Header = ({SidebarCollapsed,onToggleSidebar}:HeaderProps) => {

  return (
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
        border-slate-200/50 dark:border-slate-700/50"> 
         <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-4">
                <button className={`${SidebarCollapsed? "ml-2 p-4": "p-4"} rounded-lg text-slate-600 dark:text-slate-200
                    hover:bg-slate-100 hover:cursor-pointer`} onClick={onToggleSidebar}> 
                    <Menu className="h-5 w-5"></Menu>
                </button>
                <div className="hidden md:block">
                    <h1 className="text-xl font-black text-slate-800 dark:text-white ">Dashboard</h1>
                    <p>Welcome back Alex! Here's what's happenning today.</p>
                </div>
            </div>
            {/* Center */}
            <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"/>
                    <input type="text"  placeholder="Search..." className=" w-full pl-10 pr-4 py-2.5 rounded-xl 
                       bg-slate-100 dark:bg-slate-800 border-slate-200 border text-slate-900 dark:text-white focus:outline-none
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                       " />
                       <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <Filter />
                       </button>
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center space-x-3">
                <button className="hidden md:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r
                    from-blue-500 to-purple-600 text-white rounded-xl hover:shadow mr-3">
                    <Plus className="w-8 h-5" ></Plus>
                    <p>New</p>
                </button>
                {/* Toggle */}
                <button className="p-2.5 rounded-lg text-slate-600 dark:text-slate-200
                hover:bg-slate-100 dark:hover-slate-900 transition-colors">
                    <Sun className="h-5 w-5"></Sun>
                </button>

                {/* Notification */}
                <button className="relative p-2.5 rounded-xl text-slate-700 dark:text-slate-200
                    hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs
                        items-center flex justify-center rounded-full">
                        2
                    </span>
                </button>
                <button className="relative p-2.5 rounded-xl text-slate-700 dark:text-slate-200
                    hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                    <Settings className="h-5 w-5" />
                </button>
                {/* user Profile */}
               <div className="flex items-center space-x-3 pl-3 border-1 border-slate-300  
                dark:border-slate-700 ">
                    <img alt="user" src={myLogo} className="h-6 w-6 rounded-full 
                        ring-2 ring-blue-300">
                    </img>
                    <div className="hidden md:block " >
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-200">
                            Santu Ghosh
                        </p>
                        <p className="text-sm text-slate-500 dark:taxt-slate-200">Admin</p>
                    </div>
                    <ChevronDown className="h-5 w-5 text-slate-500"></ChevronDown>
               </div>
            </div>
        </div>
  </div>
  )
}

export default Header;