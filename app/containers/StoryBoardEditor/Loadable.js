/**
 *
 * Asynchronously loads the component for StoryBoardEditor
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
