/**
 *
 * RenderStart
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderStart(props) {
  let content = props.start;
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

RenderStart.propTypes = {
  start: PropTypes.array.isRequired
};

export default memo(RenderStart);
