import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
type FormData = {
  email: string;
  password: string;
};

const AuthSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Box p="6" shadow="md" borderRadius="base">
      <Heading>Create an account</Heading>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack mt={4} spacing={6}>
          {/* Email */}
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="john@doe.com"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          {/* Password */}
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be minimum 6 characters",
                },
              })}
            />
            {!errors.password && (
              <FormHelperText>Min 6 characters</FormHelperText>
            )}
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="orange">
            Continue
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AuthSignup;
