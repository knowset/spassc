import { Main } from "@/components/Main";
import Tab from "react-bootstrap/Tab";
 import { FormTabs } from "@/components/FormTabs";
import { Container, Tabs } from "react-bootstrap";

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

const Admin = (adminProps: {
    update: boolean;
    delete: boolean;
    toggleUpdate: any;
    toggleDelete: any;
}) => {
    // const { update, delete } = adminProps;
    return (
        <Main>
            <div className="t-w-full t-px-2 md:t-px-0 t-pb-20 t-flex t-flex-col t-items-center t-justify-center t-gap-4">
            <div className="t-w-full t-flex t-justify-center t-items-center t-text-2xl">
                <p>Панель администратора</p>
            </div>
            <div className="t-w-full">

                <Container>
                    <Tabs 
                        defaultActiveKey="create"
                        id="admin-tabs"
                        fill
                    > 
                        <Tab key="create" eventKey="create" title="Создать">
                            <FormTabs tabs={pages}/>
                        </Tab>
                        <Tab key="update_and_delete" eventKey="update_and_delete" title="Включить обновление или удаление записей">
                            <div className="t-flex t-flex-col t-gap-4 t-mt-4">
                                <div className="t-flex t-justify-between t-items-center">
                                    <p className="t-m-0">Возможность обновлять статьи:</p>
                                    <button onClick={adminProps.toggleUpdate} className="t-bg-indigo-500 hover:t-bg-indigo-700 t-py-2 t-px-4 t-rounded-md t-text-white t-font-bold">{ adminProps.update ? "Выключить" : "Включить"}</button>
                                </div>
                                <div className="t-flex t-justify-between t-items-center">
                                    <p className="t-m-0">Возможность удалять статьи:</p>
                                    <button onClick={adminProps.toggleDelete} className="t-bg-indigo-500 hover:t-bg-indigo-700 t-py-2 t-px-4 t-rounded-md t-text-white t-font-bold">{ adminProps.delete ? "Выключить" : "Включить"}</button>
                                </div>

                            </div>
                        </Tab>
                    </Tabs>
                </Container>
            </div>
            </div>
        </Main>
    );
}

export default Admin;