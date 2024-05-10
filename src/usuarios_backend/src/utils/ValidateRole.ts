import { text } from "azle"

export const ValidateRole = (role: text): boolean=>{
    if(role.toLocaleLowerCase() !== 'Propietario' || role.toLocaleLowerCase() !== 'Cliente'){
        return false;
    }
    return true;
}
