import { Principal, Record, float64, int64, text } from "azle";

export const Vehicle = Record({
    id: Principal,
    plate: text,
    size: int64,
    type: text,
});