import { useState } from 'react'
import { AppSidebar } from './components/AppSidebar'
import Header from './components/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Overview from './components/Dashboard/Overview';
import Analytics from './components/Dashboard/Analytics';
import Settings from './components/Dashboard/Settings';

  function App() {
    const [sidebarCollapsed,setSidebarCollapsed]= useState(false);
    const [currentPage,setCurrentPage ]=useState('dashboard');

    return (


      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-100 
      dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
        <div className='flex h-screen overflow-hidden '>

          <AppSidebar 
            collapsed={sidebarCollapsed}
            onToggle={()=>setSidebarCollapsed(!sidebarCollapsed)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            />
          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header SidebarCollapsed={sidebarCollapsed} 
              onToggleSidebar={()=>setSidebarCollapsed(!sidebarCollapsed)}/>
             <main className='flex-1 overflow-y-auto '>
               <div className='p-6 space-y-6'>
                  { currentPage=='dashboard' && <Dashboard/>}
               </div>
             </main>
          </div>
        </div>
         
  </div>
  )
}

export default App
