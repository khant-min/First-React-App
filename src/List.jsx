import { BrowserRouter as Router, Link } from "react-router-dom";

const List = () => {
  return (
    <ul className="ul">
      <Router>
        <li>
          <Link to="/#collections">Collections</Link>
        </li>
        <li>
          <Link to="/#men">Men</Link>
        </li>
        <li>
          <Link to="/#women">Women</Link>
        </li>
        <li>
          <Link to="/#about">about</Link>
        </li>
        <li>
          <Link to="/#contact">contact</Link>
        </li>
      </Router>
    </ul>
  );
};

export default List;
