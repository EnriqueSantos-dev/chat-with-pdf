import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid place-content-center w-dvw h-dvh">{children}</main>
  );
}