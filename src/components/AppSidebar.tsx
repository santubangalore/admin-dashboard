import { Activity, BarChart2, BarChart3, Box, DollarSign,
         FileText, LayoutDashboard, MessageSquare, ShoppingCart,
         Settings, Users, 
        CreditCard, Package, Zap, 
        User,
        Users2,
        ChevronDown} from "lucide-react";
import { useState } from "react";
import myLogo from '../assets/profile_1.png'; 

const menuItems = [
    {
        id: 'dashboard',
        icon: LayoutDashboard,
        label: "Dashboard",
        path: "/dashboard",
        active: false,
        badge: "New"
    },
    {
        id: 'analytics',
        icon: BarChart3,
        label: "Analytics",
        active: false,
        submenu : [
            {
                id: 'overview',
                label: "Overview",
                path: "/analytics/overview",
                Icon: BarChart2
            },
            {
                id: 'reports',
                label: "Reports",
                path: "/analytics/reports",
                Icon: FileText
            },
            {
                id:'insights',
                label: "Insights",
                path: "/analytics/insights",
                Icon: Zap
            }
        ]       
    },
    {
        id: 'users',
        label: "Users",
        icon: Users2,
        count:'2.4k',
        active: false,
        path: "/users",
        submenu : [
            {
                id: 'all-users',
                label: "All Users",
                path: "/users/all",
                icon: Users
            },
            {
                id: 'roles',
                label: "Roles",
                path: "/users/roles",
                icon: Users
            },
            {
                id:'activity',
                label: "User Activity",
                path: "/users/activity",
                icon: Activity,
            }
        ]
    },
    {
        id :'ecommerce',
        label: "E-commerce",
        active: false,
        icon: ShoppingCart,
        submenu:[
            {id:'products', label:'Products'},
            {id:'orders', label:'Orders'},
            {id:'customers',label:'Customers'}
        ]
    },
    {
        id:'inventory',
        label: "Inventory",
        active: false,
        icon: Box,
        count:'1.8 mt'
    },
    {
        id:'transactions',
        active: false,
        label: "Transactions",
        icon: DollarSign,    
    },
    {
        id:'messages',
        label: "Messages",
        active: false,
        icon: MessageSquare,
        badge:'1'
    },
    {
        id:'reports',
        label: "Reports",
        active: false,
        icon: FileText,
    }
];

type SidebarParams ={
    collapsed:boolean,
    onToggle:any,
    currentPage:string,
    onPageChange:any
}

export const AppSidebar=({collapsed, onToggle, currentPage, onPageChange}:SidebarParams)=>{
    const [expandedItems,setExpandedItems]= useState(new Set(['analytics']));

    //console.log('collapsed',collapsed,'currentPage',currentPage,'onToggle',onToggle,'onPageChange',onPageChange);
    function toggle(itemId:string){
        setExpandedItems(new Set(''));
        const newExpanded= new Set(expandedItems);
        console.log(expandedItems);
        if(newExpanded.has(itemId)){
            newExpanded.delete(itemId)
        }
        else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
        onPageChange(itemId);
        console.log(expandedItems);
    }

    return(
     <div className={`${collapsed? 'w-16':'w-72'} transition-all duration-500 ease-in-out 
        bg-white/80 dark:bg-slate-800/90
        backdrop-blur-xl broder-r border-slate-200/50 
        dark:border-slate-700/50 flex flex-col relative z-10` }  >
        <div className="p-6 border-b border-slate-200/50  "> 
            <div className="flex items-center space-x-3 w-[150px] mb-5">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 
                    to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap height={24} width={24} className="text-white"/>
                </div>
             { !collapsed && (
               <div >
                   <h2 className="text-xl font-bold text-slate-800 dark:text-white"> Q-serve</h2>
                   <p className="text-xs text-slate-800">Admin Panel </p>
               </div>
               )} 
            </div>
        </div>
       <nav className="flex-1 p-2 space-y-2 overflow-y-auto">
        {menuItems.map((item)=>{
            return (
             <div key={item.id} className="flex flex-col items-center space-x-2 p-1 rounded-lg
                hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors
                cursor-pointer">
                   <button className={`w-full flex items-center justify-between p-2
                    rounded-xl transition-all duration-200 cursor-pointer ${ currentPage===item.id || item.active ?
                    'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-slate-500/25' 
                    :'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`} 
                    onClick={()=> {if(item.submenu) 
                        {
                            toggle(item.id);
                        } 
                        else 
                        {
                            onPageChange(item.id);
                        }
                    }}>
                     <div className="flex ">
                        <item.icon className={`w-5 h-5 `} />
                         {!collapsed && (
                            <>
                           <span className="text-sm ml-2 mr-1">{item.label}</span>
                             { item.badge && (
                                <span className="px-2 py-1 bg-red-500 
                                    text-white rounded-full text-xs">{item.badge}
                                </span>
                           )}
                           {item.count && (
                             <span className="px-2 py-1 text-xs bg-slate-200 text-slate-700
                             dark:bg-slate-700 dark:text-slate-300 rounded-full">{item.count}</span>
                           )}
                           
                        </>
                         )}
                       
                     </div>
                     {! collapsed && item.submenu && 
                        (
                           <ChevronDown className="h-4 w-4 transition-transform"/>
                        )
                     }
                 </button> 
                 <div className="ml-0 mt-1 space-y-1">
                    { !collapsed && item.submenu && expandedItems.has(item.id) && (
                            item.submenu.map((subItem)=>(
                                <button className="w-full text-left p-2 text-sm text-gray-800
                                hover:text-slate-800 hover:bg-blue-100 rounded-md  dark:hover:text-slate-200 
                                dark:text-slate-400 dark:hover:bg-slate-800/50 cursor-pointer">
                                    {subItem.label}
                                </button>
                            ))
                    )}

                 </div>
            </div>
        )})}
      </nav>
       <div className="p-4 border-t border-slate-200/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl 
            bg-slate-50 dark:bg-slate-700/50">
           <img src={myLogo} alt="user" className={`${collapsed? 'w-5 h-5':'w-10 h-10'} rounded-full ring-2 ring-blue-500`} >
           </img>     
            <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Santu Ghosh</p>
                     <p className="text-xs text-slate-500 dark:text-white truncate">Admininstrator</p>
                </div>
            </div>
        </div>
       </div>
    </div>
    )
}
