import { Opt, Principal, Record, Vec, text } from "azle";
import { Booking } from "./Booking.types";

type Booking = typeof Booking.tsType;

export const Owner = Record({
    id: Principal,
    bookings: Vec(Booking),
    address: text,
});