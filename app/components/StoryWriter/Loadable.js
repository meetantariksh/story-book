/**
 *
 * Asynchronously loads the component for StoryWriter
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
