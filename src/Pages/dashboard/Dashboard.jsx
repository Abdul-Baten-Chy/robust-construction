import { NavLink, Outlet } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";
import useHr from "../../Hooks/useHr";

const Dashboard = () => {
     const [isHr]= useHr()
    const [users] = useUsers()
    console.log(users);
    const employee = users?.filter(user=>user?.role=='Employee')
    console.log(employee);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <h1>Number of Employee: {employee?.length}</h1>
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
           {
            isHr && <>
             <li className="text-3xl my-5">HR Panel</li>
            <li>
              <NavLink to={'employee-list'}>Employee list</NavLink>
            </li>
            <li>
              <NavLink to={'progress'}>Progress</NavLink>
            </li>
            </>
           }
            <hr className="w-48 h-1  my-2 bg-gray-500 border-0 rounded"/>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
