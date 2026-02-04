/**
 * Auth Utilities
 */

export {
  getSession,
  getAuthState,
  isAuthenticated,
  getCurrentUser,
} from "./get-session";
export type { Session } from "./get-session";

export { requirePatient, getPatientSession } from "./require-patient";
