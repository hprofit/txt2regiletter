let getRegionalIndicatorForCharacter = function (character) {
    return `:regional_indicator_${character}:`;
};

let getEmojiForNonAlphaCharacter = function (character) {
    switch (character.charCodeAt(0)) {
        case 32: // space
            return '▪️';
        case 33: // exclamation
            return '❕';
        case 34: // double quotes
            return ':v:';
        case 63: //question mark
            return '❔';
        case 46: // period
            return '🔵';
        case 48:
            return ':zero:';
        case 49:
            return ':one:';
        case 50:
            return ':two:';
        case 51:
            return ':three:';
        case 52:
            return ':four:';
        case 53:
            return ':five:';
        case 54:
            return ':six:';
        case 55:
            return ':seven:';
        case 56:
            return ':eight:';
        case 57:
            return ':nine:';
        case 97:
            return '🇦';
        case 98:
            return '🇧';
        case 99:
            return '🇨';
        case 100:
            return '🇩';
        case 101:
            return '🇪';
        case 102:
            return '🇫';
        case 103:
            return '🇬';
        case 104:
            return '🇭';
        case 105:
            return '🇮';
        case 106:
            return '🇯';
        case 107:
            return '🇰';
        case 108:
            return '🇱';
        case 109:
            return '🇲';
        case 110:
            return '🇳';
        case 111:
            return '🇴';
        case 112:
            return '🇵';
        case 113:
            return '🇶';
        case 114:
            return '🇷';
        case 115:
            return '🇸';
        case 116:
            return '🇹';
        case 117:
            return '🇺';
        case 118:
            return '🇻';
        case 119:
            return '🇼';
        case 120:
            return '🇽';
        case 121:
            return '🇾';
        case 122:
            return '🇿';
        default:
            return '🔷';
    }
};

export default function txt2regiletter(inputString) {
    let lowercaseStringArray = inputString.toLowerCase().split('');

    lowercaseStringArray.forEach(function (character, index) {
        let charCode = character.charCodeAt(0);
        //if (charCode >= 97 && charCode <= 122) {
        //    lowercaseStringArray[index] = getRegionalIndicatorForCharacter(character);
        //}
        //else {
        lowercaseStringArray[index] = getEmojiForNonAlphaCharacter(character);
        //}
    });

    return lowercaseStringArray.join(' ');
}
