import { Principal, Record, text } from "azle";

export const User = Record({
    id: Principal,
    email: text,
    phone: text,
    role: text,
});