export default class CurrentUser {
  static get() {
    // return null; // Not login
    return {
      id: 1,
      name: 'Admin',
      // role: 'user', // User role
      role: 'admin', // Admin role
    };
  }
}
