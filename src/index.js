module.exports = function toReadable (number) {
    let str;
    let str1 = '';
    let str2 = '';
    let str3 = '';
    let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    let ones_hun = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number >= 100){
        let i = Math.floor(number / 100)
        str1 = ones_hun[i] + ' hundred ';
        number = number % 100;
    }
    if (number >= 10 && number < 20){
        str2 = teens[Math.floor(number % 10)];
    }else {
        str2 = tens[Math.floor(number / 10)];
        number = number % 10;
    if (number < 10){
        str3 = ones[number];
        }
    }
    str = str1 + str2 + str3;
    str = str.replace(/ +/g, ' ').trim();
    if (str == '') str = 'zero';
    return str;
}
