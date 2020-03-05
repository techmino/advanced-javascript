// // const output = [];



// const students = [{
//         id: 21,
//         name: "OMar Sunny"
//     },
//     {
//         id: 31,
//         name: "Manna"
//     },
//     {
//         id: 41,
//         name: "Moyuri"
//     },
//     {
//         id: 41,
//         name: "Deep Jol"
//     }
// ]

// const output = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }

// console.log(output);

//pondit styele by map

const students = [{
            id: 21,
            name: "OMar Sunny"
        },
        {
            id: 31,
            name: "Manna"
        },
        {
            id: 41,
            name: "Moyuri"
        },
        {
            id: 41,
            name: "Deep Jol"
        }
    ]

    const names = students.map(s => s.name);
    const ids = students.map(s => s.id);
    const bigger = students.filter(s => s.id > 30);
    const biggerOne = students.find(s => s.id > 30);

    console.log (names);
    console.log (ids);
    console.log (bigger);
    console.log (biggerOne);



