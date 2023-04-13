import { ArticleList } from '@/components/ArticlesList';
import { Main } from '@/components/Main'


const deleteArticles = async (articleName: string, body: string) => {
    const res = await fetch("/api/" + articleName, {
        method: "DELETE",
        body: body
    })
};
const data = '{"data":[{"ref":{"@ref":{"id":"361836491412865233","collection":{"@ref":{"id":"sports_history_articles","collection":{"@ref":{"id":"collections"}}}}}},"ts":1681333018610000,"data":{"title":"asdfasdfsdafhb","content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo iure, sit ea harum molestias vitae laudantium quis est incidunt dolore inventore expedita praesentium molestiae tempora et deleniti nostrum ut quisquam reprehenderit soluta accusantium! Optio perspiciatis fugit dicta similique, nostrum, tempora quis officiis vel a deserunt delectus facere id vero.","images":"[]"}}]}';

export default function Home() {

    console.log(data);
    const items: any[] = (JSON.parse(data) as any).data as any[];

    return (
        <Main currentPage='/'>
            {/* <ArticleList articles={items}/> */}
            <button onClick={async () => {
                await deleteArticles("articles", JSON.stringify({id: "361921027513516241"}));
            }}>delete</button>
        </Main>
    );
}
