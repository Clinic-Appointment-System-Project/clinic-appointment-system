import { useState } from "react";

const initialSchedule = [
    {
        id: 1,
        date: "Thứ Hai, 21/09/2026",
        time: "08:00 - 09:00",
        available: true,
    },
    {
        id: 2,
        date: "Thứ Hai, 21/09/2026",
        time: "09:00 - 10:00",
        available: true,
    },
    {
        id: 3,
        date: "Thứ Hai, 21/09/2026",
        time: "10:00 - 11:00",
        available: false,
    },
    {
        id: 4,
        date: "Thứ Ba, 22/09/2026",
        time: "08:00 - 09:00",
        available: true,
    },
    {
        id: 5,
        date: "Thứ Ba, 22/09/2026",
        time: "09:00 - 10:00",
        available: true,
    },
    {
        id: 6,
        date: "Thứ Ba, 22/09/2026",
        time: "14:00 - 15:00",
        available: false,
    },
];

function DoctorSchedule() {
    const [schedule, setSchedule] =
        useState(initialSchedule);

    const toggleAvailability = (id) => {
        setSchedule((current) =>
            current.map((slot) =>
                slot.id === id
                    ? {
                        ...slot,
                        available: !slot.available,
                    }
                    : slot
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

                    <h1>Lịch làm việc</h1>

                    <p>
                        Quản lý các khung giờ bạn nhận bệnh.
                    </p>
                </div>

                <button className="btn btn-primary">
                    + Thêm khung giờ
                </button>
            </div>


            <div className="schedule-toolbar">

                <button className="date-control">
                    ←
                </button>

                <div>
                    <strong>Tuần này</strong>
                    <span>21 - 27 Tháng 09, 2026</span>
                </div>

                <button className="date-control">
                    →
                </button>

            </div>


            <div className="schedule-list">

                {schedule.map((slot) => (
                    <div
                        className="schedule-card"
                        key={slot.id}
                    >
                        <div className="schedule-date">
                            <strong>{slot.date}</strong>
                        </div>

                        <div className="schedule-time">
                            <span className="time-icon">
                                ◷
                            </span>

                            <strong>{slot.time}</strong>
                        </div>

                        <div>
                            <span
                                className={
                                    slot.available
                                        ? "availability available"
                                        : "availability unavailable"
                                }
                            >
                                {slot.available
                                    ? "Đang nhận lịch"
                                    : "Không nhận lịch"}
                            </span>
                        </div>

                        <button
                            className={
                                slot.available
                                    ? "btn btn-outline"
                                    : "btn btn-primary"
                            }
                            onClick={() =>
                                toggleAvailability(slot.id)
                            }
                        >
                            {slot.available
                                ? "Tắt"
                                : "Bật"}
                        </button>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default DoctorSchedule;