import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(18)
    expect(awesomeUser.hair).toBe(9)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        }
    }
    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(user.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['caa', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherHouse(user, 40)

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(40)
})

test('add new books to user', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, ['ts', 'API'])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('API')
    expect(userCopy.books.length).toBe(6)
})

test('update js to ts', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('add new company', () => {
    let user: UserWithLaptop & WithCompaniesType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}],

    }
    const userCopy = addCompany(user, {id: 3, title: 'Bro'})

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].title).toBe('Bro')
    expect(userCopy.companies[2].id).toBe(3)
})

test('update company', () => {
    let user: UserWithLaptop & WithCompaniesType = {
        name: 'Dima',
        hair: 18,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        companies: [{id: 1, title: 'ЕПАМ'}, {id: 2, title: 'It-incubator'}],

    }
    const userCopy = updateCompany(user, 1, 'Epam') as UserWithLaptop & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')
    expect(userCopy.companies[0].id).toBe(1)
})

test('update companies', () => {
    let companies = {
        'Dima': [{id: 1, title: 'ЕПАМ'}, {id: 2, title: 'It-incubator'}],
        'Artem': [{id: 2, title: 'It-incubator'}]
    }
    const copy = updateCompany2(companies, 'Dima', 1, 'Epam')
    expect(copy['Dima']).not.toBe(companies['Dima'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dima'][0].title).toBe('Epam')

})