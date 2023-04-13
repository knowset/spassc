import { Main } from "@/components/Main";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { FormTabs } from "@/components/FormTabs";

const pages = [
    {
        id: 1,
        title: "Главная",
        route: "articles"
    },{
        id: 2,
        title: "Мероприятия",
        route: "event_articles"
    },{
        id: 3,
        title: "Интервью",
        route: "interview_articles"
    },
    {
        id: 4,
        title: "Знаменитые спортсмены региона",
        route: "famous_sportsmen_articles"
    },{
        id: 5,
        title: "Спортивные достижения",
        route: "achievement_articles"
    },{
        id: 6,
        title: "Историю спорта",
        route: "sports_history_articles"
    }
]

const Admin = () => {
    return (
        <Main>
            <div className="t-w-full t-px-2 md:t-px-0 t-pb-20 t-flex t-flex-col t-items-center t-justify-center t-gap-4">
            <div className="t-w-full t-flex t-justify-center t-items-center t-text-2xl">
                <p>Панель администратора</p>
            </div>
            <div className="t-w-full">

                <Tab.Container id="admin-panel" defaultActiveKey="articles">
                    <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                        { pages.map((page) => (
                            <Nav.Item key={page.title + "_nav_item"} >
                                <Nav.Link key={page.title + "_link"} eventKey={page.route}>{page.title}</Nav.Link>
                            </Nav.Item>
                        ))}            
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        { pages.map((page) => (
                            <Tab.Pane key={page.title + "_pane"}  eventKey={page.route}>
                                <div className="">
                                    <FormTabs key={page.title + "_tab"} tab={page}/>
                                </div>
                            </Tab.Pane>
                        ))}
                        </Tab.Content>
                    </Col>  
                    </Row>
                </Tab.Container>
            </div>
            </div>
        </Main>
    );
}

export default Admin;