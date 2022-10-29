const Item = ({ item }) => {
  const sum = +item.item.price * + item.qty

  return (
    <tr key={item.item.id}>
      <td scope="row">1</td>
      <td>
        <a href="/products/1.html">{item.item.title}</a>
      </td>
      <td>{item.size}</td>
      <td>{item.qty}</td>
      <td>{item.item.price} руб.</td>
      <td>{sum} руб.</td>
      <td>
        <button className="btn btn-outline-danger btn-sm">Удалить</button>
      </td>
    </tr>
  );
};
export default Item;
