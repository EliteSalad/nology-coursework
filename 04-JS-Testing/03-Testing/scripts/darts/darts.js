export const finalScore = (x,y) =>{
    const distanceToDart = Math.sqrt((x*x)+(y*y));
    console.log(distanceToDart);

if(distanceToDart>=10)
            return 0;
if(distanceToDart>=5)
                return 5;
if(distanceToDart>=1)
                    return 1;
                    else
                    return 0;
}

console.log(finalScore(-9,9));