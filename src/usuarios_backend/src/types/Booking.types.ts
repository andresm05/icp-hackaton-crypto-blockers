import { Principal, Record, Vec, bool, float64, text } from "azle";
import { Vehicle } from "./Vehicle.types";

export const Booking = Record({
    id: Principal,
    volume: float64,
    vehicle: Vec(Vehicle),
    fee_per_hour: float64,
    available: bool,
    start_date: text,
    end_date: text
})
