/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import validator from "validator";

import {
  Box,
  Center,
  Heading,
  Card,
  CardBody,
  Text,
  VStack,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";
import "./gateway.css";

const Gateway = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login, error, isLoading } = useLogin();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="login container">
      <Card className="middle">
        <form onSubmit={handleSubmit}>
          <CardBody>
            <VStack spacing={6}>
              <Box>
                <Center>
                  <Heading as="h1" size="lg">
                    Login
                  </Heading>
                </Center>
              </Box>
              <Box width="80%">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    {email === "" ? (
                      <EmailIcon boxSize={4} color="black5" />
                    ) : validator.isEmail(email) ? (
                      <EmailIcon boxSize={5} color="lightGreen" />
                    ) : (
                      <EmailIcon boxSize={5} color="brightYellow" />
                    )}
                  </InputLeftElement>
                  <Input
                    onChange={handleEmailChange}
                    variant="flushed"
                    type="email"
                    placeholder="Email"
                  />
                </InputGroup>
              </Box>
              <Box width="80%">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    {password === "" ? (
                      <UnlockIcon boxSize={4} color="black5" />
                    ) : (
                      <LockIcon
                        boxSize={5}
                        color={
                          validator.isStrongPassword(password)
                            ? "lightGreen"
                            : "brightYellow"
                        }
                      />
                    )}
                  </InputLeftElement>
                  <Input
                    onChange={handlePasswordChange}
                    variant="flushed"
                    type="password"
                    placeholder="Password"
                  />
                </InputGroup>
              </Box>
              <Box width="80%">
                <Button
                  isDisabled={email == "" || password == ""}
                  width="100%"
                  colorScheme="blue"
                  type="submit"
                >
                  Log In
                </Button>
              </Box>
              <Box>
                <Text>
                  Need to register?{"  "}
                  <span className="link">
                    <Link to="/register">Register here.</Link>
                  </span>
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </form>
      </Card>
    </div>
  );
};

export default Gateway;
