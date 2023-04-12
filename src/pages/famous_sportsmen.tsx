import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
import { domain } from '@/constant';


export default function FamousSportsmen(
    // { articles: articlesData }: any
    ) {
    // console.log(articlesData);
    // const items: any[] = articlesData.data as any;

    return (
        <Main currentPage='/events'>
            <div className='t-pt-10 t-pb-20 t-flex t-flex-col t-gap-20'>
            1111
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