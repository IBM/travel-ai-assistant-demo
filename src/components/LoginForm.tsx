import { Form, Formik } from "formik";
import { Button, TextInput, InlineNotification } from "@carbon/react";
import * as Yup from "yup";
import useAuth from "../hooks/useAuth";

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { signIn, error } = useAuth("/test");

  const initalValues = {
    username: "",
    password: "",
  };

  const onSubmit = async ({ username, password }: LoginFormProps) => {
    signIn("credentials", username, password);
  };

  const validationSchema = Yup.object().shape({
    //username: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik initialValues={initalValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleChange, handleBlur, touched, values, errors, isSubmitting }) => (
          <Form>
            <div className="space-y-6 pb-9">
              <TextInput
                id="username"
                labelText="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                invalid={touched.username && !!errors.username}
              />
              <TextInput
                id="password"
                type="password"
                labelText="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                invalid={touched.password && !!errors.password}
              />
              {error && (
                <InlineNotification
                  hideCloseButton={true}
                  subtitle="Username or password is invalid"
                />
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Login with Credentials
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
