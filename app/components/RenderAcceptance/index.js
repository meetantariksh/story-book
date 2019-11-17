/**
 *
 * RenderAcceptance
 *
 */

import React, { memo } from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderAcceptance(props) {
  let content = props.acceptance;
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

RenderAcceptance.propTypes = {
  acceptance: PropTypes.array.isRequired
};

export default memo(RenderAcceptance);
