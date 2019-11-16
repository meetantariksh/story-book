/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import StoryBoard from '../StoryBoardEditor/Loadable';

export default function HomePage() {
  return (
      <StoryBoard />
  );
}
