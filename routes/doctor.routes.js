import express from "express";
import {
  appointmentCancel,
  appointmentComplete,
  docterList,
  doctorDashboard,
  getAppointmentsDoctor,
  getDoctorProfile,
  loginDoctor,
  updateDoctorProfile,
} from "../controllers/doctor.controller.js";
import authDoctor from "../middleware/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", docterList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, getAppointmentsDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);
doctorRouter.get("/profile", authDoctor, getDoctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);
export default doctorRouter;
