import { Principal, Record, int64, text } from "azle";

export const User = Record({
    id: Principal,
    email: text,
    phone: text,
    music: text,
});