
import {
  containerLogin,
  containerBg,
  containerBg2,
  containerBg3,
  containerForm,
} from "./Login.style";

export default function Layout(props) {
  return (
    <div className={containerLogin}>
      <div className={containerBg}>
        <div className={containerBg2}></div>
        <div className={containerBg3}>
          <div className={containerForm}>
              {props.child}
          </div>
        </div>
      </div>
    </div>
  );
}
