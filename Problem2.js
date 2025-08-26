// Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
function odd_Func(a) {
    let oddNum = [];
    for(let i = 0; i < a; i++){
        oddNum.push(2 * i +1)
    }
    console.log(oddNum.join(", "));
    
}

odd_Func(1);
odd_Func(2);
odd_Func(3);
odd_Func(4);
odd_Func(5);
odd_Func(6);