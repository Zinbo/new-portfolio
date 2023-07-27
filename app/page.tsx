'use client';
import React from "react";
import WhatDoIDo from "@/app/WhatDoIDo";
import Title from "@/app/Title";
import LatestArticles from "@/app/LatestArticles";

export default function Home() {

    return (
        <>
            <Title/>
            <WhatDoIDo/>
            <LatestArticles/>
        </>
    )
}
