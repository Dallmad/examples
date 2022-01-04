import {CityType} from "../02/02";
import {addMoneyToBudget, createMess, repairHouse, staffIncr, staffRep} from "./03";

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
            {
                type: 'Hospital', budget: 200000, staffCount: 200,
                address: {
                    number: 10,
                    street: {
                        title: 'Central str'
                    }
                }
            },
            {
                type: 'Fire-station', budget: 500000, staffCount: 1000,
                address: {
                    number: 11,
                    street: {
                        title: 'South str'
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for Fire-station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repared', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    staffIncr(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be repaired', () => {
    staffRep(city.governmentBuildings[1], 50);
    expect(city.governmentBuildings[1].staffCount).toBe(1050)
})

test('Greeting should be correct for city', () => {
    expect(createMess(city)).toBe('Hello New York citizens.')
})