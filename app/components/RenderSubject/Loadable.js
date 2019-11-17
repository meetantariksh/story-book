/**
 *
 * Asynchronously loads the component for RenderSubject
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
