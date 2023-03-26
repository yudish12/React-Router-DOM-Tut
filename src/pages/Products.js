import data from "../data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <section className="section products">
        {data.map((e, i) => (
          <article key={i}>
            <h5>{e.name}</h5>
            <Link to={`/products/${e.id}`}>more info</Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default Products;
