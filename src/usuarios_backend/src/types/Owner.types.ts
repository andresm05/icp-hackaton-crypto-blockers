import { Opt, Principal, Record, Vec, text } from "azle";
import { Booking } from "./Booking.types";

export const Owner = Record({
    id: Principal,
    booking: Vec(Opt(Booking)),
});