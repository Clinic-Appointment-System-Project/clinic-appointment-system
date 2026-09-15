import { useState } from "react";

const initialAppointments = [
    {
        id: 1,
        patient: "A",
        phone: "0901234567",
        date: "21/09/2026",
        time: "08:30",
        reason: "Đau đầu, chóng mặt",
        status: "PENDING",
    },
    {
        id: 2,
        patient: "B",
        phone: "0912345678",
        date: "21/09/2026",
        time: "09:30",
        reason: "Khám sức khỏe",
        status: "CONFIRMED",
    },
    {
        id: 3,
        patient: "C",
        phone: "0923456789",
        date: "21/09/2026",
        time: "10:30",
        reason: "Đau dạ dày",
        status: "CONFIRMED",
    },
    {
        id: 4,
        patient: "D",
        phone: "0934567890",
        date: "21/09/2026",
        time: "14:00",
        reason: "Tái khám",
        status: "COMPLETED",
    },
];

const statusLabels = {
    PENDING: "Chờ xác nhận",
    CONFIRMED: "Đã xác nhận",
    COMPLETED: "Đã hoàn thành",
    CANCELLED: "Đã hủy",
};

function DoctorAppointments() {
    const [appointments, setAppointments] =
        useState(initialAppointments);

    const updateStatus = (id, status) => {
        setAppointments((current) =>
            current.map((appointment) =>
                appointment.id === id
                    ? {
                        ...appointment,
                        status,
                    }
                    : appointment
            )
        );
    };

    return (
        <div>

            <div className="page-heading">
                <div>
                    <span className="eyebrow">
                        DOCTOR PORTAL
                    </span>

                    <h1>Lịch hẹn</h1>

                    <p>
                        Quản lý và xử lý lịch hẹn của bệnh nhân.
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
                    Đã hoàn thành
                </button>

            </div>


            <div className="dashboard-card">

                <div className="table-wrapper">
                    <table>

                        <thead>
                            <tr>
                                <th>Bệnh nhân</th>
                                <th>Ngày</th>
                                <th>Giờ</th>
                                <th>Lý do khám</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
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

                                            <div>
                                                <strong>
                                                    {appointment.patient}
                                                </strong>

                                                <small>
                                                    {appointment.phone}
                                                </small>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{appointment.date}</td>

                                    <td>
                                        <strong>
                                            {appointment.time}
                                        </strong>
                                    </td>

                                    <td>{appointment.reason}</td>

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

                                    <td>
                                        {appointment.status ===
                                            "PENDING" && (
                                            <button
                                                className="small-btn primary"
                                                onClick={() =>
                                                    updateStatus(
                                                        appointment.id,
                                                        "CONFIRMED"
                                                    )
                                                }
                                            >
                                                Xác nhận
                                            </button>
                                        )}

                                        {appointment.status ===
                                            "CONFIRMED" && (
                                            <button
                                                className="small-btn"
                                                onClick={() =>
                                                    updateStatus(
                                                        appointment.id,
                                                        "COMPLETED"
                                                    )
                                                }
                                            >
                                                Hoàn thành
                                            </button>
                                        )}

                                        {appointment.status ===
                                            "COMPLETED" && (
                                            <span className="muted">
                                                Đã xử lý
                                            </span>
                                        )}
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

export default DoctorAppointments;