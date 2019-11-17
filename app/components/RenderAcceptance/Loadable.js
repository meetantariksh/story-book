/**
 *
 * Asynchronously loads the component for RenderAcceptance
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
