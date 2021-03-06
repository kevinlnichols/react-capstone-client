export let Users = [
    {
        id: 1,
        firstName: 'Kevin',
        lastName: 'Nichols',
        username: 'knichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 9,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 8,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [2, 3],
    },
    {
        id: 2, firstName: 'Julie',
        lastName: 'Nichols',

        username: 'jnichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 8,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 7,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [1, 3],
    },
    {
        id: 3,

        firstName: 'Finn',
        lastName: 'Nichols',

        username: 'fnichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 1,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 1,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [1, 2],
    }
]

export let friends =
    [{
        id: 4,
        name: {
            firstName: 'John',
            lastName: 'Nichols'
        },
        username: 'jonichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 1,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 1,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [1, 2],
    },
    {
        id: 5,
        name: {
            firstName: 'Jane',
            lastName: 'Nichols'
        },
        username: 'janichols',
        password: '1234567890',
        ratings: [
            {
                restaurant: 'Tacos',
                rating: 1,
                category: 'Mexican'
            },
            {
                restaurant: 'Twenty Tap',
                rating: 1,
                category: 'American Pub'
            }
        ],
        groupId: [12345, 23456],
        friends: [1, 2],
    }]

