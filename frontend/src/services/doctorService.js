import api from "./api";

export const getDoctors = () => {
    return api.get("/doctors");
};

export const getDoctorById = (id) => {
    return api.get(`/doctors/${id}`);
};