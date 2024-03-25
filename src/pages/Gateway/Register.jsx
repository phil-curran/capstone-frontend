/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
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
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";
import "./gateway.css";

const Gateway = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="register container">
      <Card className="middle">
        <CardBody>
          <VStack spacing={6}>
            <Box>
              <Center>
                <Heading as="h1" size="lg">
                  Register
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
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  {confirmPassword === "" ? (
                    <UnlockIcon boxSize={4} color="black5" />
                  ) : (
                    <LockIcon
                      boxSize={5}
                      color={
                        password === confirmPassword ? "lightGreen" : "red"
                      }
                    />
                  )}
                </InputLeftElement>
                <Input
                  onChange={handleConfirmPassword}
                  variant="flushed"
                  type="password"
                  placeholder="Confirm Password"
                />
              </InputGroup>
            </Box>
            <Box width="80%">
              <Button
                isDisabled={
                  email == "" ||
                  password == "" ||
                  confirmPassword == "" ||
                  password !== confirmPassword
                }
                width="100%"
                colorScheme="blue"
              >
                Register
              </Button>
            </Box>
            <Box>
              <Text>
                Already registered?{"  "}
                <span className="link">
                  <Link to="/login">Login here.</Link>
                </span>
              </Text>
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Gateway;
