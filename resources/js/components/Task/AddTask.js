import { Button,Modal,ListGroup , Col, Tab, Row, ListGroupItem } from 'react-bootstrap'
import { AddTaskDetails } from './AddTaskDetails'
import { AddTaskPomodoro } from './AddTaskPomodoro'


function AddTask({showModal, handleModalClose}) {
    return (
<>
<Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container id="set-task" defaultActiveKey="#taskDetails">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroupItem action href='#taskDetails'>Task Details </ListGroupItem>
                  <ListGroupItem action href='#setPomodoro'>Set Pomodoro</ListGroupItem>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#taskDetails"><AddTaskDetails /></Tab.Pane>
                  <Tab.Pane eventKey="#setPomodoro"><AddTaskPomodoro /></Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>
      )
  
}

export default AddTask