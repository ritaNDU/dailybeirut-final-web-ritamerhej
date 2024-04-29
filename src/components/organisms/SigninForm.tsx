import { Formik } from "formik";
import { useState } from "react";
import { initialSigninFormValues } from "../../data/formsData";
import FormInput from "../atoms/Inputs/FormInput";
import PasswordInputField from "../atoms/Inputs/PasswordInput";

import { SigninSchema } from "../../data/ValidationSchemas/signinSchema";
import { InitialSigninFormType } from "../../data/formsData.types";
import useManageUser from "../../hooks/useManageUser";
import NavigationButton from "../atoms/Buttons/NavigationButton";
import { getUserTokens } from "../../service/userApi";
import useManageSecureStorage from "../../hooks/useManageSecureStorage";

const handleSubmit =
  (submitFunction: (() => Promise<void>) & (() => Promise<any>)) => () => {
    submitFunction();
  };

const SigninForm = () => {
  const { storeUserInfo } = useManageSecureStorage();
  const { signUserIn } = useManageUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async (values: InitialSigninFormType) => {
    setIsLoading(true);
    const tokens = await getUserTokens({
      email: values.email,
      password: values.password,
    });

    if (tokens) {
      storeUserInfo(tokens.accessToken, tokens.refreshToken);
      signUserIn();
    }
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={initialSigninFormValues}
      onSubmit={handleSignin}
      validationSchema={SigninSchema}
    >
      {({ handleChange, handleBlur, submitForm, values, errors, touched }) => (
        <div className="flex flex-col">
          <FormInput
            placeholder="Email Address"
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />

          <PasswordInputField
            placeholder={"Password"}
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
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

export default SigninForm;
