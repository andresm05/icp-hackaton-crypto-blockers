import { Opt, Principal, Record, Vec, float64, text } from "azle";
import { Vehicle } from "./Vehicle.types";

export const Customer = Record({
    id: Principal,
    vehicle: Vehicle,
    latitude: float64,
    longitude: float64,
});