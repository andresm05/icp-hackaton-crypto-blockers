import { Principal, Record, float64, text } from "azle";

export const Vehicle = Record({
    id: Principal,
    volume: float64,
    type: text,
});