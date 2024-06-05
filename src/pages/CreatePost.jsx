import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          if (data.title === "" || data.content === "") {
            reject({ message: "Title and content are required" });
          } else {
            resolve({ message: "Post created successfully" });
          }
        }, 1000);
      });
    };

    try {
      const response = await mockApiResponse({ title, content });
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
      <Heading as="h2" size="lg" textAlign="center" mb={5}>Create Post</Heading>
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
        <FormControl id="title" isRequired mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="content" isRequired mb={4}>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full" mt={4}>
          Create Post
        </Button>
      </form>
    </Box>
  );
};

export default CreatePost;