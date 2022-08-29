import * as yup from "yup";
import YupPassword from "yup-password";
import { differenceInYears } from "date-fns";

YupPassword(yup);
export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be atleat 3 characters long")
    .max(12, "Username must not exceed 12 characters")
    .matches(/^[A-Za-z0-9\_\-]+$/, "Username contains invalid characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  firstName: yup
    .string()
    .min(2, "First name must contain atleast 2 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must contain atleast 2 characters")
    .required("Last name is required"),
  password: yup
    .string()
    .password()
    .min(10, "Password must be at least 10 characters long")
    .max(32, "Password cannot be longer than 32 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .password()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Both password values must match"),

  gender: yup
    .string()
    .required("Gender is required")
    .test("gender-check", "Validation failed", function (gender) {
      return gender === "male" || gender === "female" ? true : false;
    }),

  birthday: yup
    .date()
    .required("birthday is required")
    .test(
      "legal-age-check",
      "You must be over 13 years or older to use ChatApp",
      function (date) {
        const age = differenceInYears(new Date(), date);
        return age > 13 ? true : false;
      }
    ),

  securityQuestion: yup
    .number()
    .required("Must select a security question")
    .test("range-check", "Invalid selection", function (value) {
      return value >= 0 && value <= 4 ? true : false;
    }),

  securityAnswer: yup.string().required("Security answer is required"),

  termsAgreed: yup
    .bool()
    .required("Must accept the Terms of Use of ChatApp")
    .test(
      "check-true",
      "Must accept the Terms of Use of ChatApp",
      function (value) {
        return value;
      }
    ),
});
