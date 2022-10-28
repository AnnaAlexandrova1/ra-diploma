
const Item = (props) => {
    const i = props.i;

    return (
          <tr key={i.id}>
            <td scope="row">1</td>
            <td>
                    <a href="/products/1.html">{i.title}</a>
            </td>
            <td>18 US</td>
            <td>1</td>
            <td>{i.price}</td>
            <td>34 000 руб.</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">Удалить</button>
            </td>
          </tr>
    )
}
export default Item