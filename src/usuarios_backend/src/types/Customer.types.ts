import { Opt, Principal, Record, Vec, text } from "azle";
import { Vehicle } from "./Vehicle.types";

export const Customer = Record({
    id: Principal,
    vehicle: Vec(Opt(Vehicle)),
});