import { FC } from "react";
import { Col, Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { CreateForm } from "./CreateForm";

interface FormTabsProps {
    tabs: any[];
}

export const FormTabs: FC<FormTabsProps> = ({ tabs }) => {
    return (
    <div className="t-mt-4">
    <Tab.Container id="admin-panel" defaultActiveKey="articles">
        <Row>
        <Col sm={3}>
            <Nav variant="pills" className="flex-column">
            { tabs.map((tab) => (
                <Nav.Item key={tab.title + "_nav_item"} >
                    <Nav.Link key={tab.title + "_link"} eventKey={tab.route}>{tab.title}</Nav.Link>
                </Nav.Item>
            ))}            
            </Nav>
        </Col>
        <Col sm={9}>
            <Tab.Content>
            { tabs.map((tab) => (
                <Tab.Pane key={tab.title + "_pane"}  eventKey={tab.route}>
                    <CreateForm key={"form_create_" + tab.id} articleName={tab.route} articleTitle={tab.title}/>
                </Tab.Pane>
            ))}
            </Tab.Content>
        </Col>  
        </Row>
    </Tab.Container>
    </div>
    );
}