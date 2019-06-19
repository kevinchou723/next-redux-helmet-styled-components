// @flow

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

type Props = {
  title?: string,
  description?: string,
};

const IndexContainer = styled.div`
  display: block;
`;

const IndexParagraph = styled.p`
  color: red;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: blue;
  }

  ${({ theme }) => theme.media.desktop`
    font-size: 48px;
    color: orange;
  `}
`;

class Index extends PureComponent<Props> {
  static getInitialProps(ctx: any) {
    const { isServer, req } = ctx;
    if (req) {
      Helmet.renderStatic();
    }
    return {
      isServer,
      title: 'Hello World!',
      description: 'Index DESCRIPTION!',
    };
  }

  render() {
    const { title, description } = this.props;
    const meta = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ];

    return (
      <IndexContainer>
        <Helmet
          title={title}
          meta={meta}
        />
        <IndexParagraph>
          Hello World!
        </IndexParagraph>
      </IndexContainer>
    );
  }
}

export default Index;
