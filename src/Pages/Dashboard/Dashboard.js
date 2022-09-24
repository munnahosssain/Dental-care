import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex-col px-6">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-purple-500 mt-1">Welcome to your Dashboard</h2>
                    <label htmlFor="dashboard-sidebar" className="btn btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay">AAA</label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>History</Link></li>
                    {
                        admin && <li><Link to='/dashboard/users'>Users</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;