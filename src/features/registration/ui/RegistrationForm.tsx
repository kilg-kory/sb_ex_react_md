import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { initialValues } from "../model/initialValues";
import type { User } from "../model/types";
import { userSchema } from "../model/validation";

export const RegistrationForm = () => {
  const { handleSubmit, control } = useForm<User>({
    defaultValues: initialValues,
    mode: "onSubmit",
    resolver: yupResolver(userSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,

    name: "test",
  });

  const submitHandler = async (formValues: User) => {
    console.log(formValues);
  };
  console.log(fields);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      }}
      component="form"
      onSubmit={handleSubmit(submitHandler)}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Регистрация
      </Typography>

      <Container maxWidth="sm">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              sx={{ mb: 2 }}
              fullWidth
              label="Имя"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              sx={{ mb: 2 }}
              fullWidth
              label="Email"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              sx={{ mb: 2 }}
              fullWidth
              type="password"
              label="Пароль"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              sx={{ mb: 2 }}
              fullWidth
              type="password"
              label="Подтверждение пароля"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Divider sx={{m:2}} />
        <Typography variant="h6" >
          Социальные сети
        </Typography>

        {fields.map((_item, index) => (
          <Controller
            name={`test.${index}.url`}
            control={control}
            render={({ field, fieldState }) => (
              <Box sx={{ display: "flex" }}>
                <TextField
                  {...field}
                  fullWidth
                  label="Социальная сеть"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
                <Button
                  disabled={fields.length === 1}
                  onClick={() => remove(index)}
                  size="small"
                  sx={{ml: 1}}
                >
                  Удалить
                </Button>
              </Box>
            )}
          />
        ))}

        <Button size="small" onClick={() => append({ url: "" })}>
          Добавить ссылку
        </Button>
        <Divider />
        <Button type="submit">Отправить</Button>
      </Container>
    </Box>
  );
};
