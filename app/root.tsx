import { PrivyProvider } from "@privy-io/react-auth";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { polygon, polygonMumbai } from "@wagmi/chains";
import React from "react";
import "./index.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PrivyProvider
          appId={process.env.PRIVY_APP_ID as string}
          config={{
            loginMethods: ["wallet", "email", "google", "twitter"],
            appearance: {
              theme: "light",
              logo: "/logo.png",
            },
            defaultChain: polygonMumbai,
            supportedChains: [polygon, polygonMumbai],
          }}
        >
          <Outlet />
        </PrivyProvider>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
