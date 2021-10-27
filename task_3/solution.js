function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество
   
    let id = 1 && 2;

    let title = 'Пицца' && 'Эчпочмак';

    let price = '500.00' && '55.00';

    let count = 5 && 2;


    /*if (title = 'Пицца' ) {
        price == '500.00' && count == 5;
    } else if (title = 'Эчпочмак') {
        price == '55.00' && count == 2;
    }*/


    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
    // 1. Создайте переменную itemCountText, равную пустой строке
    // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    // 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`

    let itemCountText = null;

    itemCountText = itemCountText + count;

    itemCountText = itemCountText + ` × `;

    itemCountText = itemCountText + price;

    itemCountText = itemCountText + ` ₽ = `;

    let sum = count * price;

    itemCountText = itemCountText + sum;

    itemCountText = itemCountText + ` ₽`;

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
