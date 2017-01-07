function getRegionalIndicatorForCharacter (character) {
  return `:regional_indicator_${character}:`;
}

function getEmojiForNonAlphaCharacter (character) {
  switch (character.charCodeAt(0)) {
    case 32: // space
      return ':black_small_square:';
    case 33: // exclamation
      return ':grey_exclamation:';
    case 34: // double quotes
      return ':v:';
    case 63: //question mark
      return ':grey_question:';
    case 46: // period
      return ':large_blue_circle:';
    case 48:
      return ':zero:'
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
    default:
      return ':large_blue_diamond:';
  }
}

export function txt2regiletter (inputString) {
  let lowercaseStringArray = inputString.toLowerCase().split('');

  lowercaseStringArray.forEach(function(character, index) {
    let charCode = character.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      lowercaseStringArray[index] = getRegionalIndicatorForCharacter(character);
    }
    else {
      lowercaseStringArray[index] = getEmojiForNonAlphaCharacter(character);
    }
  });

  return lowercaseStringArray.join(' ');
}
