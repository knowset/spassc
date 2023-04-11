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
            <Tab eventKey="create" title="Создать">
                <CreateForm title={tab.title}/>
            </Tab>
            <Tab eventKey="update" title="Обновить">
                empty...
            </Tab>
            <Tab eventKey="delete" title="Удалить">
                empty
            </Tab>
        </Tabs>
        </Container>
    );
}