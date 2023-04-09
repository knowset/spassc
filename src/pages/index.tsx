import { Main } from '@/components/Main'
import { MainItem } from '@/components/MainItem'
// import { } from "../../public";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "./";

export default function Home() {
    return (
        <Main currentPage='/'>
            <div className='pt-10 pb-20 flex flex-col gap-20'>

            <MainItem imageLink={prefix + '/1.jpg'} >
                <h1 className='text-xl font-bold'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut? At, architecto? Recusandae dignissimos, doloremque suscipit voluptate vel ipsam officiis architecto repellendus excepturi similique nisi incidunt eveniet veniam numquam omnis?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quae et temporibus enim natus quaerat ea veritatis commodi, tempora beatae delectus magni optio vitae quo nobis vel harum alias consequatur?</p>
            </MainItem>
            <MainItem imageLink={prefix + '/2.jpg'} reverse>
                <h1 className='text-xl font-bold'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut? At, architecto? Recusandae dignissimos, doloremque suscipit voluptate vel ipsam officiis architecto repellendus excepturi similique nisi incidunt eveniet veniam numquam omnis?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quae et temporibus enim natus quaerat ea veritatis commodi, tempora beatae delectus magni optio vitae quo nobis vel harum alias consequatur?</p>
            </MainItem>
            <MainItem imageLink={prefix + '/3.jpg'} >
                <h1 className='text-xl font-bold'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut? At, architecto? Recusandae dignissimos, doloremque suscipit voluptate vel ipsam officiis architecto repellendus excepturi similique nisi incidunt eveniet veniam numquam omnis?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quae et temporibus enim natus quaerat ea veritatis commodi, tempora beatae delectus magni optio vitae quo nobis vel harum alias consequatur?</p>
            </MainItem>
            <MainItem imageLink={prefix + '/4.jpg'} reverse>
                <h1 className='text-xl font-bold'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ut? At, architecto? Recusandae dignissimos, doloremque suscipit voluptate vel ipsam officiis architecto repellendus excepturi similique nisi incidunt eveniet veniam numquam omnis?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quae et temporibus enim natus quaerat ea veritatis commodi, tempora beatae delectus magni optio vitae quo nobis vel harum alias consequatur?</p>
            </MainItem>
            </div>
        </Main>
    )
}
