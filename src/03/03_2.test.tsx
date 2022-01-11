import {CityType} from "../02/02";
import {
    createMessages,
    getListOfStreetsTitles,
    getStreetsTitlesOfGovernmentsBuildings,
} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildeAt: 2012, repaired: false, address: {
                    number: 100, street: {title: 'White street'}
                }
            },
            {
                buildeAt: 2008, repaired: false, address: {
                    number: 100, street: {title: 'Happy street'}
                }
            },
            {
                buildeAt: 2020, repaired: false, address: {
                    number: 101, street: {title: 'Happy street'}
                }
            }],
        governmentBuildings: [
            {type: 'Hospital', budget: 200000, staffCount: 200,
                address: {number:10,
                    street: {
                        title: 'Central str'}
                }
            },
            {type: 'Fire-station', budget: 500000, staffCount: 1000,
                address: {number:11,
                    street: {
                        title: 'South str'}
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('list of streets titles of governments buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings);

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central str')
    expect(streetsNames[1]).toBe('South str')
})

test('list of streets titles',()=> {
let streetsTitles = getListOfStreetsTitles(
    city.houses);

    expect(streetsTitles.length).toBe(3)
    expect(streetsTitles[0]).toBe('White street')
    expect(streetsTitles[1]).toBe('Happy street')
    expect(streetsTitles[1]).toBe('Happy street')
})

test('create greeting messages for streets',()=>{
    let messages = createMessages(city.houses);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})