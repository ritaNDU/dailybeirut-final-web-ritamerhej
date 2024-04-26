import { Props } from "./commonsProps";
import ErrorText from "../Errors/ErrorText";

const FormInput = ({
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
}: Props) => {
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type="email"
      />
      {error && touched ? <ErrorText error={error} /> : <></>}
    </>
  );
};

export default FormInput;
