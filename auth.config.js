export const authConfig = {
    pages: {
        signIn: "/login",
        signUp: "/signup"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnReviews = nextUrl.pathname.startsWith("/reviews");
            if (isOnReviews) {
              if (isLoggedIn) return true;
              return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
              return Response.redirect(new URL("/reviews", nextUrl));
            }
            return true;
        },
    },
    providers: []
} 