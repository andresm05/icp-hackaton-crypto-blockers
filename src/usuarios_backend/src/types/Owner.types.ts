import { Opt, Principal, Record, Vec, float64, text } from "azle";
import { Booking } from "./Booking.types";

type Booking = typeof Booking.tsType;

export const Owner = Record({
    id: Principal,
    bookings: Vec(Booking),
    latitude: float64,
    longitude: float64,
});