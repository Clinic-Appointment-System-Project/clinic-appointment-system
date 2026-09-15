const appointments = [
    {
        id: 1,
        patient: "Nguyễn Văn An",
        time: "08:30",
        specialty: "Nội khoa",
        status: "CONFIRMED",
    },
    {
        id: 2,
        patient: "Trần Minh Anh",
        time: "09:30",
        specialty: "Nội khoa",
        status: "PENDING",
    },
    {
        id: 3,
        patient: "Lê Hoàng Nam",
        time: "10:30",
        specialty: "Nội khoa",
        status: "CONFIRMED",
    },
    {
        id: 4,
        patient: "Phạm Thu Hà",
        time: "14:00",
        specialty: "Nội khoa",
        status: "COMPLETED",
    },
];

function StatusBadge({ status }) {
    const labels = {
        PENDING: "Chờ xác nhận",
        CONFIRMED: "Đã xác nhận",
        COMPLETED: "Đã hoàn thành",
        CANCELLED: "Đã hủy",
    };

    return (
        <span className={`status-badge ${status.toLowerCase()}`}>
            {labels[status]}
        </span>
    );
}

function DoctorDashboard() {
    return (
        <div>

            <div className="page-heading">
                <div>
                    <span className="eyebrow">
                        DOCTOR PORTAL
                    </span>

                    <h1>Dashboard</h1>

                    <p>
                        Tổng quan hoạt động khám bệnh của bạn hôm nay.
                    </p>
                </div>

                <button className="btn btn-primary">
                    Xem lịch hôm nay
                </button>
            </div>


            <div className="stats-grid">

                <div className="stat-card">
                    <div className="stat-icon">▣</div>
                    <span>Hôm nay</span>
                    <strong>6</strong>
                    <small>Lịch hẹn</small>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">◷</div>
                    <span>Chờ xác nhận</span>
                    <strong>2</strong>
                    <small>Cần xử lý</small>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">✓</div>
                    <span>Đã xác nhận</span>
                    <strong>3</strong>
                    <small>Trong ngày</small>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">★</div>
                    <span>Hoàn thành</span>
                    <strong>1</strong>
                    <small>Hôm nay</small>
                </div>

            </div>


            <div className="dashboard-card">

                <div className="card-header">
                    <div>
                        <h2>Lịch hẹn hôm nay</h2>
                        <p>Danh sách bệnh nhân của bạn</p>
                    </div>

                    <a href="/doctor/appointments">
                        Xem tất cả
                    </a>
                </div>


                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Bệnh nhân</th>
                                <th>Thời gian</th>
                                <th>Chuyên khoa</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>

                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>
                                        <div className="patient-cell">
                                            <div className="patient-avatar">
                                                {appointment.patient.charAt(0)}
                                            </div>

                                            <strong>
                                                {appointment.patient}
                                            </strong>
                                        </div>
                                    </td>

                                    <td>{appointment.time}</td>

                                    <td>{appointment.specialty}</td>

                                    <td>
                                        <StatusBadge
                                            status={appointment.status}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default DoctorDashboard;