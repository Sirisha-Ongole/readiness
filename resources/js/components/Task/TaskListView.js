
    import { Button, Card, Form } from "react-bootstrap";
    import React, { useRef, useState, useEffect} from "react";
    import * as actions from "../../Redux/actions";
    import { taskSelector, store } from "../../Redux/store";
    import AddTask from "./AddTask";
    
     export const TaskListView = () => {

        const [showModal, updateshowModal] = useState(false);
        const handleModalClose = () => updateshowModal(false);
        const handleShowModal = () => updateshowModal(true);

          let [tasklist, updateTasksList] = useState();
    
            store.subscribe(() => {
                updateTasksList(taskSelector(store.getState()));
            });
            useEffect(() => {
                updateTasksList(taskSelector(store.getState()));
            }, []);

        const cardRef = useRef([]);
        cardRef.current = tasklist && tasklist.map((tasks,i) => (cardRef.current && cardRef.current[i]) ?? React.createRef());
            
            const selectCard = (currentCard,index) => {
            cardRef.current.map((ref) => ref.current.classList.remove("bg-warning"));
                currentCard.current.classList.add("bg-warning");
                actions.setCurrentTaskDetails(index,tasklist);
            }                
                return (
                <>
                {tasklist &&
                tasklist.map(
                    (task,index) =>
                    <Card ref={cardRef.current[index]} className="mb-3 mt-1" onClick={e => selectCard(cardRef.current[index],index)} style={{ cursor: "pointer" }}>
                    <Card.Header>{task.data.attributes.body}</Card.Header>
                    <Card.Body>
                    <Card.Title>
                        <Button onClick={handleShowModal}>Edit Task</Button>
                        <Form><Form.Check type="checkbox" label={`Duration :${task.data.attributes.duration} mins`}/></Form>
                        </Card.Title>
                    <Card.Text>
                        {
                        task.data.attributes.pomodoro_template.type == 'pomodoro' ? <div className="ms-5">Promodoro Set timings {task.data.attributes.pomodoro_template.attributes.cycle_time} mins</div> : <div></div>
                        }
                    </Card.Text>
                    </Card.Body>
                </Card>
                )}
                <AddTask showModal={showModal} handleModalClose={handleModalClose}  page={"edit"} />
        </>
    );
    };
