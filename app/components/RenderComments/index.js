/**
 *
 * RenderComments
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderComments(props) {
  let content = props.comments;
  return (
    <div>
      {
        content && content.length > 0 && 
        <div>
          <h1>When</h1>
          <ul>
            {
              content.map(item => {
                return (
                  <li>
                    {item}
                  </li>
                )
              })
            }
          </ul>
          
        </div>
      }
    </div>
  );
}

RenderComments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default memo(RenderComments);
