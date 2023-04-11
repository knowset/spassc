import { Main } from "@/components/Main";
import { Layout } from "@/components/Layout";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { FormTabs } from "@/components/FormTabs";
import { NavItem } from "@/components/NavItem";

const pages = [
    {
        id: 1,
        title: "Главная",
        route: "main"
    },{
        id: 2,
        title: "Мероприятия",
        route: "events"
    },{
        id: 3,
        title: "Интервью",
        route: "interview"
    },
    {
        id: 4,
        title: "Знаменитые спортсмены региона",
        route: "famous_sportsmen"
    },{
        id: 5,
        title: "Спортивные достижения",
        route: "achievements"
    },{
        id: 6,
        title: "Историю спорта",
        route: "sports_history"
    }
]

const Admin = () => {
    return (
        <Main>
            <div className="t-w-full t-pt-10 t-px-2 md:t-px-0 t-pb-20 t-flex t-flex-col t-items-center t-justify-center t-gap-20">
            <div className="t-w-full t-flex t-justify-center t-items-center t-text-2xl">
                <p>Панель администратора</p>
            </div>
            <div className="t-w-full">

                <Tab.Container id="admin-panel" defaultActiveKey="main">
                    <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                        { pages.map((page) => (
                            <Nav.Item>
                                <Nav.Link eventKey={page.route}>{page.title}</Nav.Link>
                            </Nav.Item>
                        ))}            
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        { pages.map((page) => (
                            <Tab.Pane eventKey={page.route}>
                                <div className="">
                                    <FormTabs tab={page}/>
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