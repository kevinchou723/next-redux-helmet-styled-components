// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'next/router';

type Props = {
  title?: string,
  description?: string
}

class Home extends React.Component<Props> {
  static getInitialProps({ isServer, req }) {
    if (req) {
      Helmet.renderStatic();
    }
    return {
      isServer,
      title: 'HOME TITLE!',
      description: 'HOME DESCRIPTION!',
    };
  }

  render() {
    const { title, description } = this.props;
    const meta = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ];
    return (
      <div className='home__container'>
        <Helmet
          title={title}
          meta={meta}
        />
        This is Home page! I am Green!
      </div>
    );
  }
}

export default withRouter(Home);
