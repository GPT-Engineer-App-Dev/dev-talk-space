import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Mock API response
    const mockApiResponse = (data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.username === "taken") {
            reject({ message: "Username already taken" });
          } else {
            resolve({ message: "Registration successful" });
          }
        }, 1000);
      });
    };

    try {
      const response = await mockApiResponse({ username, email, password });
      setSuccess(response.message);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" textAlign="center" mb={5}>Register</Heading>
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {success && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          {success}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl id="username" isRequired mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full" mt={4}>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;