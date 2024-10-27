const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // Split the input string into chunks of 10
    const chunks = expr.match(/.{1,10}/g);

    // Decode each chunk
    let decodedMessage = chunks.map(chunk => {
        if (chunk === '**********') {
            return ' '; // Represents a space
        }

        // Convert the chunk from binary-like format to Morse code
        let morseCode = chunk.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''); // ignore padding zeros

        // Lookup the Morse code in the MORSE_TABLE
        return MORSE_TABLE[morseCode] || '?'; // Return '?' for unrecognized Morse code
    }).join(''); // Join decoded letters/space into the final message

    return decodedMessage;
}

module.exports = {
    decode
}