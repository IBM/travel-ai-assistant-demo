import { type AppType } from "next/dist/shared/lib/utils";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import Layout from "~/components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider, useSession } from "next-auth/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NextPage } from "next";
import PageLoadingState from "~/components/PageLoadingState";

const queryClient = new QueryClient();
import "~/styles/globals.scss";
import "~/styles/tailwind.css";

export type NextPageExtended<P = {}, IP = P> = NextPage<P, IP> & {
  useLayout?: (page: ReactElement) => ReactNode;
  auth: {
    required?: boolean;
  };
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageExtended;
  pageProps: {
    session: any;
  };
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <SessionProvider session={session}>
          <AuthProvider required={Component.auth?.required}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </SessionProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

const AuthProvider = ({ required, children }: any) => {
  const { data } = useSession({ required });

  if (required && !data) {
    return <PageLoadingState />;
  }

  return children;
};

export default MyApp;
