import { Box, Flex, Text, Heading, Link, Stack, Container, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="blue.800"
        color="white"
      >
        <Box>
          <Heading size="lg">Tech Forum</Heading>
        </Box>
        <Stack direction="row" spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Categories</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
          <Link href="/register" color="white">Register</Link>
        </Stack>
      </Flex>

      {/* Main Content Area */}
      <Container maxW="container.xl" mt={10}>
        {/* Hero Section */}
        <Box textAlign="center" mb={10}>
          <Heading>Welcome to the Tech Forum</Heading>
          <Text fontSize="xl" mt={4}>Discuss the latest in technology, programming, and hardware.</Text>
        </Box>

        {/* Forum Categories */}
        <Box mb={10}>
          <Heading size="lg" mb={4}>Forum Categories</Heading>
          <Stack spacing={4}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">General Discussion</Heading>
              <Text mt={4}>Talk about anything tech-related.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Programming</Heading>
              <Text mt={4}>Discuss programming languages, frameworks, and best practices.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Hardware</Heading>
              <Text mt={4}>Share insights on the latest hardware and gadgets.</Text>
            </Box>
          </Stack>
        </Box>

        {/* Recent Discussions */}
        <Box>
          <Heading size="lg" mb={4}>Recent Discussions</Heading>
          <Stack spacing={4}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">How to learn React in 2023?</Heading>
              <Text mt={4}>Posted 2 hours ago</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Best practices for backend development</Heading>
              <Text mt={4}>Posted 5 hours ago</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Latest trends in AI and Machine Learning</Heading>
              <Text mt={4}>Posted 1 day ago</Text>
            </Box>
          </Stack>
        </Box>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} mt={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" color="white">Facebook</Link>
              <Link href="#" color="white">Twitter</Link>
              <Link href="#" color="white">LinkedIn</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;