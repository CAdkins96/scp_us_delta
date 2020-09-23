export const agents = [
    {
        id: '001',
        fullName: 'Agent Leeds',
        abvName: 'Leeds',
        supervisor: 'REDACTED',
        classification: 'REDACTED',
        clearance: 'REDACTED',
        species: 'REDACTED',
        taskforce: 'Cryptid Rogue',
        path: '/AgentLeeds',
        navPlacement: 'notLast'
    },
    {
        id: '033',
        fullName: 'Alexander Grant',
        abvName: 'Alex',
        supervisor: 'Agent Leeds',
        classification: 'Expert',
        clearance: 'Cryptid',
        species: 'Human',
        taskforce: 'Cryptid Rogue',
        path: '/AgentAlexander',
        navPlacement: 'notLast'
    },
    {
        id: '034',
        fullName: 'Axel Rose',
        abvName: 'Axel',
        supervisor: 'Agent Leeds',
        classification: 'Wronged',
        clearance: 'Cryptid',
        species: 'Human',
        taskforce: 'Cryptid Rogue',
        path: '/AgentRose',
        navPlacement: 'notLast'
    },
    {
        id: '035',
        fullName: 'Eugene Fletcher',
        abvName: 'Eugene',
        supervisor: 'Agent Leeds',
        classification: 'Flake',
        clearance: 'Cryptid',
        species: 'Human',
        taskforce: 'Cryptid Rogue',
        path: '/AgentFletcher',
        navPlacement: 'notLast'
    },
    {
        id: '036',
        fullName: 'Peter',
        abvName: 'Peter',
        supervisor: 'Agent Leeds',
        classification: 'Mundane',
        clearance: 'Cryptid',
        species: 'Human',
        taskforce: 'Cryptid Rogue',
        path: '/AgentPeter',
        navPlacement: 'last'
    }
];

export const cryptids = [
    {
        name: '',
        powers: [],
        abilities: [],
        weaknesses: [],
    }
];

export const scps = [
    {
        id: '0',
        idNum: '001',
        name: '3',
        class: 'Safe',
        path: '/001'

    },
    {
        id: '1',
        idNum: '002',
        name: '3',
        class: 'Safe',
        path: '/002'

    },
    {
        id: '2',
        idNum: '003',
        name: '3',
        class: 'Keter',
        path: '/003'

    },
    {
        id: '3',
        idNum: '004',
        name: '3',
        class: 'Euclid',
        path: '/004'

    },
];

export const scpClasses = [
    {
        id: '0',
        class: 'Safe',
        path: '/Safe',
        newClass: 'App Safe',
        navPlacement: 'notLast'
    }, 
    {
        id: '1',
        class: 'Euclid',
        path: '/Euclid',
        newClass: 'App Euclid',
        navPlacement: 'notLast'
    },
    {
        id: '2',
        class: 'Keter',
        path: '/Keter',
        newClass: 'App Keter',
        navPlacement: 'notLast'
    },
    {
        id: '3',
        class: 'Thaumiel',
        path: '/Thaumiel',
        newClass: 'App Thaumiel',
        navPlacement: 'notLast'
    },
    {
        id: '4',
        class: 'Apollyon',
        path: '/Apollyon',
        newClass: 'App Apollyon',
        navPlacement: 'last'
    }
]