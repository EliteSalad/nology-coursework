//matric - multidimentional array 
const table = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let row = 0; row < table.length; row++)
{
    console.log(table[row]);
    for (let collum = 0; collum < table.length; collum++) {
         //console.log(table[row][collum]);
         console.log(table[collum][row]);
    };
}

const grid = [
    ["x","0","x"],
    ["x","0","x"],
    ["0","x","x"],
];

console.log(grid);

for (let row = 0; row < grid.length; row++)
{
    const rowString = grid[row].join(""); 
    let collumString = "";
    for (let collum = 0; collum < grid.length; collum++) {
        collumString+= grid[collum][row]
    };

    console.log(row, rowString, collumString);
}
