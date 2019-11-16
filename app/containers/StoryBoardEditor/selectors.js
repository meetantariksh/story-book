import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the storyBoardEditor state domain
 */

const selectStoryBoardEditorDomain = state =>
  state.storyBoardEditor || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StoryBoardEditor
 */

const makeSelectStoryBoardEditor = () =>
  createSelector(
    selectStoryBoardEditorDomain,
    substate => substate
  );

export default makeSelectStoryBoardEditor;
export { selectStoryBoardEditorDomain };
