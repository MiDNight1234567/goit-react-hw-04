import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#2a2828"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
