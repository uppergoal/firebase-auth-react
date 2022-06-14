import { Box, Container, Heading, Input } from "@chakra-ui/react";

export default function PageHome() {
  return (
    <main>
      <Container>
        <Box shadow="2xl" p={10} borderRadius={10}>
          <Heading>Email and password</Heading>
          <ul>
            <li>Signup with email and password</li>
            <li>Login with email and password</li>
          </ul>
        </Box>

        <Box shadow="2xl" p={10} borderRadius={10} mt={10}>
          <Heading>Auth with Google (SSO)</Heading>
          <ul>
            <li>Signup/login using Google</li>
          </ul>
        </Box>

        <Box shadow="2xl" p={10} borderRadius={10} mt={10}>
          <Heading>Passwordless Auth</Heading>
          <ul>
            <li>Passwordless link via email</li>
            <li>Passwordless code via phone</li>
          </ul>
        </Box>

        <Box shadow="2xl" p={10} borderRadius={10} mt={10}>
          <Heading>Forgot password</Heading>
          <ul>
            <li>Reset password and handle process inside the app</li>
          </ul>
        </Box>

        <Box shadow="2xl" p={10} borderRadius={10} mt={10}>
          <Heading>Update Auth User</Heading>
          <ul>
            <li>Update password</li>
            <li>Update email</li>
            <li>Update phone</li>
            <li>Delete Account</li>
          </ul>
        </Box>

        <Box shadow="2xl" p={10} borderRadius={10} mt={10}>
          <Heading>2FA</Heading>
          <ul>
            <li>Enable 2FA</li>
            <li>Disable 2FA</li>
            <li>Add phone number</li>
          </ul>
        </Box>
      </Container>
    </main>
  );
}
