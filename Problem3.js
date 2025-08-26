// Problem-3: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]

function multiple_Fun(value) {
    let multiple = {};
    for(let i = 1; i <= 9; i++){
        multiple[i] = 0
        for(let j = 0; j < value.length; j++){
            if(value[j] % i === 0) multiple[i]++
        }
    }

    console.log(multiple);
    

}

multiple_Fun([1,2,8,9,12,46,76,82,15,20,30])
