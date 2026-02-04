/**
 * User Roles
 * Role definitions and type guards for the CureWay platform
 */

export const USER_ROLES = {
  PATIENT: "patient",
  PHARMACY: "pharmacy",
  ADMIN: "admin",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

/**
 * Check if a value is a valid user role
 */
export function isValidRole(role: unknown): role is UserRole {
  return (
    typeof role === "string" &&
    Object.values(USER_ROLES).includes(role as UserRole)
  );
}

/**
 * Get display name for a role
 */
export function getRoleDisplayName(role: UserRole): string {
  switch (role) {
    case USER_ROLES.PATIENT:
      return "Patient";
    case USER_ROLES.PHARMACY:
      return "Pharmacist";
    case USER_ROLES.ADMIN:
      return "Administrator";
    default:
      return "Unknown";
  }
}

/**
 * Role permissions (placeholder for future implementation)
 */
export const ROLE_PERMISSIONS = {
  [USER_ROLES.PATIENT]: {
    canViewOrders: true,
    canPlaceOrders: true,
    canManageInventory: false,
    canViewAllUsers: false,
    canManageSystem: false,
  },
  [USER_ROLES.PHARMACY]: {
    canViewOrders: true,
    canPlaceOrders: false,
    canManageInventory: true,
    canViewAllUsers: false,
    canManageSystem: false,
  },
  [USER_ROLES.ADMIN]: {
    canViewOrders: true,
    canPlaceOrders: false,
    canManageInventory: true,
    canViewAllUsers: true,
    canManageSystem: true,
  },
} as const;
