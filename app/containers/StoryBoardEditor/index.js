/**
 *
 * StoryBoardEditor
 *
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import {
  Diagram,
  store as diagramStore,
  setEntities,
  setConfig,
  diagramOn,
} from 'react-flow-diagram';
import style from 'styled-components';

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectStoryBoardEditor from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { config, customEntities } from './configs/configs';

const Editor = style.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 40em;
`;

class StoryBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    diagramStore.dispatch(setConfig(config));
    diagramStore.dispatch(setEntities([]));

    diagramOn('anyChange', entityState =>{
      // You can get the model back
      // after modifying the UI representation
      console.info(entityState);
      this.props.onUpdateState(entityState);
    });
  }

  render() {
    return (
        <Diagram customEntities={customEntities} />
    );
  }
}

function StoryWriter(entityState) {
  console.log(entityState);
  let story = {
    start: [],
    navigate: [],
    comments: [],
    actionPoints: [],
    acceptance: []
  };
  entityState.entityState.map((entity) => {
    if(entity.type === 'Start') {
      story.start.push(entity.name);
    }else if(entity.type === 'Navigate') {
      story.navigate.push(entity.name);
    }else if(entity.type === 'Comments') {
      story.comments.push(entity.name);
    }else if(entity.type === 'ActionPoint') {
      story.actionPoints.push(entity.name);
    }else if(entity.type === 'Acceptance') {
      story.acceptance.push(entity.name);
    }
  });
  console.log(story);
  return (
    <div>
      {
        story.start.length > 0 && 
        <div>
          <h1>When</h1>
          <ul>
            {
              story.start.map(item => {
                return <li>The user: {item}</li>
              })
            }
          </ul>
        </div>
      }
      {
        story.navigate.length > 0 && 
        <div>
          <h1>Navigates</h1>
          <ul>
            {
              story.navigate.map(item => {
                return <li>The user navigates to: {item}</li>
              })
            }
          </ul>
        </div>
      }
      {
        story.actionPoints.length > 0 && 
        <div>
          <h1>User Actions</h1>
          <ul>
            {
              story.actionPoints.map(item => {
                return <li>The user: {item}</li>
              })
            }
          </ul>
        </div>
      }
      {
        story.acceptance.length > 0 && 
        <div>
          <h1>Acceptance Criteria</h1>
          <ul>
            {
              story.acceptance.map(item => {
                return <li>{item}</li>
              })
            }
          </ul>
        </div>
      }
    </div>
  )
}

export function StoryBoardEditor() {
  useInjectReducer({ key: "storyBoardEditor", reducer });
  useInjectSaga({ key: "storyBoardEditor", saga });
  const [entityState, setEntityState]=useState([]);
  return (
    <div>
      <Helmet>
        <title>Story Board</title>
        <meta name="description" content="Description of StoryBoardEditor" />
      </Helmet>
      <Editor>
        <StoryBoard onUpdateState={(eState) => {setEntityState(eState)}}/>
      </Editor>
      <Editor>
        <StoryWriter entityState={entityState} />
      </Editor>
    </div>
  );
}

StoryBoardEditor.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  storyBoardEditor: makeSelectStoryBoardEditor()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(StoryBoardEditor);
