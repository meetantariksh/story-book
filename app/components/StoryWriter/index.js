/**
 *
 * StoryWriter
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import RenderAcceptance from '../RenderAcceptance/Loadable';
import RenderActionPoints from '../RenderActionPoints/Loadable';
import RenderComments from '../RenderComments/Loadable';
import RenderNavigate from '../RenderNavigate/Loadable';
import RenderStart from '../RenderStart/Loadable';
import RenderSubject from '../RenderSubject/Loadable';

class StoryWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        subject: '',
        start: [],
        navigate: [],
        comments: [],
        actionPoints: [],
        acceptance: []
      }
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.entityState);
    if(this.props.entityState !== prevProps.entityState) {
      let story = {
        subject: '',
        start: [],
        navigate: [],
        comments: [],
        actionPoints: [],
        acceptance: []
      };
      let isAgent, isPolicyOwner, isBrokerDealer = false;
      this.props.entityState.map(entity => {
        let prefix = 'As a user, I '
        if(isAgent) {
          prefix = 'As a logged in Agent, I '
        } else if(isPolicyOwner) {
          prefix = 'As a logged in Policy Owner, I  '
        } else if(isBrokerDealer) {
          prefix = 'As a logged in Broker Dealer, I  '
        }
        switch(entity.type) {
          case 'Start': {
            story.start.push(entity.name);
            break;
          };
          case 'Navigate': {
            story.start.push(prefix + 'navigate to my ' +entity.name);
            break;
          }
          case 'Comments': {
            story.comments.push(entity.name);
            break;
          }
          case 'ActionPoint': {
            story.actionPoints.push(prefix + entity.name);
            break;
          }
          case 'Acceptance': {
            story.acceptance.push(entity.name);
            break;
          }
          case 'Agent': {
            isAgent = true;
            story.subject = 'As an Agent, I want to log in to my account and ';
            story.start.push('The user logs in as an Agent.');
            break;
          }
          case 'PolicyOwner': {
            isPolicyOwner = true;
            story.subject = 'As a Policy Owner, I want to log in to my account and ';
            story.start.push('The user logs in as a Policy Owner.');
            break;
          }
          case 'BrokerDealer': {
            isBrokerDealer = true;
            story.subject = 'As a Broker Dealer, I want to log in to my account and ';
            story.start.push('The user logs in as a Broker Dealer.');
            break;
          }
        }
      });

      this.setState({story: story})
    }
  }

  render(){
    return (
      <div>
        <RenderSubject subject={this.state.story.subject} />
        <RenderStart start={this.state.story.start} />
        <RenderNavigate navigate={this.state.story.navigate} />
        <RenderActionPoints actionPoints={this.state.story.actionPoints} />
        <RenderAcceptance acceptance={this.state.story.acceptance} />
        <RenderComments comments={this.state.story.comments} />
      </div>
    )
  }
}

StoryWriter.propTypes = {
  entityState: PropTypes.object.isRequired
};

export default memo(StoryWriter);
