import React from "react";

import styled from "styled-components";
import { Flex, Box, Text } from "rebass";

import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  CodepenIcon,
  GitlabIcon,
  LinkIcon,
  CodesandboxIcon
} from "../Icons";

const SocialLinks = props => {
  return (
    <Flex mt="3" flexDirection={["row"]} {...props}>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="mailto:hello@simonhalimonov.de"
      >
        <MailIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/simon-halimonov-745431181/"
      >
        <LinkedInIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://github.com/simulieren"
      >
        <GitHubIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://gitlab.com/simulieren"
      >
        <GitlabIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://codepen.io/simulieren"
      >
        <CodepenIcon stroke={props.color} />
      </Box>

      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://codesandbox.io/u/simulieren"
      >
        <CodesandboxIcon stroke={props.color} />
      </Box>

      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://dribbble.com/SimonHalimonov"
      >
        <LinkIcon stroke={props.color} />
      </Box>
    </Flex>
  );
};

export default SocialLinks;
