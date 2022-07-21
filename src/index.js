module.exports = function toReadable (number) {

    const oneToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const upToTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', '', '']
    const dozens = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety']
    const hundreds = ['hundred'];

    let dNumRound = Math.floor(number / 10);
    let daNum = dNumRound * 10;
    let cNumRound = Math.floor(number / 100);
    let lastWord = oneToTen[number - daNum];

    if (number <= 10) {
        return oneToTen[number];
    }

    if (number > 10 && number < 20) {
        return upToTwenty[number-upToTwenty.length];
    }

    if (number >= 20 && number <= 90 && number % 10 === 0) {
        return dozens[number/10];
    }

    if (number > 20 && number < 100) {
        return dozens[dNumRound] + ' ' + lastWord;
    }

    if (number >= 100 && number <= 1000) {
        if (dNumRound <= 10) {
            if ((number - daNum) !== 0) {
                return oneToTen[cNumRound] + ' ' + hundreds[0] + ' ' + lastWord;
            } else {
                return oneToTen[cNumRound] + ' ' + hundreds[0];
            }
        }

        if (dNumRound > 10) {
            let dozensPart = dozens[dNumRound - cNumRound * 10] + ' ';
            let upToTwentyPart = upToTwenty[(number - cNumRound * 100) - upToTwenty.length];
            let numResult;

            if ((number - daNum) === 0) {
                lastWord = '';
            }
            if ((dNumRound - cNumRound * 10) === 1 && (number - daNum) === 0) {
                upToTwentyPart = '';
                lastWord = '';
                dozensPart = oneToTen[oneToTen.length - 1]
            } else if ((dNumRound - cNumRound * 10) === 1) {
                dozensPart = '';
                lastWord = '';
            } else if ((dNumRound - cNumRound * 10) === 0) {
                upToTwentyPart = '';
                dozensPart = '';
            } else {
                upToTwentyPart = '';
            }

            numResult = oneToTen[cNumRound] + ' ' + hundreds[0] + ' ' + upToTwentyPart + dozensPart + lastWord;
            return numResult.trim();
        }
    } 
}


