import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';

const Container = styled.div`
  width: max-content;
  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }

  ${media.phone`
    margin: 0.5rem 0;
    padding: 0.4rem 0;
  `}
`;

const Title = styled.h4`
  margin-bottom: 0.2rem;
  color: #457b9d;
  font-size: 2.0rem;
  width: max-content;
`;

const Post = ({ node }) => (
  <Container>
    <StyledLink to={node.fields.slug}>
      <Title>{node.frontmatter.title}</Title>
    </StyledLink>
    <span>on {node.frontmatter.date}</span>
    {
      /*<sub>
        <span>on {node.frontmatter.date}</span>
        <span>&nbsp; - &nbsp;</span>
        <span>{node.fields.readingTime.text}</span>
      </sub>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    */}
  </Container>
);

Post.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string.isRequired,
  }),
};

export default Post;
