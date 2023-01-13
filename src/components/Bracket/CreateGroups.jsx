const groupA = [
  {
    name: "NED",
    gp: 3,
    wins: 2,
    draws: 1,
    loses: 0,
    gd: 4,
    pts: 7,
    rank: 1,
    group: "Group A",
  },
  {
    name: "SEN",
    gp: 3,
    wins: 2,
    draws: 0,
    loses: 1,
    gd: 1,
    pts: 6,
    rank: 2,
  },
  {
    name: "ECU",
    gp: 3,
    wins: 1,
    draws: 1,
    loses: 1,
    gd: 1,
    pts: 4,
    rank: 3,
  },
  {
    name: "QAT",
    gp: 3,
    wins: 0,
    draws: 0,
    loses: 3,
    gd: -6,
    pts: 0,
    rank: 4,
  },
];


const groupB = [
    {
        "name": "ENG",
        "gp": 3,
        "wins": 2,
        "draws": 1,
        "loses": 0,
        "gd": 7,
        "pts": 7,
        "rank": 1,
        "group": "Group B"
    },
    {
        "name": "USA",
        "gp": 3,
        "wins": 1,
        "draws": 2,
        "loses": 0,
        "gd": 1,
        "pts": 5,
        "rank": 2
    },
    {
        "name": "IRN",
        "gp": 3,
        "wins": 1,
        "draws": 0,
        "loses": 2,
        "gd": -3,
        "pts": 3,
        "rank": 3
    },
    {
        "name": "WAL",
        "gp": 3,
        "wins": 0,
        "draws": 1,
        "loses": 2,
        "gd": -5,
        "pts": 1,
        "rank": 4
    }
]

const groupC = [
    {
        "name": "ARG",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": 3,
        "pts": 6,
        "rank": 1,
        "group": "Group C"
    },
    {
        "name": "POL",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 0,
        "pts": 4,
        "rank": 2
    },
    {
        "name": "MEX",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": -1,
        "pts": 4,
        "rank": 3
    },
    {
        "name": "KSA",
        "gp": 3,
        "wins": 1,
        "draws": 0,
        "loses": 2,
        "gd": -2,
        "pts": 3,
        "rank": 4
    }
]

const groupD = [
    {
        "name": "FRA",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": 3,
        "pts": 6,
        "rank": 1,
        "group": "Group D"
    },
    {
        "name": "AUS",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": -1,
        "pts": 6,
        "rank": 2
    },
    {
        "name": "TUN",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 0,
        "pts": 4,
        "rank": 3
    },
    {
        "name": "DEN",
        "gp": 3,
        "wins": 0,
        "draws": 1,
        "loses": 2,
        "gd": -2,
        "pts": 1,
        "rank": 4
    }
]

const groupE = [
    {
        "name": "JPN",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": 1,
        "pts": 6,
        "rank": 1,
        "group": "Group E"
    },
    {
        "name": "ESP",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 6,
        "pts": 4,
        "rank": 2
    },
    {
        "name": "GER",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 1,
        "pts": 4,
        "rank": 3
    },
    {
        "name": "CRC",
        "gp": 3,
        "wins": 1,
        "draws": 0,
        "loses": 2,
        "gd": -8,
        "pts": 3,
        "rank": 4
    }
]

const groupF = [
    {
        "name": "MAR",
        "gp": 3,
        "wins": 2,
        "draws": 1,
        "loses": 0,
        "gd": 3,
        "pts": 7,
        "rank": 1,
        "group": "Group E"
    },
    {
        "name": "CRO",
        "gp": 3,
        "wins": 1,
        "draws": 2,
        "loses": 0,
        "gd": 3,
        "pts": 5,
        "rank": 2
    },
    {
        "name": "BEL",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": -1,
        "pts": 4,
        "rank": 3
    },
    {
        "name": "CAN",
        "gp": 3,
        "wins": 0,
        "draws": 0,
        "loses": 3,
        "gd": -5,
        "pts": 0,
        "rank": 4
    }
]

const groupG = [
    {
        "name": "BRA",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": 2,
        "pts": 6,
        "rank": 1,
        "group": "Group G"
    },
    {
        "name": "SUI",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": 1,
        "pts": 6,
        "rank": 2
    },
    {
        "name": "CMR",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 0,
        "pts": 4,
        "rank": 3
    },
    {
        "name": "SRB",
        "gp": 3,
        "wins": 0,
        "draws": 1,
        "loses": 2,
        "gd": -3,
        "pts": 1,
        "rank": 4
    }
]

const groupH = [
    {
        "name": "POR",
        "gp": 3,
        "wins": 2,
        "draws": 0,
        "loses": 1,
        "gd": 2,
        "pts": 6,
        "rank": 1,
        "group": "Group H"
    },
    {
        "name": "KOR",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 0,
        "pts": 4,
        "rank": 2
    },
    {
        "name": "URU",
        "gp": 3,
        "wins": 1,
        "draws": 1,
        "loses": 1,
        "gd": 0,
        "pts": 4,
        "rank": 3
    },
    {
        "name": "GHA",
        "gp": 3,
        "wins": 1,
        "draws": 0,
        "loses": 2,
        "gd": -2,
        "pts": 3,
        "rank": 4
    }
]

export { groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH}
