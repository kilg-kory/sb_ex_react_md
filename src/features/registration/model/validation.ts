import * as yup from "yup";

const urlsSchema = yup.object({
  url: yup.string()
    .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Не урл",
  )
  .required("Обязательно заполнить урл"),
});

export const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Не заполенно обязательное поле"),
  test: yup.array().of(urlsSchema).required(),
});

//let schema = yup.array().of(yup.number().min(2));
// yup
//   .string()
//   .matches(
//     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//     "Enter correct url!",
//   );
