import { Principal, Record, text } from "azle";

export const User = Record({
    id: Principal,
    name: text,
    lastName: text,
    email: text,
    phone: text,
    role: text,
});