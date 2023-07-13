'use client';

import './globals.css'
import {Container} from "@mui/material";
import React from "react";
import ThemeRegistry from "@/app/ThemeRegistry";

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
      <html lang="en">
      <body>
      <ThemeRegistry options={{ key: 'mui' }}>
        <div style={{minHeight: '100vh', display: "flex", flexDirection: "column"}}>
          {/*<Header/>*/}
          <Container sx={{display: "flex", flexDirection: "column", flex: 1}}>
            {children}
          </Container>
          {/*<Footer/>*/}
        </div>
      </ThemeRegistry>
      </body>
      </html>
  );
}
