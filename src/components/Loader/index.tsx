import assets from "assets";
import classes from "./index.module.css";

const Loader = () => {
  return (
    <div className={classes.container}>
      <img src={assets.images.loading} />
    </div>
  );
};

export default Loader;
