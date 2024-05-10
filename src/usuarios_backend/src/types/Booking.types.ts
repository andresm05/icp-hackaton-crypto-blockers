import { Principal, Record, Vec, bool, float64, int64, text } from "azle";
import { Vehicle } from "./Vehicle.types";

export const Booking = Record({
    id: Principal,
    size: int64,
    fee_per_hour: float64,
    available: bool
})
