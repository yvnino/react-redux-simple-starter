import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from './utils/root';

const selfRender = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

selfRender(RootContainer);

if (module.hot) {
  module.hot.accept('./utils/root.js', () => {
    const NextRootContainer = require('./utils/root.js').default;

    selfRender(NextRootContainer);
  });
}
