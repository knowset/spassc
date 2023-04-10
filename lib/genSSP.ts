import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const genSSP: (
    getProps?: (
        context: GetServerSidePropsContext
    ) => Promise<any>
) => GetServerSideProps = (getProps) => {
    return ( async (context) => {
        const props = await getProps?.(context);

        return {
            props: {
                ...props
            }
        }
    } ); 
    
}