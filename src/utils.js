const baseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function getCellId(rowIndex, cellIndex) {
    let cellXPosition = '';
    let position;
    let remaining = cellIndex;
    do {
        position = remaining % baseString.length;
        cellXPosition = baseString[position] + cellXPosition;
        remaining = Math.floor(remaining / baseString.length) - 1;
    } while (remaining >= 0);
    return `${cellXPosition}${rowIndex + 1}`;
}

export function sanitize(text) {
    if (text == null) return '';

    const str = String(text);

    const escaped = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return escaped.split('').filter(letter =>
        letter === '\x09' ||
        letter === '\x0A' ||
        letter === '\x0D' ||
        (letter >= '\x20' && letter <= '\uD7FF') ||
        (letter >= '\uE000' && letter <= '\uFFFD')
    ).join('');
}

export function timeoutPromised(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export function getNumberFormat(n) {
    const number = Math.abs(n);
    if (number.toString().length >= 11) {
        return 5;
    }
    if (number % 1 === 0) {
        return number >= 1000 ? 3 : 1;
    }
    return number >= 1000 ? 4 : 2;
}

export function getDateFormat() {
    return 6;
}
