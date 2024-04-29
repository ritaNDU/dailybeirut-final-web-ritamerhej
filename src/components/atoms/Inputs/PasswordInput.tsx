import { Props } from "./commonsProps";
import ErrorText from "../Errors/ErrorText";
import passwordIcon from "../../../assets/passwordicon.png";
import "./styles.css";
const PasswordInputField = ({
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
}: Props) => {
  return (
    <div className="mb-2 flex flex-col gap-1">
      <div className="flex form-field max-[280px]:w-full max-[280px]:place-self-start gap-3">
        <img src={passwordIcon} alt="lock icon" className="w-5 h-5" />
        <input
          className="outline-none max-[280px]:w-full"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          type="password"
        />
      </div>
      {error && touched ? <ErrorText error={error} /> : <></>}
    </div>
  );
};

export default PasswordInputField;
