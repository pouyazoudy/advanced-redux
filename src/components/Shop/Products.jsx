import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "Advanced JavaScript",
    description: "A comprehensive guide to JavaScript programming",
  },
  {
    id: "p3",
    price: 15,
    title: "React for Beginners",
    description: "An introduction to building web applications with React",
  },
  {
    id: "p4",
    price: 8,
    title: "CSS Mastery",
    description: "Master the art of CSS and styling web pages",
  },
  {
    id: "p5",
    price: 12,
    title: "HTML & HTML5",
    description: "Learn the basics and advanced features of HTML and HTML5",
  },
  {
    id: "p6",
    price: 18,
    title: "Full-Stack Development",
    description: "Become a full-stack developer with this complete guide",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
