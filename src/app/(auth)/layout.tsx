import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
