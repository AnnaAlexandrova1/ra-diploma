// добаляет в корзину элемент с нужным количеством и выбранный размер
export function addToStorage(item, qty = 1, size = 36) {
  if (localStorage.getItem(`${item.sku}/${size}`)) {
    let q = JSON.parse(localStorage.getItem(`${item.sku}/${size}`));
    const newQty = q.qty + qty;
    console.log(newQty);
    localStorage.setItem(
      `${item.sku}/${size}`,
      JSON.stringify({
        item: item,
        qty: newQty,
        size: size,
      })
    );
  } else {
    localStorage.setItem(
      `${item.sku}/${size}`,
      JSON.stringify({
        item: item,
        qty: qty,
        size: size,
      })
    );
  }

  let i;

  console.log("local storage");
  for (i = 0; i < localStorage.length; i++) {
    console.log(
      localStorage.key(i) +
        "=[" +
       localStorage.getItem(localStorage.key(i)) +
        "]"
    );
  }
}

export function getShoppingBag() {
  const array = []
  for (let i = 0; i < localStorage.length; i++) {
        array.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    return array
}
