import { DOMAIN } from "@/constant";
import useSWR, { SWRResponse } from "swr";

const fetcher = (api: string) => fetch(api).then(res => res.json());

export const useLoadData = (articleName: string) => {
    console.log(DOMAIN);
    const res = useSWR("https://spassc.netlify.app/api/" + articleName, fetcher);

    console.log("RELOAD");

    return res as SWRResponse;
}