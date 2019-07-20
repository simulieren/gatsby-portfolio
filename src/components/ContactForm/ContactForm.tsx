import React, { useState } from "react";
import styled from "styled-components";
import { space, layout, typography, color } from "styled-system";
import { Flex, Box } from "rebass";

import { motion, AnimatePresence } from "framer-motion";
import { P, H2, StyledButton } from "../Typography";
import { useTranslation } from "react-i18next";

const TextInput = styled(motion.input)`
  ${space}
  ${layout}
  ${typography}
  border: none;
  border-bottom: 2px solid #000;

  &:focus {
    border-bottom: 2px solid #00f;
  }
`;
const EmailInput = styled(motion.input)`
  ${space}
  ${layout}
  ${typography}
  border: none;
  border-bottom: 2px solid #000;

  &:focus {
    border-bottom: 2px solid #00f;
  }
`;
const MessageInput = styled(motion.textarea)`
  ${space}
  ${layout}
  ${typography}
  border: none;
  border-bottom: 2px solid #000;

  &:focus {
    border-bottom: 2px solid #00f;
  }
`;

const Notify = styled(motion.p)`
  ${space}
  ${layout}
  ${typography}
  color: red;
  ${color}
`;

// <textarea placeholder="Tell me about you and the world" rows="2" cols="46" id="message" name="message" class="error" spellcheck="false" data-gramm="false" aria-invalid="true" style="line-height: 31.992px;"></textarea>

interface ContactFormProps {
  subject: string;
}

const ContactForm = (props: ContactFormProps) => {
  const { t, i18n } = useTranslation();

  const [successState, setSuccess] = useState(null);
  const [errorState, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [validateEmailState, setValidateEmail] = useState(null);

  // E-mail is not valid, if the function returns null
  const validateEmail = (email: string) =>
    email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

  const handleEmailChange = event => {
    setEmail(event.target.value);

    // Check if the email is not valid
    setValidateEmail(validateEmail(event.target.value) !== null);
  };

  const [name, setName] = useState("");
  const [validateNameState, setValidateName] = useState(null);

  const handleNameChange = event => {
    setName(event.target.value);

    // Check if the name is valid
    setValidateName(event.target.value.length > 0);
  };

  const [message, setMessage] = useState("");
  const [validateMessageState, setValidateMessage] = useState(null);

  const handleMessageChange = event => {
    setMessage(event.target.value);

    // Check if the Message is valid
    setValidateMessage(event.target.value.length > 10);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // Check if the email is not valid
    // !== null means email is valid
    setValidateEmail(validateEmail(email) !== null);

    // Return if email is not valid
    if (validateEmail(email) === null) return;
    if (validateMessageState === false) return;
    if (validateNameState === false) return;

    try {
      const res = await fetch(
        `https://api.simon-halimonov.de/v1/contact/?subject=${t(
          "hire-me.headline"
        )}&name=${name}&message=${message}&email=${email}`
      );

      const json = await res.json();

      if (json.status === "success") setSuccess(true);
      if (json.status === "error") setError(true);
    } catch (error) {
      if (error) console.log(error);
    }
  }

  return (
    <Flex mb={[4, 5]} as="form" flexDirection="column" onSubmit={handleSubmit}>
      <P as="label" htmlFor="fullname" mt={[2, 3]}>
        {t("contactform.name.label")}
      </P>
      <TextInput
        fontFamily="Apercu"
        fontSize={[3, 4]}
        fontStyle="italic"
        type="text"
        placeholder={t("contactform.name.placeholder")}
        name="fullname"
        id="fullname"
        height={50}
        my={[2, 3]}
        onChange={handleNameChange}
      />
      <AnimatePresence>
        {validateNameState === false && (
          <Notify
            fontFamily="Apercu"
            fontSize={[2, 3]}
            fontStyle="italic"
            mt="-10px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {t("contactform.name.error")}
          </Notify>
        )}
      </AnimatePresence>

      <P as="label" htmlFor="email" mt={[2, 3]}>
        {t("contactform.email.label")}
      </P>
      <EmailInput
        fontFamily="Apercu"
        fontSize={[3, 4]}
        fontStyle="italic"
        type="email"
        placeholder={t("contactform.email.placeholder")}
        name="email"
        id="email"
        height={50}
        my={[2, 3]}
        onChange={handleEmailChange}
      />
      <AnimatePresence>
        {email.length > 4 && validateEmailState === false && (
          <Notify
            fontFamily="Apercu"
            fontSize={[2, 3]}
            fontStyle="italic"
            mt="-10px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {t("contactform.email.error")}
          </Notify>
        )}
      </AnimatePresence>

      <P as="label" htmlFor="fullname" mt={[2, 3]}>
        {t("contactform.message.label")}
      </P>
      <MessageInput
        fontFamily="Apercu"
        fontSize={[3, 4]}
        fontStyle="italic"
        placeholder={t("contactform.message.placeholder")}
        name="message"
        id="message"
        my={[2, 3]}
        mb={[2, 3]}
        rows="4"
        cols="46"
        onChange={handleMessageChange}
      />
      <AnimatePresence>
        {validateMessageState === false && (
          <Notify
            fontFamily="Apercu"
            fontSize={[2, 3]}
            fontStyle="italic"
            mt="-10px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {t("contactform.message.error")}
          </Notify>
        )}
      </AnimatePresence>

      <Flex mt={[3, 4]} alignItems="center">
        <Flex mr="3">
          <StyledButton onClick={handleSubmit} size="10rem">
            {t("contactform.button")}
          </StyledButton>
        </Flex>
        <AnimatePresence>
          {successState === true && (
            <Notify
              fontFamily="Apercu"
              fontSize={[2, 3]}
              fontStyle="italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              color={"green"}
            >
              {t("contactform.success")}
            </Notify>
          )}

          {errorState === true && (
            <Notify
              fontFamily="Apercu"
              fontSize={[2, 3]}
              fontStyle="italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {t("contactform.error")}
            </Notify>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
