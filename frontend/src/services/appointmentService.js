import api from "./api";

export const getAppointments = () => {
    return api.get("/appointments");
};

export const getAppointmentById = (id) => {
    return api.get(`/appointments/${id}`);
};

export const createAppointment = (data) => {
    return api.post("/appointments", data);
};

export const updateAppointmentStatus = (id, status) => {
    return api.put(`/appointments/${id}/status`, { status });
};

export const cancelAppointment = (id) => {
    return api.delete(`/appointments/${id}`);
};