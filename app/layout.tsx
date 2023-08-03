'use client';

import './globals.css'
import {Container} from "@mui/material";
import React from "react";
import ThemeRegistry from "@/app/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
      <html lang="en">
      <body>
      <ThemeRegistry options={{ key: 'mui' }}>
              <Header/>
              <Container maxWidth="xl">
                  {children}
              </Container>
              <Footer/>
      </ThemeRegistry>
      </body>
      </html>
  );
}
