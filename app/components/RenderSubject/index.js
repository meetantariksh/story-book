/**
 *
 * RenderSubject
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderSubject(props) {
  let content = props.subject;
  return (
    <div>
      {
        content && content !== '' && 
          <h1>{content}</h1>
      }
    </div>
  );
}

RenderSubject.propTypes = {
  subject: PropTypes.string.isRequired
};

export default memo(RenderSubject);
