import { Props } from "./commonsProps";
import ErrorText from "../Errors/ErrorText";
import "./styles.css";

const FormInput = ({
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
}: Props) => {
  return (
    <div className="mb-2 flex flex-col gap-1">
      <input
        className="form-field max-[280px]:w-full max-[280px]:place-self-start"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type="email"
      />
      {error && touched ? <ErrorText error={error} /> : <></>}
    </div>
  );
};

export default FormInput;
