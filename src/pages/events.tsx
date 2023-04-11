import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { domain } from '@/constant';


export default function Home(
    // { articles: articlesData }: any
    ) {
    // console.log(articlesData);
    // const items: any[] = articlesData.data as any;

    return (
        <Main currentPage='/events'>
            <div className='t-pt-10 t-pb-20 t-flex t-flex-col t-gap-20'>
            events
            {/* { items.map((item: any) => (
                <MainItem key={item.data.id} images={item.data.images}>

                    <p>{ item.data.title }</p>
                    <p>{ item.data.content }</p>
    
                </MainItem>
            )) } */}
            </div>
        </Main>
    )
}


// Home.getInitialProps = async (ctx: any) => {
//     const res = await fetch(domain + "/api/articles");
//     const items = await res.json();

//     return {
//         articles: items as any[]
//     }
// };