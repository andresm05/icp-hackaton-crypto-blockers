import {
    Canister,
    Err,
    Ok,
    Opt,
    Principal,
    query,
    Record,
    Result,
    StableBTreeMap,
    text,
    update,
    Variant,
    Vec
} from 'azle';
import { User } from './types/User.types';
import { RoleException } from './exceptions';
import {Booking, Customer, Owner} from './types';

type User = typeof User.tsType;
type Owner = typeof Owner.tsType;
type Customer = typeof Customer.tsType;

const AplicationError = Variant({
    UserDoesNotExist: text
});

type RoleException = typeof RoleException.tsType;

type AplicationError = typeof AplicationError.tsType;

let users = StableBTreeMap<Principal, User>(0);
let owners = StableBTreeMap<Principal, Owner>(0);
let customers = StableBTreeMap<Principal, Customer>(0);

export default Canister({
    createUser: update([text, text, text], Result(User, RoleException), (email, phone, role) => {
        const id = generateId();
        const user: User = {
            id:id,
            email,
            phone,
            role
        };

        if(role.toLocaleLowerCase() !== 'propietario' || role.toLocaleLowerCase() !== 'cliente'){
            return Err({
                    RoleException: role
                })
        }

        users.insert(user.id, user);

        if(role.toLocaleLowerCase() === 'propietario'){
            const owner: Owner = {
                id,
                booking: []
            }}
            else{
                const customer: Customer = {
                    id,
                    vehicle: []
            }
            customers.insert(customer.id, customer);
        }

        return Ok(user);
    }),
    readUsers: query([], Vec(User), () => {
        return users.values();
    }),
    readUserById: query([text], Opt(User), (id) => {
        return users.get(Principal.fromText(id));
    }),

    deleteUser: update([text], Result(User, AplicationError), (id) => {
        const userOpt = users.get(Principal.fromText(id));

        if ('None' in userOpt) {
            return Err({
                UserDoesNotExist: id
            });
        }

        const user = userOpt.Some;
        users.remove(user.id);
        return Ok(user);
    }),
    updateUser: update(
        [text, text, text, text],
        Result(User, AplicationError),
        (userId, email, phone, role) => {
            const userOpt = users.get(Principal.fromText(userId));

            if ('None' in userOpt) {
                return Err({
                    UserDoesNotExist: userId
                });
            }
            const newUser: User = {
                id:Principal.fromText(userId),
                email,
                phone,
                role
            };

            users.remove(Principal.fromText(userId))
            users.insert(Principal.fromText(userId), newUser);

            return Ok(newUser);
        }
    )
})

function generateId(): Principal {
    const randomBytes = new Array(29)
        .fill(0)
        .map((_) => Math.floor(Math.random() * 256));

    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
}