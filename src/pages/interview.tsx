import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem';
import { domain } from '@/constant';

export default function Interview({ interviews: interviewsData }: any) {
    const items: {
        ref: any,
        ts: any,
        data: {
          title: string,
          content: string,
          images: string
        }
    }[] = interviewsData.data as any;
    return (
    <Main currentPage='/interview'>
            <div className='t-pt-10 t-pb-20 t-flex t-flex-col t-gap-20'>

            { items.map((post) => (
                <MainItem key={post.data.title} images={post.data.images}>

                    <p className='t-text-xl t-font-bold'>{ post.data.title }</p>
                    <p>{ post.data.content.slice(0, 500) + "..." }</p>
                    <p className='t-ml-auto t-mr-2 t-text-zinc-700 t-underline t-cursor-pointer'>Читать далее</p>
    
                </MainItem>
            )) }
            </div>
        </Main>
    )
}
    
    
Interview.getInitialProps = async (ctx: any) => {
    const res = await fetch(domain + "/api/interviews");
    const items = await res.json();

    return {
        interviews: items as any
    }
};