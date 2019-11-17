// @flow

import React from 'react';
import style from 'styled-components';

/*
 * Presentational
 * ==================================== */

const TaskStyle = style.div`
  background-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: .5rem;
  border: 2px solid #888;
`;

const Name = style.span`
  flex: 1 0;
  padding: .5em;
  font-size: .8rem;
`;

const Task = (props) => (
  <TaskStyle
    width={props.model.width}
    height={props.model.height}
  >
    <Name
      style={{ display: 'block'}}
    >
      Logged in as an Agent
    </Name>
  </TaskStyle>
);

/*
 * Container
 * ==================================== */

class AgentComponent extends React.PureComponent {

  state = {
    isEditing: false,
    name: 'Logged in as an Agent',
  };

  render() {
    return (
      <Task
        {...this.props}
        name={'Logged in as an Agent'}
      />
    );
  }
}

export default AgentComponent;
