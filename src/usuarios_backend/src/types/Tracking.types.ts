import { Principal, Record, Vec, text } from "azle";
import { Owner, Booking, Customer } from "./";

export const Tracking = Record({
    id: Principal,
    owner: Owner,
    booking: Booking,
    customer: Customer,
    initialDate: text,
    finalDate: text,
});