/**
 *
 * Asynchronously loads the component for RenderComments
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
