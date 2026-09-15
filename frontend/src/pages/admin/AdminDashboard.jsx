function AdminDashboard() {
    return (
        <div>

            <div className="page-heading">
                <div>
                    <span className="eyebrow">
                        ADMIN PORTAL
                    </span>

                    <h1>Dashboard</h1>

                    <p>
                        Tổng quan hoạt động của hệ thống phòng khám.
                    </p>
                </div>
            </div>


            <div className="stats-grid">

                <div className="stat-card">
                    <div className="stat-icon">♙</div>
                    <span>Bác sĩ</span>
                    <strong>18</strong>
                    <small>Đang hoạt động</small>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✚</div>
                    <span>Chuyên khoa</span>
                    <strong>6</strong>
                    <small>Trong hệ thống</small>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">▣</div>
                    <span>Lịch hẹn hôm nay</span>
                    <strong>42</strong>
                    <small>Tất cả bác sĩ</small>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">◷</div>
                    <span>Chờ xử lý</span>
                    <strong>8</strong>
                    <small>Lịch hẹn</small>
                </div>

            </div>


            <div className="admin-grid">

                <div className="dashboard-card">
                    <div className="card-header">
                        <div>
                            <h2>Hoạt động nhanh</h2>
                            <p>Quản lý hệ thống</p>
                        </div>
                    </div>

                    <div className="quick-actions">

                        <a href="/admin/doctors">
                            <span>♙</span>
                            <div>
                                <strong>Quản lý bác sĩ</strong>
                                <small>Thêm, sửa, khóa tài khoản</small>
                            </div>
                        </a>

                        <a href="/admin/specialties">
                            <span>✚</span>
                            <div>
                                <strong>Chuyên khoa</strong>
                                <small>Quản lý chuyên khoa</small>
                            </div>
                        </a>

                        <a href="/admin/appointments">
                            <span>▣</span>
                            <div>
                                <strong>Lịch hẹn</strong>
                                <small>Xem tất cả lịch hẹn</small>
                            </div>
                        </a>

                    </div>
                </div>


                <div className="dashboard-card">
                    <div className="card-header">
                        <div>
                            <h2>Tình trạng hệ thống</h2>
                        </div>
                    </div>

                    <div className="system-status">
                        <div>
                            <span className="status-dot"></span>
                            <strong>API Server</strong>
                            <span>Hoạt động</span>
                        </div>

                        <div>
                            <span className="status-dot"></span>
                            <strong>Database</strong>
                            <span>Hoạt động</span>
                        </div>

                        <div>
                            <span className="status-dot"></span>
                            <strong>Booking Service</strong>
                            <span>Hoạt động</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;