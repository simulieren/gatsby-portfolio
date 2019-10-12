import React from 'react';

import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';

import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  CodepenIcon,
  GitlabIcon,
  LinkIcon,
  CodesandboxIcon,
} from '../Icons';

const SocialLinks = props => {
  return (
    <Flex mt="3" flexDirection={[`row`]} {...props}>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="mailto:hello@simonhalimonov.de"
        aria-label="Write me an email"
      >
        <MailIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/in/simon-halimonov-745431181/"
        aria-label="Connect with me on LinkedIn"
      >
        <LinkedInIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://github.com/simulieren"
        aria-label="View my code on GitHub"
      >
        <GitHubIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://gitlab.com/simulieren"
        aria-label="View my code on GitLab"
      >
        <GitlabIcon stroke={props.color} />
      </Box>
      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://codepen.io/simulieren"
        aria-label="View my code on Codepen"
      >
        <CodepenIcon stroke={props.color} />
      </Box>

      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://codesandbox.io/u/simulieren"
        aria-label="View my code on CodeSandbox"
      >
        <CodesandboxIcon stroke={props.color} />
      </Box>

      <Box
        p="2"
        as="a"
        target="_blank"
        rel="noopener"
        href="https://dribbble.com/SimonHalimonov"
        aria-label="View my designs on Dribbble"
      >
        <LinkIcon stroke={props.color} />
      </Box>
    </Flex>
  );
};

export default SocialLinks;
