import { useState } from "react";

const initialSpecialties = [
    {
        id: 1,
        name: "Nội khoa",
        description: "Khám và điều trị các bệnh lý nội khoa.",
        doctors: 5,
        active: true,
    },
    {
        id: 2,
        name: "Nhi khoa",
        description: "Chăm sóc sức khỏe trẻ em.",
        doctors: 3,
        active: true,
    },
    {
        id: 3,
        name: "Da liễu",
        description: "Khám và điều trị các bệnh về da.",
        doctors: 3,
        active: true,
    },
    {
        id: 4,
        name: "Tim mạch",
        description: "Khám và điều trị bệnh lý tim mạch.",
        doctors: 3,
        active: true,
    },
    {
        id: 5,
        name: "Tai Mũi Họng",
        description: "Khám các bệnh tai, mũi và họng.",
        doctors: 2,
        active: true,
    },
    {
        id: 6,
        name: "Mắt",
        description: "Khám và chăm sóc sức khỏe mắt.",
        doctors: 2,
        active: false,
    },
];

function AdminSpecialties() {
    const [specialties, setSpecialties] =
        useState(initialSpecialties);

    const toggleSpecialty = (id) => {
        setSpecialties((current) =>
            current.map((specialty) =>
                specialty.id === id
                    ? {
                        ...specialty,
                        active: !specialty.active,
                    }
                    : specialty
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

                    <h1>Chuyên khoa</h1>

                    <p>
                        Quản lý các chuyên khoa của phòng khám.
                    </p>
                </div>

                <button className="btn btn-primary">
                    + Thêm chuyên khoa
                </button>
            </div>


            <div className="specialty-admin-grid">

                {specialties.map((specialty) => (
                    <div
                        className="specialty-admin-card"
                        key={specialty.id}
                    >

                        <div className="specialty-icon">
                            +
                        </div>

                        <div className="specialty-content">

                            <div className="specialty-title">
                                <h2>{specialty.name}</h2>

                                <span
                                    className={
                                        specialty.active
                                            ? "status-badge completed"
                                            : "status-badge cancelled"
                                    }
                                >
                                    {specialty.active
                                        ? "Hoạt động"
                                        : "Đã tắt"}
                                </span>
                            </div>

                            <p>
                                {specialty.description}
                            </p>

                            <span className="doctor-count">
                                {specialty.doctors} bác sĩ
                            </span>

                            <div className="specialty-actions">
                                <button className="small-btn">
                                    Chỉnh sửa
                                </button>

                                <button
                                    className="small-btn danger"
                                    onClick={() =>
                                        toggleSpecialty(
                                            specialty.id
                                        )
                                    }
                                >
                                    {specialty.active
                                        ? "Tắt"
                                        : "Bật"}
                                </button>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default AdminSpecialties;