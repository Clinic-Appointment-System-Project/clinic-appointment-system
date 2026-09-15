import { NavLink } from "react-router-dom";

function Sidebar({ role }) {
    const doctorLinks = [
        {
            label: "Dashboard",
            path: "/doctor/dashboard",
            icon: "⌂",
        },
        {
            label: "Lịch làm việc",
            path: "/doctor/schedule",
            icon: "▣",
        },
        {
            label: "Lịch hẹn",
            path: "/doctor/appointments",
            icon: "✓",
        },
    ];

    const adminLinks = [
        {
            label: "Dashboard",
            path: "/admin/dashboard",
            icon: "⌂",
        },
        {
            label: "Quản lý bác sĩ",
            path: "/admin/doctors",
            icon: "♙",
        },
        {
            label: "Chuyên khoa",
            path: "/admin/specialties",
            icon: "✚",
        },
        {
            label: "Tất cả lịch hẹn",
            path: "/admin/appointments",
            icon: "▣",
        },
    ];

    const links =
        role === "DOCTOR"
            ? doctorLinks
            : adminLinks;

    return (
        <aside className="dashboard-sidebar">

            <div className="sidebar-logo">
                <div className="logo-mark">+</div>

                <div>
                    <h1>MedBooking</h1>
                    <span>PHÒNG KHÁM ĐA KHOA</span>
                </div>
            </div>

            <div className="sidebar-section">
                <span className="sidebar-section-title">
                    {role === "DOCTOR"
                        ? "BÁC SĨ"
                        : "QUẢN TRỊ"}
                </span>

                <nav>
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `sidebar-link ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <span className="sidebar-icon">
                                {link.icon}
                            </span>

                            <span>{link.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="sidebar-bottom">
                <div className="sidebar-help">
                    <strong>Cần hỗ trợ?</strong>
                    <span>Liên hệ quản trị viên</span>
                </div>

                <button className="sidebar-logout">
                    Đăng xuất
                </button>
            </div>

        </aside>
    );
}

export default Sidebar;