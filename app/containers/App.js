// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <div className="window">
        <div className="window-content">{children}</div>
      </div>
    );
  }
}
