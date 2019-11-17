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
import StoryWriter from '../../components/StoryWriter/Loadable';

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
      this.props.onUpdateState(entityState);
    });
  }

  render() {
    return (
        <Diagram customEntities={customEntities} />
    );
  }
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
