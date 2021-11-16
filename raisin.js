// function raisinAlarm(cookie) {
//     for (let i = 0; i < cookie.length; i++) {
//         if (cookie[i] === "raisin") {
//             return console.log("Raisin alert!");
//         }
//     }
//     return console.log('All good!');
// }

const raisinAlarm = (cookie) => {
    if (cookie.find(x => x === 'raisin')) {
        return console.log("Raisin alert!");
    } else {
        return console.log('All good!');
    }
}
raisinAlarm(['chocolate', 'raisin', 'chocolate', 'chocolate',]);
raisinAlarm(['chocolate', 'chocolate', 'chocolate', 'chocolate',]);
raisinAlarm(['chocolate', 'raisin', 'chocolate', 'chocolate',]);
raisinAlarm([]);
