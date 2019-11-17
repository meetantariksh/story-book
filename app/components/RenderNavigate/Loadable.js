/**
 *
 * Asynchronously loads the component for RenderNavigate
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
