import axios  from "axios";
const api = axios.create({
    baseURL:"http://192.168.29.185:7000/api",
});
//get method
export const getPost = () => {
    return api.get("/admin/patient/all");
};
// Block a patient by ID
export const blockPatient = (patientId: string) => {
    return api.patch(`/admin/patient/block?id=${patientId}`);
  };

 