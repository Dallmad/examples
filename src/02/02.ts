export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildeAt: number
    repaired: boolean
    address: AddressType
}
export type GvernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GvernmentBuildingsType>
    citizensNumber: number
}
