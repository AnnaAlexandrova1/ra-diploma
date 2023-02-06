export default function Sizes(props) {

    const { list, updateSize } = props

    const handleClick = (e) => {
        if (e.target.className === 'catalog-item-size') {
            e.target.className = 'catalog-item-size selected'
            updateSize(e.target.textContent)
        } else {
            e.target.className = 'catalog-item-size'
        }   
    }

  return list.map((item, i) => {
    if (item.size) {
      return (
        <span
          className="catalog-item-size"
          id="sizes"
          onClick={(e) => {handleClick(e)}}
          key={i}
        >
          {item.size}
        </span>
      );
    }
  });
};