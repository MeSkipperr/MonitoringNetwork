const cctv = [
    {
        name: "Network Video Recorder 1",
        ipAddress: "172.17.0.241",
        device: "Network Video Recorder",
        error: false,
        description: "",
    },
    {
        name: "Network Video Recorder 2",
        ipAddress: "172.17.0.242",
        device: "Network Video Recorder",
        error: false,
        description: "",
    },
    {
        name: "Network Video Recorder 3",
        ipAddress: "172.17.0.243",
        device: "Network Video Recorder",
        error: false,
        description: "",
    },
    {
        name: "Network Video Recorder 4",
        ipAddress: "172.17.0.244",
        device: "Network Video Recorder",
        error: false,
        description: "",
    },
    {
        name: "Network Video Recorder 5",
        ipAddress: "172.17.0.245",
        device: "Network Video Recorder",
        error: false,
        description: "",
    },
    {
        name: "CORE_CCTV",
        ipAddress: "172.17.0.230",
        device: "NBS3200-24SFP/8GT 4XS",
        error: false,
        description: "",
    },
    {
        name: "DS1_POS1",
        ipAddress: "172.17.0.238",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS2-PARKIR",
        ipAddress: "172.17.0.231",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS3_POS3",
        ipAddress: "172.17.0.236",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS4_KIDS_CLUB",
        ipAddress: "172.17.0.235",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS5_CONTROL ROOM",
        ipAddress: "172.17.0.234",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS6_SDB",
        ipAddress: "172.17.0.239",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS7_WING_1&2_1",
        ipAddress: "172.17.0.229",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS7_WING_1&2_2",
        ipAddress: "172.17.0.228",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS8_WING3",
        ipAddress: "172.17.0.237",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "DS9_WING_4&5",
        ipAddress: "172.17.0.233",
        device: "RG-ES218GC-P",
        error: false,
        description: "",
    },
    {
        name: "C-01",
        ipAddress: "172.17.0.118",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 1,\nCoverage: C-01 Main Gate Entrance,\nDistribution: Outside Staircase (North Side - MB)"
    },
    {
        name: "C-02",
        ipAddress: "172.17.0.95",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 2,\nCoverage: C-02 Security Check,\nDistribution: Above security Post at Main Entrance (Right Side)"
    },
    {
        name: "C-03",
        ipAddress: "172.17.0.94",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 3,\nCoverage: C-03 Main Gate Exit,\nDistribution: Above security Post at Main Entrance (Left Side)"
    },
    {
        name: "C-04",
        ipAddress: "172.17.0.96",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 4,\nCoverage: C-04 Water Feature (Right Side),\nDistribution: Water Feature (Right Side)"
    },
    {
        name: "C-05",
        ipAddress: "172.17.0.120",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 5,\nCoverage: C-05 Ramp Lobby South Side,\nDistribution: Ramp Lobby South Side"
    },
    {
        name: "C-06",
        ipAddress: "172.17.0.119",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 6,\nCoverage: C-06 Ramp Lobby North Side,\nDistribution: Ramp Lobby North Side"
    },
    {
        name: "C-07",
        ipAddress: "172.17.0.93",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 7,\nCoverage: C-07 Water Feature (Left Side),\nDistribution: Water Feature (Left Side)"
    },
    {
        name: "C-08",
        ipAddress: "172.17.0.90",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 8,\nCoverage: C-08 Perimeter Beside Temple,\nDistribution: Eastern of Hotel's Temple"
    },
    {
        name: "C-09",
        ipAddress: "172.17.0.91",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 9,\nCoverage: C-09 Bali Tirta Car Park,\nDistribution: Northen of Main Enterance"
    },
    {
        name: "C-10",
        ipAddress: "172.17.0.101",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 10,\nCoverage: C-10 Guest Motor Park,\nDistribution: South East Cornier"
    },
    {
        name: "C-11",
        ipAddress: "172.17.0.97",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 11,\nCoverage: C-11 Guest Main Park 1,\nDistribution: Southern of main Entrance"
    },
    {
        name: "C-12",
        ipAddress: "172.17.0.98",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 12,\nCoverage: C-12 Guest Main Park 2,\nDistribution: Southern of main Entrance"
    },
    {
        name: "C-13",
        ipAddress: "172.17.0.100",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 13,\nCoverage: C-13 Perimeter Beside Novotel,\nDistribution: South East Cornier"
    },
    {
        name: "C-14",
        ipAddress: "172.17.0.99",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 14,\nCoverage: C-14 Assembly Point,\nDistribution: South East Cornier"
    },
    {
        name: "C-15",
        ipAddress: "172.17.0.104",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 15,\nCoverage: C-15 Balinese Gate Perimeter,\nDistribution: Fence Beside Novotel"
    },
    {
        name: "C-16",
        ipAddress: "172.17.0.105",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 16,\nCoverage: C-16 Perimeter Wing 5,\nDistribution: Fence Beside Novotel"
    },
    {
        name: "C-17",
        ipAddress: "172.17.0.86",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 17,\nCoverage: C-17 Gate ITDC Perimeter,\nDistribution: North East Corner"
    },
    {
        name: "C-18",
        ipAddress: "172.17.0.87",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 18,\nCoverage: C-18 Courtyard Lawn,\nDistribution: North East Corner"
    },
    {
        name: "C-19",
        ipAddress: "172.17.0.112",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 19,\nCoverage: C-19 Ulam Resto Perimeter,\nDistribution: Western of Associate Gate"
    },
    {
        name: "C-20",
        ipAddress: "172.17.0.110",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 20,\nCoverage: C-20 Associate Entrance Gate,\nDistribution: Southern of electricity (PLN Store Room)"
    },
    {
        name: "C-21",
        ipAddress: "172.17.0.111",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 21,\nCoverage: C-21 Associate Exit Gate,\nDistribution: Associate Gate"
    },
    {
        name: "C-22",
        ipAddress: "172.17.0.109",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 22,\nCoverage: C-22 POS3 Security Check,\nDistribution: Associate parking (Motor Bike)"
    },
    {
        name: "C-23",
        ipAddress: "172.17.0.113",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 23,\nCoverage: C-23 Mengiat Street Perimeter,\nDistribution: Eastern of Associate Gate (Pantai Mengiat Street)"
    },
    {
        name: "C-24",
        ipAddress: "172.17.0.108",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 24,\nCoverage: C-24 Staff Motor Park 1,\nDistribution: Associate parking (Motor Bike)"
    },
    {
        name: "C-25",
        ipAddress: "172.17.0.11",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 25,\nCoverage: C-25 Associate Entrance,\nDistribution: Associate Enterance (Outside)"
    },
    {
        name: "C-26",
        ipAddress: "172.17.0.106",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 26,\nCoverage: C-26 Staff Motor Park 2,\nDistribution: Associate parking (Motor Bike)"
    },
    {
        name: "C-27",
        ipAddress: "172.17.0.116",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 27,\nCoverage: C-27 Mini Golf Perimeter,\nDistribution: Northen Of The Building"
    },
    {
        name: "C-28",
        ipAddress: "172.17.0.103",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 28,\nCoverage: C-28 Perimeter Wing 2,\nDistribution: Main Parking (South Side)"
    },
    {
        name: "C-29",
        ipAddress: "172.17.0.107",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 29,\nCoverage: C-29 Kids Club Outdoor,\nDistribution: Swimming Pool infront of Kids Club"
    },
    {
        name: "C-30",
        ipAddress: "172.17.0.52",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR1,\nChannel: 30,\nCoverage: C-30 Kids Cub Indoor,\nDistribution: Reception Kids Club"
    },
    {
        name: "C-31",
        ipAddress: "172.17.0.134",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 1,\nCoverage: C-31 Portico Sec Check 1,\nDistribution: Pond Corridor"
    },
    {
        name: "C-32",
        ipAddress: "172.17.0.133",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 2,\nCoverage: C-32 Portico Sec Check 2,\nDistribution: Pond Corridor"
    },
    {
        name: "C-33",
        ipAddress: "172.17.0.135",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 3,\nCoverage: C-33 Bell Desk Counter,\nDistribution: Corridor to Hotel Lobby"
    },
    {
        name: "C-34",
        ipAddress: "172.17.0.132",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 4,\nCoverage: C-34 Portico Stair SPA,\nDistribution: Corridor Staircase (North side - MB)"
    },
    {
        name: "C-35",
        ipAddress: "172.17.0.130",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 5,\nCoverage: C-35 Corr Portico To Lobby 1,\nDistribution: Pond Corridor In  The Lobby"
    },
    {
        name: "C-36",
        ipAddress: "172.17.0.129",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 6,\nCoverage: C-36 Landing Lift Luggage Store,\nDistribution: Luggage Room Coridor"
    },
    {
        name: "C-37",
        ipAddress: "172.17.0.137",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 7,\nCoverage: C-37 Corr Portico To Lobby 2,\nDistribution: Pond Corridor"
    },
    {
        name: "C-38",
        ipAddress: "172.17.0.117",
        device: "Outdoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 8,\nCoverage: C-38 Lobby Resort Miniature,\nDistribution: Lobby (Southern of Concierge Receiving)"
    },
    {
        name: "C-39",
        ipAddress: "172.17.0.122",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 9,\nCoverage: C-39 MOMO Bar,\nDistribution: Bussiness Centre Room"
    },
    {
        name: "C-40",
        ipAddress: "172.17.0.121",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 10,\nCoverage: C-40 Corr Lobby to Wing 1,\nDistribution: Lobby Lounge Corridor"
    },
    {
        name: "C-41",
        ipAddress: "172.17.0.123",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 11,\nCoverage: C-41 Front Desk 1,\nDistribution: Concierce Receiving"
    },
    {
        name: "C-42",
        ipAddress: "172.17.0.124",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 12,\nCoverage: C-42 Front Desk 2,\nDistribution: Concierce Receiving"
    },
    {
        name: "C-43",
        ipAddress: "172.17.0.128",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 13,\nCoverage: C-43 Money Changer Counter,\nDistribution: Concierce Enterance North Side"
    },
    {
        name: "C-44",
        ipAddress: "172.17.0.140",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 14,\nCoverage: C-44 Stair Front Of SPA,\nDistribution: Corridor Foyer"
    },
    {
        name: "C-45",
        ipAddress: "172.17.0.141",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 15,\nCoverage: C-45 SPA & GYM Entrance,\nDistribution: spa gym entrance"
    },
    {
        name: "C-46",
        ipAddress: "172.17.0.142",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 16,\nCoverage: C-46 SPA Reception,\nDistribution: In Front of Guest Elevator (MB -Building 2)"
    },
    {
        name: "C-47",
        ipAddress: "172.17.0.136",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 17,\nCoverage: C-47 Landing Lift SPA LV3,\nDistribution: Corridor Staircase (South side - MB)"
    },
    {
        name: "C-48",
        ipAddress: "172.17.0.143",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 18,\nCoverage: C-48 Landing Lift GYM LV2,\nDistribution: In Front of Staircase (South side - MB)"
    },
    {
        name: "C-49",
        ipAddress: "172.17.0.139",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 19,\nCoverage: C-49 Exit Door Spa LV3,\nDistribution: Corridor Behind GYM Area"
    },
    {
        name: "C-50",
        ipAddress: "172.17.0.138",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 20,\nCoverage: C-50 Executive Office,\nDistribution: Executive Office"
    },
    {
        name: "C-51",
        ipAddress: "172.17.0.125",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 21,\nCoverage: C-51 General Cashier,\nDistribution: Cashier Room"
    },
    {
        name: "C-52",
        ipAddress: "172.17.0.126",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 22,\nCoverage: C-52 Server Room,\nDistribution: PBX Control Room"
    },
    {
        name: "C-53",
        ipAddress: "172.17.0.127",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR2,\nChannel: 23,\nCoverage: C-53 SDB Room,\nDistribution: View Room (Temporary ENG & IT Story)"
    },
    {
        name: "C-54",
        ipAddress: "172.17.0.92",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 1,\nCoverage: C-54 Loading Dock,\nDistribution: loading dock entrance"
    },
    {
        name: "C-55",
        ipAddress: "172.17.0.115",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 2,\nCoverage: C-55 Loading Dock 2,\nDistribution: Locker Corridor"
    },
    {
        name: "C-56",
        ipAddress: "172.17.0.29",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 3,\nCoverage: C-56 Traffo Room Corridor,\nDistribution: Traffo Room Corridor"
    },
    {
        name: "C-57",
        ipAddress: "172.17.0.30",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 4,\nCoverage: C-57 In Front of LVMDB Room,\nDistribution: In Front of LVMDB Room (Western of Doe office)"
    },
    {
        name: "C-58",
        ipAddress: "172.17.0.26",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 5,\nCoverage: C-58 Associate Enterance Inside,\nDistribution: Associate Enterance (Inside)"
    },
    {
        name: "C-59",
        ipAddress: "172.17.0.27",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 6,\nCoverage: C-59 In Front Of Laundry,\nDistribution: In Front of Associate Clinic"
    },
    {
        name: "C-60",
        ipAddress: "172.17.0.34",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 7,\nCoverage: C-60 Kitchen Corridor to Wing 2,\nDistribution: Kitchen Corridor"
    },
    {
        name: "C-61",
        ipAddress: "172.17.0.33",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 8,\nCoverage: C-61 LIFT Kitchen,\nDistribution: Inside of Kitchen Elevator"
    },
    {
        name: "C-62",
        ipAddress: "172.17.0.131",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 9,\nCoverage: C-62 Corr Behind Palma,\nDistribution: belakang ballroom"
    },
    {
        name: "C-63",
        ipAddress: "172.17.0.22",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 10,\nCoverage: C-63 Corr Beside Palma,\nDistribution: Associate Corridor (Western of Palma Room)"
    },
    {
        name: "C-64",
        ipAddress: "172.17.0.23",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 11,\nCoverage: C-64 Corr BQT Preparation,\nDistribution: B O H Hallway (service Access)"
    },
    {
        name: "C-65",
        ipAddress: "172.17.0.24",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 12,\nCoverage: C-65 LIFT SPA,\nDistribution: Inside of Elevator (Western of Krisan Room)"
    },
    {
        name: "C-66",
        ipAddress: "172.17.0.25",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 13,\nCoverage: C-66 Corr Beside Krisan,\nDistribution: Associate Corridor (Western of Krisan Room)"
    },
    {
        name: "C-67",
        ipAddress: "172.17.0.12",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 14,\nCoverage: C-67 Corr Behind Krisan,\nDistribution: Corridor behind Krisan Room"
    },
    {
        name: "C-68",
        ipAddress: "172.17.0.20",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 15,\nCoverage: C-68 Lift Landing GF Wing 3,\nDistribution: Corridor Eastern of Palma Room"
    },
    {
        name: "C-69",
        ipAddress: "172.17.0.16",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 16,\nCoverage: C-69 In Front Of Palma,\nDistribution: In Front of Palma 2"
    },
    {
        name: "C-70",
        ipAddress: "172.17.0.17",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 17,\nCoverage: C-70 Access Palma to BOH,\nDistribution: In Front of Palma 1"
    },
    {
        name: "C-71",
        ipAddress: "172.17.0.14",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 18,\nCoverage: C-71 Corr Toilet Ballroom,\nDistribution: Corridor Eastern of Krisan 1"
    },
    {
        name: "C-72",
        ipAddress: "172.17.0.13",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 19,\nCoverage: C-72 Stair GF to SPA,\nDistribution: Corridor Eastern of  Krisan Room"
    },
    {
        name: "C-73",
        ipAddress: "172.17.0.88",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 20,\nCoverage: C-73 Courtyard Ballroom,\nDistribution: ballroom hall"
    },
    {
        name: "C-74",
        ipAddress: "172.17.0.15",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 21,\nCoverage: C-74 Access Krisan To BOH,\nDistribution: In front of Krisan3"
    },
    {
        name: "C-75",
        ipAddress: "172.17.0.31",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 22,\nCoverage: C-75 Momo Café,\nDistribution: Momo Café"
    },
    {
        name: "C-76",
        ipAddress: "172.17.0.32",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 23,\nCoverage: C-76 Momo Café Cashier,\nDistribution: Corridor Between Main Building & Building 1"
    },
    {
        name: "C-77",
        ipAddress: "172.17.0.28",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 24,\nCoverage: C-77 Momo Café PDR,\nDistribution: Loading Dock Corridor"
    },
    {
        name: "C-78",
        ipAddress: "172.17.0.19",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 25,\nCoverage: C-78 Momo Café Terrace,\nDistribution: Access BOH to Palma foyer"
    },
    {
        name: "C-79",
        ipAddress: "172.17.0.18",
        device: "Outdoor Camera (Fixed Type)",
        error: false,
        description: "Server: NVR3,\nChannel: 26,\nCoverage: C-79 Pump Room,\nDistribution: Pump Room"
    },
    {
        name: "C-80",
        ipAddress: "172.17.0.38",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 1,\nCoverage: C-80 LIFT 1 (Wing 1-2),\nDistribution: Inside of Elevator LP-01 Building 1&2"
    },
    {
        name: "C-81",
        ipAddress: "172.17.0.37",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 2,\nCoverage: C-81 Landing Lift 1 GF,\nDistribution: In Front of Elevator LP-01/Lobby Elevator Ground pointed to Lift and stair case"
    },
    {
        name: "C-82",
        ipAddress: "172.17.0.35",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 3,\nCoverage: C-82 Room 1008 - 1016,\nDistribution: In Front of Room 1006 & 1007 pointed to stair case"
    },
    {
        name: "C-83",
        ipAddress: "172.17.0.36",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 4,\nCoverage: C-83 Room 1010 - 1001,\nDistribution: In Front of Room 1008 & 1009 pointed to Elevator LP-01"
    },
    {
        name: "C-84",
        ipAddress: "172.17.0.41",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 5,\nCoverage: C-84 Landing Lift 1 Lv1,\nDistribution: In Front of Elevator LP-01/Lobby Elevator 1st floor pointed to Lift and stair case"
    },
    {
        name: "C-85",
        ipAddress: "172.17.0.39",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 6,\nCoverage: C-85 Room 1108 - 1116,\nDistribution: In Front of Room 1106 & 1107 pointed to stair case"
    },
    {
        name: "C-86",
        ipAddress: "172.17.0.40",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 7,\nCoverage: C-86 Room 1110 - 1101,\nDistribution: In Front of Room 1108 & 1109 pointed to Elevator LP-01"
    },
    {
        name: "C-87",
        ipAddress: "172.17.0.62",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 8,\nCoverage: C-87 Landing Lift 3 Lv2,\nDistribution: In Front of Elevator LP-03/Lobby Elevator 2nd floor pointed to Lift and stair case"
    },
    {
        name: "C-88",
        ipAddress: "172.17.0.46",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 9,\nCoverage: C-88 Room 2220 - 2214,\nDistribution: In Front of Room 2213 & 2214 pointed to Elevator LP-03"
    },
    {
        name: "C-89",
        ipAddress: "172.17.0.55",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 10,\nCoverage: C-89 Room 2214 - 2220,\nDistribution: Children's Play Ground"
    },
    {
        name: "C-90",
        ipAddress: "172.17.0.54",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 11,\nCoverage: C-90 Room 2212 - 2201,\nDistribution: Computer Kids Area"
    },
    {
        name: "C-91",
        ipAddress: "172.17.0.45",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 12,\nCoverage: C-91 Room 2201 - 2212,\nDistribution: In Front of Room 2211 & 2212 pointed to Elevator LP-01"
    },
    {
        name: "C-92",
        ipAddress: "172.17.0.44",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 13,\nCoverage: C-92 Landing Lift 1 Lv2,\nDistribution: In Front of Elevator LP-01/Lobby Elevator 2nd floor pointed to Lift and stair case"
    },
    {
        name: "C-93",
        ipAddress: "172.17.0.42",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 14,\nCoverage: C-93 Room 1208 - 1216,\nDistribution: In Front of Room 1206 & 1207 pointed to stair case"
    },
    {
        name: "C-94",
        ipAddress: "172.17.0.43",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 15,\nCoverage: C-94 Room 1210 - 1201,\nDistribution: In Front of Room 1208 & 1209 pointed to Elevator LP-01"
    },
    {
        name: "C-95",
        ipAddress: "172.17.0.64",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 16,\nCoverage: C-95 Landing Lift 3 Lv3,\nDistribution: In Front of Elevator LP-03/Lobby Elevator 3rd floor pointed to Lift and stair case"
    },
    {
        name: "C-96",
        ipAddress: "172.17.0.51",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 17,\nCoverage: C-96 Room 2320 - 2314,\nDistribution: In Front of Room 2313 & 2314 pointed to Elevator LP-03"
    },
    {
        name: "C-97",
        ipAddress: "172.17.0.53",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 18,\nCoverage: C-97 Room 2314 - 2320,\nDistribution: NAP Room"
    },
    {
        name: "C-98",
        ipAddress: "172.17.0.21",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 19,\nCoverage: C-98 Room 2312 - 2301,\nDistribution: Inside of Guest Elevator (Eastern of Palma Room)"
    },
    {
        name: "C-99",
        ipAddress: "172.17.0.50",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 20,\nCoverage: C-99 Room 2301 - 2312,\nDistribution: In Front of Room 2311 & 2312 pointed to Elevator LP-01"
    },
    {
        name: "C-100",
        ipAddress: "172.17.0.49",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 21,\nCoverage: C-100 Landing Lift 1 Lv3,\nDistribution: In Front of Elevator LP-01/Lobby Elevator 3rd floor pointed to Lift and stair case"
    },
    {
        name: "C-101",
        ipAddress: "172.17.0.47",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 22,\nCoverage: C-101 Room 1308 - 1316,\nDistribution: In Front of Room 1306 & 1307 pointed to stair case"
    },
    {
        name: "C-102",
        ipAddress: "172.17.0.48",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 23,\nCoverage: C-102 Room 1310 - 1301,\nDistribution: In Front of Room 1308 & 1309 pointed to Elevator LP-01"
    },
    {
        name: "C-103",
        ipAddress: "172.17.0.56",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 24,\nCoverage: C-103 GF Wing 3 to Car Park,\nDistribution: In Front of Elevator LP-03/Lobby Elevator Ground pointed to Lift and stair case"
    },
    {
        name: "C-104",
        ipAddress: "172.17.0.58",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 25,\nCoverage: C-104 Room 3008 - 3001,\nDistribution: In Front of Room 3007 & 3008 pointed to Elevator LP-03"
    },
    {
        name: "C-105",
        ipAddress: "172.17.0.60",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 26,\nCoverage: C-105 Landing Lift 3 Lv1,\nDistribution: In Front of Elevator LP-03/Lobby Elevator 1st floor pointed to Lift and stair case"
    },
    {
        name: "C-106",
        ipAddress: "172.17.0.61",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 27,\nCoverage: C-106 Room 3108 - 3101,\nDistribution: In Front of Room 3107 & 3108 pointed to Elevator LP-03"
    },
    {
        name: "C-107",
        ipAddress: "172.17.0.65",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 28,\nCoverage: C-107 Wing 3 Lv2 to SPA,\nDistribution: In Front of Room 3307 & 3308 pointed to Elevator LP-03"
    },
    {
        name: "C-108",
        ipAddress: "172.17.0.63",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 29,\nCoverage: C-108 Room 3208 - 3201,\nDistribution: In Front of Room 3207 & 3208 pointed to Elevator LP-03"
    },
    {
        name: "C-109",
        ipAddress: "172.17.0.57",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR4,\nChannel: 30,\nCoverage: C-109 LIFT 3 (Wing 3),\nDistribution: Inside of Elevator LP-03 Buliding 2&3"
    },
    {
        name: "C-110",
        ipAddress: "172.17.0.69",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 1,\nCoverage: C-110 LIFT 2 (Wing 4-5),\nDistribution: Inside of Elevator LP-02 Building 4&5"
    },
    {
        name: "C-111",
        ipAddress: "172.17.0.67",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 2,\nCoverage: C-111 Room 4010 - 4001,\nDistribution: In Front of Room 4009 & 4010 pointed to Elevator LP-02"
    },
    {
        name: "C-112",
        ipAddress: "172.17.0.66",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 3,\nCoverage: C-112 Room 4008 - 4016,\nDistribution: In Front of Room 4007 & 4008 pointed to Building 3"
    },
    {
        name: "C-113",
        ipAddress: "172.17.0.68",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 4,\nCoverage: C-113 Landing Lift 2 GF,\nDistribution: In Front of Elevator LP-02/Lobby Elevator Ground pointed to Lift and stair case"
    },
    {
        name: "C-114",
        ipAddress: "172.17.0.70",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 5,\nCoverage: C-114 Room 5010 - 5001 ,\nDistribution: In Front of Room 5009 & 5010 pointed to Stair Case"
    },
    {
        name: "C-115",
        ipAddress: "172.17.0.59",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 6,\nCoverage: C-115 Room 5008 - 5016,\nDistribution: In Front of Room 5007 & 5008 pointed to Elevator LP-02"
    },
    {
        name: "C-116",
        ipAddress: "172.17.0.72",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 7,\nCoverage: C-116 Room 4110 - 4101,\nDistribution: In Front of Room 4109 & 4110 pointed to Elevator LP-02"
    },
    {
        name: "C-117",
        ipAddress: "172.17.0.71",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 8,\nCoverage: C-117 Room 4108 - 4116,\nDistribution: In Front of Room 4107 & 4108 pointed to Building 3"
    },
    {
        name: "C-118",
        ipAddress: "172.17.0.73",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 9,\nCoverage: C-118 Landing Lift 2 Lv1,\nDistribution: In Front of Elevator LP-02/Lobby Elevator 1st floor pointed to Lift and stair case"
    },
    {
        name: "C-119",
        ipAddress: "172.17.0.75",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 10,\nCoverage: C-119 Room 5110 - 5101,\nDistribution: In Front of Room 5109 & 5110 pointed to Stair Case"
    },
    {
        name: "C-120",
        ipAddress: "172.17.0.74",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 11,\nCoverage: C-120 Room 5108 - 5116,\nDistribution: In Front of Room 5107 & 5108 pointed to Elevator LP-02"
    },
    {
        name: "C-121",
        ipAddress: "172.17.0.77",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 12,\nCoverage: C-121 Room 4210 - 4201,\nDistribution: In Front of Room 4209 & 4210 pointed to Elevator LP-02"
    },
    {
        name: "C-122",
        ipAddress: "172.17.0.76",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 13,\nCoverage: C-122 Room 4208 - 4216,\nDistribution: In Front of Room 4207 & 4208 pointed to Building 3"
    },
    {
        name: "C-123",
        ipAddress: "172.17.0.78",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 14,\nCoverage: C-123 Landing Lift 2 Lv2,\nDistribution: In Front of Elevator LP-02/Lobby Elevator 2nd floor pointed to Lift and stair case"
    },
    {
        name: "C-124",
        ipAddress: "172.17.0.80",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 15,\nCoverage: C-124 Room 5210 - 5201,\nDistribution: In Front of Room 5209 & 5210 pointed to Stair Case"
    },
    {
        name: "C-125",
        ipAddress: "172.17.0.79",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 16,\nCoverage: C-125 Room 5208 - 5216,\nDistribution: In Front of Room 5207 & 5208 pointed to Elevator LP-02"
    },
    {
        name: "C-126",
        ipAddress: "172.17.0.82",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 17,\nCoverage: C-126 Room 4310 - 4301,\nDistribution: In Front of Room 4309 & 4310 pointed to Elevator LP-02"
    },
    {
        name: "C-127",
        ipAddress: "172.17.0.81",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 18,\nCoverage: C-127 Room 4308 - 4316,\nDistribution: In Front of Room 4307 & 4308 pointed to Building 3"
    },
    {
        name: "C-128",
        ipAddress: "172.17.0.83",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 19,\nCoverage: C-128 Landing Lift 2 Lv3,\nDistribution: In Front of Elevator LP-02/Lobby Elevator 3rd floor pointed to Lift and stair case"
    },
    {
        name: "C-129",
        ipAddress: "172.17.0.85",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 20,\nCoverage: C-129 Room 5310 - 5301,\nDistribution: In Front of Room 5309 & 5310 pointed to Stair Case"
    },
    {
        name: "C-130",
        ipAddress: "172.17.0.84",
        device: "Indoor Camera (Dome Type)",
        error: false,
        description: "Server: NVR5,\nChannel: 21,\nCoverage: C-130 Room 5308 - 5316,\nDistribution: In Front of Room 5307 & 5308 pointed to Elevator LP-02"
    }
]

module.exports = cctv;