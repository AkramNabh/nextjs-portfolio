"use client"
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='class'>
      <div>
        {/* Additional content or styling for the provider can be added here */}
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;