let division = (integer) => {
    let newArray = [];
    for (let i=1; i<=integer; i++) {
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
            newArray.push(i);
        }

        if (i % 2 === 0) {
            newArray.push('yu');
            if (i % 5 === 0) {
                newArray[newArray.length - 1] = 'yu-oh';
            }

            if (i % 3 === 0) {
                newArray[newArray.length-1] = 'yu-gi';
                if (i % 5 === 0) {
                    newArray[newArray.length-1] = 'yu-gi-oh';
                }

            }
        }

        if (i % 3 === 0) {
            newArray.push('gi');
            if (i % 5 === 0) {
                newArray[newArray.length-1] = 'gi-oh';
            }
        }

        if (i % 2 === 0 && i % 5 === 0) { 
        } 
        else {
           if (i % 3 === 0 && i % 5 === 0) {
           }
           else {
               if (i % 5 === 0) {
                   newArray.push('oh');
               }
           }
         
        }

    }

    return newArray;
}
    division(100);

    division(10);