import React, { useState } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { Layout } from "./Layout";
import { Footer } from "./Footer";

interface MainProps {
    children: React.ReactNode;
    pageTitle?: string;
    currentPage?: string;
}

export const Main: React.FC<MainProps> = ({ children, currentPage, pageTitle = "Спортивный клуб" }) => {

    return (
        <>
          <Head>
            <title>{pageTitle}</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Navbar currentPage={currentPage} />
            <Layout>
                <div className="t-w-full t-min-h-[80vh] t-pt-24">
                { children }
                </div>
            </Layout>
            <Footer />
          </main>
        </>
    );
}