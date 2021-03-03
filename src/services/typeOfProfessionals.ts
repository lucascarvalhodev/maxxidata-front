import axios from "axios";

import { ITypeOfProfessional } from "../alias/ITypeOfProfessional";

export const getTypeOfProfessionals = () => axios.get("/professional-types");

export const getTypeOfProfessional = (id: string) =>
  axios.get("/professional-types/" + id);

export const editTypeOfProfessional = (id: string, data: ITypeOfProfessional) =>
  axios.put("/professional-types/" + id, data);

export const createTypeOfProfessional = (data: ITypeOfProfessional) =>
  axios.post("/professional-types/", data);

export const deleteTypeOfProfessional = (id: string) =>
  axios.delete("/professional-types/" + id);
