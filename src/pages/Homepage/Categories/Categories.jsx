import "./Categories.css";
import { Card } from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <article className="catergories">
      <h2>Top Categories</h2>
      <section className="catergories-list">
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fyoumaj78lmqeg7mmbzn"
          }
          imageOverlay={"ICE CREAM"}
          clickHandler={() => navigate("/products/ice-cream")}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pltx770rrkcghlzx4zwb"
          }
          imageOverlay={"BURGER"}
          clickHandler={() => navigate("/products/burger-&-wraps")}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21"
          }
          imageOverlay={"MOMO"}
          clickHandler={() => navigate("/products/momo")}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rksu3hnjwxwormnosuhr"
          }
          imageOverlay={"BIRYANI"}
          clickHandler={() => navigate("/products/biryani")}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hvf5qxnb7i4llownf0p7"
          }
          imageOverlay={"NORTH INDIAN"}
          clickHandler={() => navigate("/products/north-indian")}
        />
      </section>
    </article>
  );
};

export default Categories;
