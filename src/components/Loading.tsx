import { Main } from "@/components/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners"

export function Loading() {
    
    return (
        <Main>
            <div className="t-w-full t-py-auto t-flex t-justify-center t-items-center">
                <BarLoader color="#cccccc" />
            </div>
        </Main>
    );
}