import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function DashboardLayout({ role }) {
    return (
        <div className="dashboard-layout">
            <Sidebar role={role} />

            <div className="dashboard-content">
                <header className="dashboard-topbar">
                    <div>
                        <span className="topbar-label">
                            MEDBOOKING
                        </span>

                        <h2>
                            {role === "DOCTOR"
                                ? "Khu vực bác sĩ"
                                : "Khu vực quản trị"}
                        </h2>
                    </div>

                    <div className="profile-mini">
                        <div className="profile-avatar">
                            {role === "DOCTOR" ? "D" : "A"}
                        </div>

                        <div>
                            <strong>
                                {role === "DOCTOR"
                                    ? "Doctor"
                                    : "Administrator"}
                            </strong>

                            <span>{role}</span>
                        </div>
                    </div>
                </header>

                <main className="dashboard-page">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;