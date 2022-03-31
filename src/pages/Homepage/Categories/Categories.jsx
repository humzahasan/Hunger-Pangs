import "./Categories.css";
import { Card } from "../../../components/Card/Card";

const Categories = () => {
  return (
    <article className="catergories">
      <h2>Top Categories</h2>
      <section className="catergories-list">
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fyoumaj78lmqeg7mmbzn"
          }
          imageOverlay={"ICE CREAM"}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pltx770rrkcghlzx4zwb"
          }
          imageOverlay={"BURGER"}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21"
          }
          imageOverlay={"MOMO"}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rksu3hnjwxwormnosuhr"
          }
          imageOverlay={"BIRYANI"}
        />
        <Card
          cardMediaUrl={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hvf5qxnb7i4llownf0p7"
          }
          imageOverlay={"NORTH INDIAN"}
        />
      </section>
    </article>
  );
};

export default Categories;
