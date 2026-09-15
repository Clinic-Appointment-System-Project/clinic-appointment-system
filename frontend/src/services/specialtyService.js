import api from "./api";

export const getSpecialties = () => {
    return api.get("/specialties");
};

export const getSpecialtyById = (id) => {
    return api.get(`/specialties/${id}`);
};