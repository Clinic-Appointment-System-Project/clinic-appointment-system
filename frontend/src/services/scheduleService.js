import api from "./api";

export const getDoctorSchedules = (doctorId) => {
    return api.get(`/doctors/${doctorId}/schedules`);
};