import { FC } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { CreateForm } from "./CreateForm";

interface FormTabsProps {
    tab: any;
}

export const FormTabs: FC<FormTabsProps> = ({ tab }) => {
    return (
        <Container>
        <Tabs
            defaultActiveKey="create"
            id="form-tabs"
            className="mb-3"
            fill
            >
            <Tab key={tab.route + "_create"} eventKey="create" title="Создать">
                <CreateForm articleName={tab.route} articleTitle={tab.title}/>
            </Tab>
            <Tab key={tab.route + "_update"} eventKey="update" title="Обновить">
                empty...
            </Tab>
            <Tab key={tab.route + "_delete"} eventKey="delete" title="Удалить">
                empty
            </Tab>
        </Tabs>
        </Container>
    );
}