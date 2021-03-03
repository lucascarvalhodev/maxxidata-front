import axios from "axios";
import { IUser } from "../alias/IUser";

export const signIn = (data: IUser) => axios.post("/auth/sign-in", data);

export const signUp = (data: IUser) => axios.post("/auth/sign-up", data);

export const me = () => axios.get("/auth/me");
