import { useParams, Link } from "react-router-dom";
import data from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = data.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
