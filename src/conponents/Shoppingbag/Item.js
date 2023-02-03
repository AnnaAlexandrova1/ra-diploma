import { deleteFromShoppinBag } from '../../localStorage/localStorage'

const Item = ({ item, i }) => {
  const sum = +item.item.price * + item.qty
  console.log(item)

  return (
    <tr key={item.item.id}>
      <td scope="row">{i+1}</td>
      <td>
        <a href="/products/1.html">{item.item.title}</a>
      </td>
      <td>{item.size}</td>
      <td>{item.qty}</td>
      <td>{item.item.price} руб.</td>
      <td>{sum} руб.</td>
      <td>
        <button className="btn btn-outline-danger btn-sm"
          onClick={() => {
            deleteFromShoppinBag(item.item.sku, item.size);
            // updateShoppingBag()
          }}>Удалить</button>
      </td>
    </tr>
  );
};
export default Item;


// const Item = ({ item, updateShoppingBag, i }) => {
//   const sum = +item.item.price * + item.qty

//   return (
//     <tr key={item.item.id}>
//       <td scope="row">{i+1}</td>
//       <td>
//         <a href="/products/1.html">{item.item.title}</a>
//       </td>
//       <td>{item.size}</td>
//       <td>{item.qty}</td>
//       <td>{item.item.price} руб.</td>
//       <td>{sum} руб.</td>
//       <td>
//         <button className="btn btn-outline-danger btn-sm"
//           onClick={() => {
//             deleteFromShoppinBag(item.item.sku, item.size);
//             updateShoppingBag()
//           }}>Удалить</button>
//       </td>
//     </tr>
//   );
// };