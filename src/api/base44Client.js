// Base44 client has been removed
export const base44 = {
  auth: {
    me: async () => {
      throw new Error('Authentication not configured');
    },
    logout: () => {
      console.log('Logout called but authentication is not configured');
    },
    redirectToLogin: () => {
      console.log('Redirect to login called but authentication is not configured');
    }
  }
};
