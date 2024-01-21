/*
  Products Component

  This component renders a section containing product cards. 
  The product cards are dynamically generated based on the 'result' prop.
  Each product card is expected to be passed as children to this component.

  Example usage:
  <Products result={/* Array of product cards 
*/

import "./Product.css";
const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
