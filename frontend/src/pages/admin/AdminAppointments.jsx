const appointments = [
    {
        id: 1,
        patient: "A",
        doctor: "BS. E",
        specialty: "Nội khoa",
        date: "21/09/2026",
        time: "08:30",
        status: "CONFIRMED",
    },
    {
        id: 2,
        patient: "B",
        doctor: "BS. F",
        specialty: "Tim mạch",
        date: "21/09/2026",
        time: "09:30",
        status: "PENDING",
    },
    {
        id: 3,
        patient: "C",
        doctor: "BS. G",
        specialty: "Nội khoa",
        date: "21/09/2026",
        time: "10:30",
        status: "CONFIRMED",
    },
    {
        id: 4,
        patient: "D",
        doctor: "BS. H",
        specialty: "Da liễu",
        date: "21/09/2026",
        time: "14:00",
        status: "COMPLETED",
    },
    {
        id: 5,
        patient: "sfd",
        doctor: "adsd",
        specialty: "Da liễu",
        date: "22/09/2026",
        time: "09:00",
        status: "PENDING",
    },
];

const statusLabels = {
    PENDING: "Chờ xác nhận",
    CONFIRMED: "Đã xác nhận",
    COMPLETED: "Đã hoàn thành",
    CANCELLED: "Đã hủy",
};

function AdminAppointments() {
    return (
        <div>

            <div className="page-heading">
                <div>
                    <span className="eyebrow">
                        ADMIN PORTAL
                    </span>

                    <h1>Tất cả lịch hẹn</h1>

                    <p>
                        Theo dõi lịch hẹn của toàn bộ hệ thống.
                    </p>
                </div>
            </div>


            <div className="filter-bar">

                <button className="filter active">
                    Tất cả
                </button>

                <button className="filter">
                    Chờ xác nhận
                </button>

                <button className="filter">
                    Đã xác nhận
                </button>

                <button className="filter">
                    Hoàn thành
                </button>

            </div>


            <div className="dashboard-card">

                <div className="table-wrapper">
                    <table>

                        <thead>
                            <tr>
                                <th>Bệnh nhân</th>
                                <th>Bác sĩ</th>
                                <th>Chuyên khoa</th>
                                <th>Ngày</th>
                                <th>Giờ</th>
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

                                    <td>{appointment.doctor}</td>

                                    <td>{appointment.specialty}</td>

                                    <td>{appointment.date}</td>

                                    <td>
                                        <strong>
                                            {appointment.time}
                                        </strong>
                                    </td>

                                    <td>
                                        <span
                                            className={`status-badge ${appointment.status.toLowerCase()}`}
                                        >
                                            {
                                                statusLabels[
                                                    appointment.status
                                                ]
                                            }
                                        </span>
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

export default AdminAppointments;