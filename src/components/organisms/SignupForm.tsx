import { useState } from "react";
import { initialSignupFormValues } from "../../data/formsData";
import { Formik } from "formik";
import FormInput from "../atoms/Inputs/FormInput";
import PasswordInputField from "../atoms/Inputs/PasswordInput";

import { SignupSchema } from "../../data/ValidationSchemas/signupSchema";
import { InitialSignupFormType } from "../../data/formsData.types";
import NavigationButton from "../atoms/Buttons/NavigationButton";
import { User } from "../../data/user.type";
import { createNewUser } from "../../service/userApi";
import { useNavigate } from "react-router-dom";

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (
    values: InitialSignupFormType,
    { resetForm }: { resetForm: () => void }
  ) => {
    const user: User = {
      email: values.email,
      password: values.password,
    };
    setIsLoading(true);
    createNewUser(user);
    resetForm();
    setIsLoading(false);
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialSignupFormValues}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}
    >
      {({ handleChange, handleBlur, submitForm, values, errors, touched }) => (
        <div className="flex flex-col">
          <FormInput
            placeholder="Email..."
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />

          <PasswordInputField
            placeholder={"Password..."}
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
          />

          <PasswordInputField
            placeholder={"Repeat password..."}
            handleChange={handleChange("repeatPassword")}
            handleBlur={handleBlur("repeatPassword")}
            value={values.repeatPassword}
            error={errors.repeatPassword}
            touched={touched.repeatPassword}
          />

          <NavigationButton
            onClick={handleSubmit(submitForm)}
            name="Submit"
            isLoading={isLoading}
          />
        </div>
      )}
    </Formik>
  );
};

export default SignupForm;
