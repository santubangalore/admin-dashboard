import { useState } from 'react'
import { AppSidebar } from './components/AppSidebar'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';

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
            <BrowserRouter>
            </BrowserRouter>
          </div>
        </div>

  </div>
  )
}

export default App
