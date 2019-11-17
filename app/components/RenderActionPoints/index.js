/**
 *
 * RenderActionPoints
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderActionPoints(props) {
  let content = props.actionPoints;
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

RenderActionPoints.propTypes = {
  actionPoints: PropTypes.array.isRequired
};

export default memo(RenderActionPoints);
