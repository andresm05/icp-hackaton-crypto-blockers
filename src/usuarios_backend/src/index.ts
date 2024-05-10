import {
    bool,
    Canister,
    Err,
    float64,
    int64,
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
import { AplicationError, RoleException } from './exceptions';
import {Booking, Customer, Owner, Tracking, Vehicle} from './types';
import { generateId } from './utils/GenerateId';

type User = typeof User.tsType;
type Owner = typeof Owner.tsType;
type Customer = typeof Customer.tsType;
type Tracking = typeof Tracking.tsType;
type Vehicle = typeof Vehicle.tsType;

type Booking = typeof Booking.tsType;


type RoleException = typeof RoleException.tsType;

type AplicationError = typeof AplicationError.tsType;

let users = StableBTreeMap<Principal, User>(0);
let owners = StableBTreeMap<Principal, Owner>(0);
let customers = StableBTreeMap<Principal, Customer>(0);
let bookings = StableBTreeMap<Principal, Booking>(0);
let trackings = StableBTreeMap<Principal, Tracking>(0);

export default Canister({
    //Create a new user with an specific role
    createUser: update([text, text, text, text, text, text, int64], Result(User, RoleException), (email, phone, role, address, 
        vehicleType, vehiclePlate, size) => {
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
                bookings: [],
                address
            }

            owners.insert(owner.id, owner);
        
        }
            else{
                const vehicle: Vehicle = {
                    id: generateId(),
                    type: vehicleType,
                    plate: vehiclePlate,
                    size
                }

                const customer: Customer = {
                    id,
                    vehicle,
                    address
            }
            customers.insert(customer.id, customer);
        }

        return Ok(user);
    }),

    //Read all users
    readUsers: query([], Vec(User), () => {
        return users.values();
    }),

    //Find a user by id
    readUserById: query([text], Opt(User), (id) => {
        return users.get(Principal.fromText(id));
    }),

    //delete a user by id
    deleteUser: update([text], Result(User, AplicationError), (id) => {
        const userOpt = users.get(Principal.fromText(id));

        if ('None' in userOpt) {
            return Err({
                AppRuntimeError: id
            });
        }

        if(userOpt.Some.role.toLocaleLowerCase() === 'propietario'){
            owners.remove(Principal.fromText(id));
        }
            else{
                customers.remove(Principal.fromText(id));
        }   

        const user = userOpt.Some;
        users.remove(user.id);
        return Ok(user);
    }),

    //Update a user by id
    updateUser: update(
        [text, text, text, text, text],
        Result(User, AplicationError),
        (userId, email, phone, role, address) => {
            const userOpt = users.get(Principal.fromText(userId));

            if ('None' in userOpt) {
                return Err({
                    AppRuntimeError: userId
                });
            }
            const newUser: User = {
                id:Principal.fromText(userId),
                email,
                phone,
                role
            };

            if(role.toLocaleLowerCase() === 'propietario'){
                const owner = owners.get(Principal.fromText(userId));
                if(owner.Some){
                    owners.remove(Principal.fromText(userId));
                    owners.insert(Principal.fromText(userId), {
                        id: Principal.fromText(userId),
                        bookings: owner.Some.bookings,
                        address
                    });
                }
            }
                else{
                    const customer = customers.get(Principal.fromText(userId));
                    if(customer.Some){
                        customers.remove(Principal.fromText(userId));
                        customers.insert(Principal.fromText(userId), {
                            id: Principal.fromText(userId),
                            vehicle: customer.Some.vehicle,
                            address
                        });
                }
            }

            users.remove(Principal.fromText(userId))
            users.insert(Principal.fromText(userId), newUser);

            return Ok(newUser);
        }
    ),

    //Create a new booking for a owner
    createBooking: update([text,int64, bool, float64 ], Result(Booking, AplicationError), (idOwner,size, available, fee_per_hour) => {
        const owner = owners.get(Principal.fromText(idOwner));

        if('None' in owner){
            return Err({
                AppRuntimeError: 'User is not an owner'
            });
        }
        
        const bookingId = generateId();
        const booking: Booking = {
            id: bookingId,
            size,
            available,
            fee_per_hour,
        };

        const ownerFound = owner.Some
        ownerFound.bookings.push(booking);
        bookings.insert(booking.id, booking);
        return Ok(booking);
}),
    //assign a booking to a customer
    bookingAssignment: update([text, text, text, text, text], Result(Booking, AplicationError), (idBooking, idCustomer, idOwner, initial_date, final_date) => {
        const booking = bookings.get(Principal.fromText(idBooking));
        const customer = customers.get(Principal.fromText(idCustomer));
        const owner = owners.get(Principal.fromText(idOwner));

        if('None' in booking){
            return Err({
                AppRuntimeError: 'Booking not found'
            });
        }

        if('None' in customer){
            return Err({
                AppRuntimeError: 'Customer not found'
            });
        }

        if('None' in owner){
            return Err({
                AppRuntimeError: 'Owner not found'
            });
        }
        const bookingFound = booking.Some;
        const customerFound = customer.Some;
        const ownerFound = owner.Some;

        if(bookingFound.available === false){
            return Err({
                AppRuntimeError: 'Booking not available'
            });
        }
        
        if(bookingFound.size > customerFound.vehicle.size){
            return Err({
                AppRuntimeError: 'Vehicle size not compatible'
            });
        }

        bookingFound.available = false;
        const tracking: Tracking= {
            id: generateId(),
            booking: bookingFound,
            customer: customerFound,
            owner: ownerFound,
            initialDate: initial_date,
            finalDate: final_date
        }

        trackings.insert(tracking.id, tracking);

        return Ok(bookingFound);
    }
),

    //change booking state or fee_per_hour
    changeBookingState: update([text, text, bool, float64], Result(Booking, AplicationError), (idBooking, userId, available, fee_per_hour) => {
        const booking = bookings.get(Principal.fromText(idBooking));
        const userFound = users.get(Principal.fromText(userId)).Some;

        if(userFound?.role.toLocaleLowerCase() !== 'propietario'){
            return Err({
                AppRuntimeError: 'User is not an owner'
            });
        }
        const ownerFound = owners.get(Principal.fromText(userId)).Some;

        if('None' in booking){
            return Err({
                AppRuntimeError: 'Booking not found'
            });
        }

        const bookingFound = booking.Some;
        bookingFound.available = available;
        bookingFound.fee_per_hour = fee_per_hour;

        bookings.remove(Principal.fromText(idBooking));
        bookings.insert(Principal.fromText(idBooking), bookingFound);

        ownerFound?.bookings.forEach((element, index) => {
            if(element.id === bookingFound.id){
                ownerFound.bookings[index] = bookingFound;
            }
        }
        );
        
        if(ownerFound){
            owners.remove(Principal.fromText(userId));
            owners.insert(Principal.fromText(userId), ownerFound);
        
        }
        return Ok(bookingFound);
    }),


})