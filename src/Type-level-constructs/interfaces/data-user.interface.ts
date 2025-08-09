interface HouseLocation {
    address  : string;
    country : string;
}

interface Contact {
    phoneNumber : number;
    email       : string;
}

interface FamilyMember {
    relationship : string;
    fullName     : string;
}


export interface User {
    name           : string;
    lastname       : string;
    contact        : Contact;
    familyMember   : FamilyMember[];
    houseLocations : HouseLocation[];
}

const userMelo : Readonly<User> = {
    name : 'roger',
    lastname : 'jack',
    contact : {
        phoneNumber : 123455,
        email : 'roger123@gmail.com',
    },
    familyMember : [
        {
            relationship : 'mother',
            fullName : 'mother'
        }
    ],
    houseLocations : [
        {
            address : 'peru - city',
            country : 'peru - peru',
        }
    ]
}

console.log(userMelo)