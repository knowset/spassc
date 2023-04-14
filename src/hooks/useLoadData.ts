import { DOMAIN } from "@/constant";
import useSWR, { SWRResponse } from "swr";

const fetcher = (api: string) => fetch(api).then(res => res.json());

export const useLoadData = (articleName: string) => {
    const res = useSWR(DOMAIN + "/api/" + articleName, fetcher);

    console.log("RELOAD");

    return res as SWRResponse;
}