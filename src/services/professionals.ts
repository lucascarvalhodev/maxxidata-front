import axios from "axios";
import { IProfessional } from "../alias/IProfessional";

export const getProfessionals = () => axios.get("/professionals");

export const getProfessional = (id: string) =>
  axios.get("/professionals/" + id);

export const editProfessional = (id: string, data: IProfessional) =>
  axios.put("/professionals/" + id, data);

export const createProfessional = (data: IProfessional) =>
  axios.post("/professionals/", data);

export const deleteProfessional = (id: string) =>
  axios.delete("/professionals/" + id);
