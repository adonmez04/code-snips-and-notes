let result = 0;

for (let i = 5; i <= 1000; i += 5) {
    console.log(i);

    // To see the iteration number on the console
    let count = 0;
    count++;
    result += count;
    console.log("The iteration number is " + result);
}
