function getRandomNumbers(qty) {
    const rNumbs = {}
    console.log(`  >> Start to count`);
    for(let i=0; i !== qty; i++ ) { 
        let newNumb = Math.floor(Math.random() * 1000) + 1;
        rNumbs[newNumb] = rNumbs[newNumb] ? rNumbs[newNumb]+1 : 1;
    }
    console.log('  >> Count finished');
    // console.log('  >> rNumbs: ', rNumbs);
    return rNumbs;
}

process.on('message', ( msg ) => {
    console.log(` >>> Forked process STARTED`);
    const qty = parseInt(msg, 10);
    const rNumbers = getRandomNumbers(qty);
    console.log('  >> Quantity of requested numbers:', qty);
    // const rNumbers = JSON.stringify(getRandomNumbers(qty));
    process.send(rNumbers);
    console.log(' >>> Forked process FINISHED');
});