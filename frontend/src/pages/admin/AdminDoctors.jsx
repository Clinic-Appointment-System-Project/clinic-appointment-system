import { useState } from "react";

const initialDoctors = [
    {
        id: 1,
        name: "BS. E",
        specialty: "Nội khoa",
        email: "12312",
        phone: "0901234567",
        active: true,
    },
    {
        id: 2,
        name: "F",
        specialty: "Tim mạch",
        email: "12312",
        phone: "0912345678",
        active: true,
    },
    {
        id: 3,
        name: "G",
        specialty: "Nhi khoa",
        email: "12312",
        phone: "0923456789",
        active: false,
    },
    {
        id: 4,
        name: "H",
        specialty: "Da liễu",
        email: "12312",
        phone: "0934567890",
        active: true,
    },
];

function AdminDoctors() {
    const [doctors, setDoctors] =
        useState(initialDoctors);

    const toggleDoctor = (id) => {
        setDoctors((current) =>
            current.map((doctor) =>
                doctor.id === id
                    ? {
                        ...doctor,
                        active: !doctor.active,
                    }
                    : doctor
            )
        );
    };

    return (
        <div>

            <div className="page-heading">
                <div>
                    <span className="eyebrow">
                        ADMIN PORTAL
                    </span>

                    <h1>Quản lý bác sĩ</h1>

                    <p>
                        Quản lý danh sách bác sĩ trong hệ thống.
                    </p>
                </div>

                <button className="btn btn-primary">
                    + Thêm bác sĩ
                </button>
            </div>


            <div className="dashboard-card">

                <div className="card-header">
                    <div>
                        <h2>Danh sách bác sĩ</h2>
                        <p>18 bác sĩ trong hệ thống</p>
                    </div>

                    <input
                        className="search-input"
                        placeholder="Tìm bác sĩ..."
                    />
                </div>


                <div className="table-wrapper">
                    <table>

                        <thead>
                            <tr>
                                <th>Bác sĩ</th>
                                <th>Chuyên khoa</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>

                        <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.id}>

                                    <td>
                                        <div className="patient-cell">
                                            <div className="doctor-small-avatar">
                                                {doctor.name.charAt(4)}
                                            </div>

                                            <strong>
                                                {doctor.name}
                                            </strong>
                                        </div>
                                    </td>

                                    <td>{doctor.specialty}</td>

                                    <td>{doctor.email}</td>

                                    <td>{doctor.phone}</td>

                                    <td>
                                        <span
                                            className={
                                                doctor.active
                                                    ? "status-badge completed"
                                                    : "status-badge cancelled"
                                            }
                                        >
                                            {doctor.active
                                                ? "Hoạt động"
                                                : "Đã khóa"}
                                        </span>
                                    </td>

                                    <td>
                                        <button className="small-btn">
                                            Sửa
                                        </button>

                                        <button
                                            className="small-btn danger"
                                            onClick={() =>
                                                toggleDoctor(doctor.id)
                                            }
                                        >
                                            {doctor.active
                                                ? "Khóa"
                                                : "Mở khóa"}
                                        </button>
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

export default AdminDoctors;