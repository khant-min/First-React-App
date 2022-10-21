import thumbnail_pic from "./images/image-product-1-thumbnail.jpg";

const ListItems = ({ total, setTotal, setDeleteCart }) => {
  const handleDelete = () => {
    setDeleteCart(true);
    setTotal(0);
  };
  return (
    <li className="detail">
      <img src={thumbnail_pic} />
      <div>
        <p>Fall Limited Edition Sneakers</p>
        <p className="p">
          {`$125 x ${total} - `}
          <span>{`$${125 * total}`}</span>
        </p>
      </div>
      <button onClick={handleDelete}>
        <i className="fa-sharp fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ListItems;
