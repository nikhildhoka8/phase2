/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as api_ from "../api.js";
import type * as http from "../http.js";
import type * as myFunctions from "../myFunctions.js";
import type * as package_rate_Models_AllMetrics from "../package_rate/Models/AllMetrics.js";
import type * as package_rate_Models_BusFactor from "../package_rate/Models/BusFactor.js";
import type * as package_rate_Models_Correctness from "../package_rate/Models/Correctness.js";
import type * as package_rate_Models_License from "../package_rate/Models/License.js";
import type * as package_rate_Models_Metric from "../package_rate/Models/Metric.js";
import type * as package_rate_Models_Package from "../package_rate/Models/Package.js";
import type * as package_rate_Models_RampUp from "../package_rate/Models/RampUp.js";
import type * as package_rate_Models_ResponsiveMaintainer from "../package_rate/Models/ResponsiveMaintainer.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  api: typeof api_;
  http: typeof http;
  myFunctions: typeof myFunctions;
  "package_rate/Models/AllMetrics": typeof package_rate_Models_AllMetrics;
  "package_rate/Models/BusFactor": typeof package_rate_Models_BusFactor;
  "package_rate/Models/Correctness": typeof package_rate_Models_Correctness;
  "package_rate/Models/License": typeof package_rate_Models_License;
  "package_rate/Models/Metric": typeof package_rate_Models_Metric;
  "package_rate/Models/Package": typeof package_rate_Models_Package;
  "package_rate/Models/RampUp": typeof package_rate_Models_RampUp;
  "package_rate/Models/ResponsiveMaintainer": typeof package_rate_Models_ResponsiveMaintainer;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
