import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function Home() {
    return <h1>Home Page</h1>;
}

function Login() {
    return <h1>Login Page</h1>;
}

function Register() {
    return <h1>Register Page</h1>;
}

function Doctors() {
    return <h1>Doctors Page</h1>;
}

function Specialties() {
    return <h1>Specialties Page</h1>;
}

function PatientDashboard() {
    return <h1>Patient Dashboard</h1>;
}

function DoctorDashboard() {
    return <h1>Doctor Dashboard</h1>;
}

function AdminDashboard() {
    return <h1>Admin Dashboard</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/specialties" element={<Specialties />} />

                    <Route
                        path="/patient/dashboard"
                        element={<PatientDashboard />}
                    />

                    <Route
                        path="/doctor/dashboard"
                        element={<DoctorDashboard />}
                    />

                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />

                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;