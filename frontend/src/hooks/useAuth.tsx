import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const useAuth = (redirectUrl: string) => {
  const { data } = useSession();
  const router = useRouter();
  const [error, setError] = useState(false);
  const callbackUrl = router.query.callbackUrl?.toString() || redirectUrl;

  return {
    signIn: async (
      provider: "credentials",
      username?: string,
      password?: string
    ) => {
      switch (provider) {
        case "credentials":
          const res = await signIn(provider, {
            redirect: false,
            username,
            password,
            callbackUrl,
          });
          if (res?.error === "CredentialsSignin") {
            setError(true);
          }
          break;
        default:
          break;
      }
    },
    authRedirect: () => {
      if (data?.user) {
        router.push(redirectUrl);
      }
    },
    error,
  };
};

export default useAuth;