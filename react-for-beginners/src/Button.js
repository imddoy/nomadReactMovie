import PropTypes from "prop-types";
import styles from "./Button.module.css"; //create-react-app은 css코드를 js 오브젝트로 변환

function Button({text}){
    return <button className={styles.btn}>{text}</button> //js오브젝트가 btn을 갖고 있음
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Button;