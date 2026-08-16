import { Outlet, NavLink } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-container">

      {/* Dynamic Content Area */}
      <main className="content-area">
        <div className="page-content">
          {/* The matching child component will render here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
