export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = {
    books: string[]
}
export type CompanyType = {
    id: number
    title: string
};
export type WithCompaniesType = {
    companies: CompanyType[]
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair/power
    return copy
}

export function moveUser(u: UserWithLaptop, city: string) {
    return {
        ...u, address: {
            ...u.address,
            city: city
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptop & UserWithBooksType, house: number) {
    return {
        ...u, address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptop, title: string) {
    return {
        ...u, laptop: {
            ...u.laptop,
            title: title
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptop & UserWithBooksType, newBooks: string[]) {
    return {
        ...u, books: [...u.books, ...newBooks]
    }
}

export const updateBook = (u: UserWithLaptop & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => ({
    ...u,
    books: u.books.map(m => m === oldBook ? newBook : m)
}) /// без ретурна,в виде стрелочной функции

export const removeBook = (u: UserWithLaptop & UserWithBooksType,
                           removeBook: string) => ({
    ...u,
    books: u.books.filter(f => f !== removeBook)
})

export const addCompany = (u: UserWithLaptop & WithCompaniesType,
                           newCompany: { id: number, title: string }) => ({
    ...u,
    companies: [...u.companies, newCompany]
})

export const updateCompany = (u: WithCompaniesType,
                              id: number ,
                              newCompany: string ) => ({
    ...u,
    companies: u.companies.map(m => m.id===id ? {...m,title:newCompany}:m)
})

export const updateCompany2 = (companies:{[key:string]:CompanyType[]},
                               userName:string,
                               companyID:number,
                               newTitle:string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(m => m.id===companyID ? {...m, title:newTitle}: m)
    return companyCopy
}