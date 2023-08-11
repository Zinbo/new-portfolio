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
      <head>
          {/*Twitter Support*/}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://shanejennings.co.uk" />
          <meta name="twitter:title" content="Shane Jennings' Portfolio" />
          <meta name="twitter:description" content="My portfolio - detailing my expertise, experience, projects, and certifications." />
          <meta name="twitter:image" content="https://shanejennings.co.uk/me-512.png" />
          <meta name="twitter:creator" content="@shanepjennings" />

            {/* Facebook Support */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Shane Jennings' Portfolio" />
          <meta property="og:description" content="My portfolio - detailing my expertise, experience, projects, and certifications." />
          <meta property="og:url" content="https://shanejennings.co.uk" />
          <meta property="og:image" content="https://shanejennings.co.uk/me-512.png" />
      </head>
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
