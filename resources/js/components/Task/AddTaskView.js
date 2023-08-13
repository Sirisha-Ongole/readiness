import AddTask from "./AddTask";
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { TasksList } from "./TasksList";
import { TaskView } from "./TaskView";


export const AddTaskView = () => {

    const [showModal, updateshowModal] = useState(false);
    const handleModalClose = () => updateshowModal(false);
    const handleShowModal = () => updateshowModal(true);

    return (
        <>
            <div className="bg-warning">
                <div className="row justify-content-center d-flex">
                    <div className="col-sm-12 col-lg-6 p-5">
                        <img
                            src="/images/mainimage.png"
                            alt="main image"
                            className="img-fluid img-thumbnail"
                        />
                    </div>
                    <div className="col-sm-12 col-lg-6 pe-5">
                        <div className="d-flex row ms-5">
                            <div className="p-2 col-8 rounded-pill text-center fs-4 fw-bold">
                                Your Tasks List
                            </div>
                            <div className="col-4">
                            <Button variant="danger" onClick={handleShowModal}className="btn-lg rounded-pill">Add Task </Button>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 overflow-auto" style={{ height:'400px' }}>
                                <TaskView />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddTask showModal={showModal} handleModalClose={handleModalClose}  />
        </>
    );
};
