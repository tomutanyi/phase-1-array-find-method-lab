// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(record){
    for (const i of record){
        if (i.result == 'W'){
            return i.year
        }
    }
}