// Format Data 
// {
//     name  : "Switch-Name",
//     ipAddress :"xxx.xxx.xxx.xxx",
//     switchName:"Switch Name Device",
//     error:boolean (default false)
// },

// If change run script again
// node "C:/your/path/folder/index.js"


const networkData = [
        {
            name: "DPSCYSW01-IPTV-MB-SR",
            ipAddress: "192.168.99.254",
            switchDevice: "Aruba 6100 24G 4SFP Switch",
            error: false 
        },
    {
        name: "DPSCYSW01-IPTV-GF-Wing1",
        ipAddress: "192.168.99.100",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
    {
        name: "DPSCYSW01-IPTV-1-Wing1",
        ipAddress: "192.168.99.101",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
    {
        name: "DPSCYSW01-IPTV-2-Wing1",
        ipAddress: "192.168.99.102",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
    {
        name: "DPSCYSW01-IPTV-3-Wing1",
        ipAddress: "192.168.99.103",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
        {
            name: "DPSCYSW01-IPTV-GF-Wing3",
            ipAddress: "192.168.99.104",
            switchDevice: "Aruba 6100 24G 4SFP Switch",
            error: false 
        },
        {
            name: "DPSCYSW01-IPTV-1-Wing3",
            ipAddress: "192.168.99.105",
            switchDevice: "Aruba 6100 24G 4SFP Switch",
            error: false 
        },
        {
            name: "DPSCYSW01-IPTV-2-Wing3",
            ipAddress: "192.168.99.106",
            switchDevice: "Aruba 6100 24G 4SFP Switch",
            error: false 
        },
    {
        name: "DPSCYSW01-IPTV-GF-Wing4",
        ipAddress: "192.168.99.107",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
    {
        name: "DPSCYSW01-IPTV-1-Wing4",
        ipAddress: "192.168.99.108",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
    {
        name: "DPSCYSW01-IPTV-2-Wing4",
        ipAddress: "192.168.99.109",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
    {
        name: "DPSCYSW01-IPTV-3-Wing4",
        ipAddress: "192.168.99.110",
        switchDevice: "Aruba 6100 24G 4SFP Switch",
        error: false 
    },
        {
            name: "DPSCYSW01-IPTV-GF-KidsClub",
            ipAddress: "192.168.99.111",
            switchDevice: "Aruba 6100 24G 4SFP Switch",
            error: false 
        },
];

// Template
// const networkData = [
//         {
//             name: "Network Ip",
//             ipAddress: "8.8.8.8",
//             switchDevice: "Network",
//             error: false 
//         },
// ]
module.exports = networkData