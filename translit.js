//utilits
function translit(str) {
  str = str.replace(/<br>/g , '_'); 
  // Символ, на который будут заменяться все спецсимволы
  var space = '';
  // Берем значение из нужного поля и переводим в нижний регистр
  var text = str.toLowerCase();

  // Массив для транслитерации
  var transl = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'sh',
    'ъ': space,
    'ы': 'y',
    'ь': space,
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
    ' ': '_',
    '`': space,
    '~': space,
    '!': space,
    '@': space,
    '#': space,
    '$': space,
    '%': space,
    '^': space,
    '&': space,
    '*': space,
    '(': space,
    ')': space,
    '-': space,
    '\=': space,
    '+': space,
    '[': space,
    ']': space,
    '\\': space,
    '|': space,
    '/': space,
    '.': space,
    ',': space,
    '{': space,
    '}': space,
    '\'': space,
    '"': space,
    ';': space,
    ':': space,
    '?': space,
    '<': space,
    '>': space,
    '№': space,
    '\t' : space,
    '\n' : '_'
  }

  var result = '';
  var curent_sim = '';

  for (let i = 0; i < text.length; i++) {
    // Если символ найден в массиве то меняем его
    if (transl[text[i]] != undefined) {
      if (curent_sim != transl[text[i]] || curent_sim != space) {
        result += transl[text[i]];
        curent_sim = transl[text[i]];
      }
    }
    // Если нет, то оставляем так как есть
    else {
      result += text[i];
      curent_sim = text[i];
    }
  }
  return result;
}
