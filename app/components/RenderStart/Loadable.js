/**
 *
 * Asynchronously loads the component for RenderStart
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
