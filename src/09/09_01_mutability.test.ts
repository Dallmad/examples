function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string,
    age: number,
    address: { title: string }
}

test('big reference type test', () => {
    let user: UserType = {
        name: 'Dima',
        age: 34,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user)
    expect(user.age).toBe(35)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})
test('array test', () => {
    let users = [
        {
            name: 'Dima',
            age: 34
        }, {
            name: 'Dima2',
            age: 63
        }
    ]
    const admins = users
    admins.push({name: 'Bob', age: 10})
    expect(users[2]).toEqual({name: 'Bob', age: 10})

})
test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount++
    expect(adminsCount).toBe(101)
})
test('reference type test', () => {
    let user: UserType =
        {
            name: 'Dima',
            age: 34,
            address: {
                title: 'Minsk'
            }
        }

    // let addr = user.adress

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }
    user2.address.title = 'Kanary'
    expect(user.address.title).toBe('Kanary')
})
test('reference type array test', () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType =
        {
            name: 'Dima',
            age: 34,
            address: address
        }
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dzmitry'
    expect(users[0].name).toBe('Dzmitry')
    expect(user.name).toBe('Dzmitry')
})

test('sort array test', () => {
    const letters = ['a', 'c', 'b', 'e', 'd']
    passportist(letters)
    expect(letters).toEqual(['a', 'c', 'b', 'e', 'd'])
})
function passportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}
