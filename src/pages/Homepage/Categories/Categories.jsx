import "./Categories.css";
import Pasta from "../../../assets/pasta.jpg";
import Burger from "../../../assets/burger.jpg";
import Pizza from "../../../assets/pizza.png";
import Pancake from "../../../assets/pancake.jpg";
import Salad from "../../../assets/salad.jpg";
import { Card } from "../../../components/Card/Card";

const Categories = () => {
  return (
    <article className="catergories">
      <h2>Top Categories</h2>
      <section className="catergories-list">
        <Card cardMediaUrl={Pasta} imageOverlay={"PASTA"} />
        <Card cardMediaUrl={Burger} imageOverlay={"BURGER"} />
        <Card cardMediaUrl={Pizza} imageOverlay={"PIZZA"} />
        <Card cardMediaUrl={Pancake} imageOverlay={"PANCAKE"} />
        <Card cardMediaUrl={Salad} imageOverlay={"SALAD"} />
      </section>
    </article>
  );
};

export default Categories;
