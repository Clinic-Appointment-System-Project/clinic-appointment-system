import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import DashboardLayout from "./components/layout/DashboardLayout";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorSchedule from "./pages/doctor/DoctorSchedule";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDoctors from "./pages/admin/AdminDoctors";
import AdminSpecialties from "./pages/admin/AdminSpecialties";
import AdminAppointments from "./pages/admin/AdminAppointments";

import "./App.css";
import "./components/layout/dashboard.css";


function Home() {
    return (
        <div className="public-page">
            <section className="hero">
                <div className="hero-content">
                    <span className="eyebrow">PHÒNG KHÁM ĐA KHOA</span>

                    <h1>
                        Chăm sóc sức khỏe
                        <br />
                        <span>tận tâm và chuyên nghiệp</span>
                    </h1>

                    <p>
                        Đặt lịch khám với đội ngũ bác sĩ giàu kinh nghiệm
                        một cách nhanh chóng và thuận tiện.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Đặt lịch khám
                        </button>

                        <button className="btn btn-outline">
                            Tìm bác sĩ
                        </button>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-head">
                    <div>
                        <span className="eyebrow">DỊCH VỤ</span>
                        <h2>Chuyên khoa</h2>
                    </div>
                </div>

                <div className="dept-grid">
                    {[
                        "Nội khoa",
                        "Nhi khoa",
                        "Da liễu",
                        "Tim mạch",
                        "Tai Mũi Họng",
                        "Mắt",
                    ].map((item) => (
                        <div className="dept-card" key={item}>
                            <div className="dept-icon">+</div>
                            <h3>{item}</h3>
                            <p>Khám và điều trị chuyên sâu.</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


function Login() {
    return (
        <div className="simple-page">
            <div className="form-card">
                <span className="eyebrow">MEDBOOKING</span>
                <h1>Đăng nhập</h1>

                <label>Email</label>
                <input type="email" placeholder="Nhập email" />

                <label>Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />

                <button className="btn btn-primary full">
                    Đăng nhập
                </button>
            </div>
        </div>
    );
}


function Register() {
    return (
        <div className="simple-page">
            <div className="form-card">
                <span className="eyebrow">MEDBOOKING</span>
                <h1>Tạo tài khoản</h1>

                <label>Họ và tên</label>
                <input placeholder="Nguyễn Văn A" />

                <label>Email</label>
                <input type="email" placeholder="example@email.com" />

                <label>Mật khẩu</label>
                <input type="password" placeholder="Mật khẩu" />

                <button className="btn btn-primary full">
                    Đăng ký
                </button>
            </div>
        </div>
    );
}


function Doctors() {
    const doctors = [
        {
            name: "BS. Nguyễn Minh Anh",
            specialty: "Nội khoa",
        },
        {
            name: "BS. Trần Hoàng Nam",
            specialty: "Tim mạch",
        },
        {
            name: "BS. Lê Thu Hà",
            specialty: "Nhi khoa",
        },
        {
            name: "BS. Phạm Minh Đức",
            specialty: "Da liễu",
        },
    ];

    return (
        <div className="public-page">
            <section className="page-banner">
                <span className="eyebrow">MEDBOOKING</span>
                <h1>Đội ngũ bác sĩ</h1>
                <p>Đội ngũ bác sĩ giàu kinh nghiệm và tận tâm.</p>
            </section>

            <section className="section">
                <div className="doctor-grid">
                    {doctors.map((doctor) => (
                        <div className="doctor-card" key={doctor.name}>
                            <div className="doctor-avatar">
                                {doctor.name.charAt(4)}
                            </div>

                            <h3>{doctor.name}</h3>
                            <p>{doctor.specialty}</p>

                            <button className="btn btn-outline full">
                                Xem hồ sơ
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


function Specialties() {
    const specialties = [
        "Nội khoa",
        "Nhi khoa",
        "Da liễu",
        "Tim mạch",
        "Tai Mũi Họng",
        "Mắt",
    ];

    return (
        <div className="public-page">
            <section className="page-banner">
                <span className="eyebrow">MEDBOOKING</span>
                <h1>Chuyên khoa</h1>
                <p>Lựa chọn chuyên khoa bạn cần thăm khám.</p>
            </section>

            <section className="section">
                <div className="dept-grid">
                    {specialties.map((item) => (
                        <div className="dept-card" key={item}>
                            <div className="dept-icon">+</div>
                            <h3>{item}</h3>
                            <p>Khám và tư vấn chuyên khoa.</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


function PatientDashboard() {
    return (
        <div className="simple-page">
            <div className="form-card">
                <span className="eyebrow">PATIENT</span>
                <h1>Patient Dashboard</h1>
                <p>Patient dashboard sẽ được tích hợp ở phần Member phụ trách.</p>
            </div>
        </div>
    );
}


function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* PUBLIC */}

                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <Layout>
                            <Login />
                        </Layout>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <Layout>
                            <Register />
                        </Layout>
                    }
                />

                <Route
                    path="/doctors"
                    element={
                        <Layout>
                            <Doctors />
                        </Layout>
                    }
                />

                <Route
                    path="/specialties"
                    element={
                        <Layout>
                            <Specialties />
                        </Layout>
                    }
                />

                <Route
                    path="/patient/dashboard"
                    element={
                        <Layout>
                            <PatientDashboard />
                        </Layout>
                    }
                />


                {/* DOCTOR */}

                <Route element={<DashboardLayout role="DOCTOR" />}>

                    <Route
                        path="/doctor/dashboard"
                        element={<DoctorDashboard />}
                    />

                    <Route
                        path="/doctor/schedule"
                        element={<DoctorSchedule />}
                    />

                    <Route
                        path="/doctor/appointments"
                        element={<DoctorAppointments />}
                    />

                </Route>


                {/* ADMIN */}

                <Route element={<DashboardLayout role="ADMIN" />}>

                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />

                    <Route
                        path="/admin/doctors"
                        element={<AdminDoctors />}
                    />

                    <Route
                        path="/admin/specialties"
                        element={<AdminSpecialties />}
                    />

                    <Route
                        path="/admin/appointments"
                        element={<AdminAppointments />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;