
const CATEGORY = 'category';
const PRODUCT = 'product';
const menu = [
    {
        type: CATEGORY,
        name: 'Mac',
        menu: [
            {
                type: PRODUCT,
                name: 'MacBook Pro 16”',
            },
            {
                type: PRODUCT,
                name: 'iMac 24”',
            },
            {
                type: PRODUCT,
                name: 'iMac 27”',
            },
            {
                type: CATEGORY,
                name: 'Accessories',
                menu: [
                    {
                        type: CATEGORY,
                        name: 'Featured Magic',
                        menu: [
                            {
                                type: PRODUCT,
                                name: 'Magic Keyboard',
                            },
                            {
                                type: PRODUCT,
                                name: 'Magic Trackpad',
                            },
                        ],
                    },
                    {
                        type: CATEGORY,
                        name: 'Audio',
                        menu: [
                            {
                                type: PRODUCT,
                                name: 'AirPods Pro',
                            },
                            {
                                type: PRODUCT,
                                name: 'AirPods Max',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: CATEGORY,
        name: 'Ipad',
        menu: [
            {
                type: PRODUCT,
                name: 'iPad Pro 11”',
            },
            {
                type: PRODUCT,
                name: 'iPad Pro 12.9”',
            },
            {
                type: CATEGORY,
                name: 'Accessories',
                menu: [
                    {
                        type: PRODUCT,
                        name: 'Apple Pencil',
                    },
                    {
                        type: PRODUCT,
                        name: 'Smart Keyboard',
                    },
                ],
            },
        ],
    },
    {
        type: CATEGORY,
        name: 'Empty Category',
        menu: [],
    },
]



function printMenu(menu, level = 1) {
    let res = '';
    let indent = ' '.repeat(level)
    for (const prop of menu) {
        if (prop.type === PRODUCT) {
            res = res + `${indent} -${prop.name}\n`

        } else if (prop.type === CATEGORY) {
            res = res + `${indent} * ${prop.name}\n` + printMenu(prop.menu, (level + 1))
        }
    }
    return res;
}









/**
 * Функция конвертирует объект menu в строку.
 *
 * Пример реального меню: https://www.apple.com/
 *
 * Возможное время выполнения: 23 мин
 *
//  * @param {{}} menu - рекурсивная структура
//  * @param {number} level - уровень вложенности, используйте его для отображения отступов
//  * @returns {string}
 */
//   for (текущий_элемент_меню of меню) {
//     if (тип текущий_элемент_меню равен PRODUCT) {
//       прибавить к результату строку: отступ - имя текущий_элемент_меню добавить перевод строки \n
//     } else if (тип текущий_элемент_меню равен категория) {
//       прибавить к результату строку: отступ * имя текущий_элемент_меню добавить перевод строки \n вызвать printMenu(меню текущий_элемент_меню,  уровень_вложенности + 1)
//     }
//   }




const menuStr = printMenu(menu);


console.log(menuStr); // В консоле должно вывести вот такую структуру меню со всеми отступами:
/*
* Mac
 - MacBook Pro 16”
 - iMac 24”
 - iMac 27”
 * Accessories
  * Featured Magic
    - Magic Keyboard
    - Magic Trackpad
  * Audio
    - AirPods Pro
    - AirPods Max
* Ipad
 - iPad Pro 11”
 - iPad Pro 12.9”
 * Accessories
  - Apple Pencil
  - Smart Keyboard
* Empty Category
*/


// export {
//   menu,
//   CATEGORY,
//   PRODUCT,
// };

// Псевдокод:

// function printMenu(меню, уровень_вложенности = 0) {
//   отступ = пробел умноженный на количество уровень вложенности;
//   результат = пустая строка;


//   for (текущий_элемент_меню of меню) {
//     if (тип текущий_элемент_меню равен PRODUCT) {
//       прибавить к результату строку: отступ - имя текущий_элемент_меню добавить перевод строки \n
//     } else if (тип текущий_элемент_меню равен категория) {
//       прибавить к результату строку: отступ * имя текущий_элемент_меню добавить перевод строки \n вызвать printMenu(меню текущий_элемент_меню,  уровень_вложенности + 1)
//     }
//   }


//   отевет результат
// }