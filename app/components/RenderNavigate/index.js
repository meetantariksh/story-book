/**
 *
 * RenderNavigate
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderNavigate(props) {
  let content = props.navigate;
  return (
    <div>
      {
        content && content.length > 0 && 
        <div>
          <h1>Navigates to</h1>
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

RenderNavigate.propTypes = {
  navigate: PropTypes.array.isRequired
};

export default memo(RenderNavigate);
