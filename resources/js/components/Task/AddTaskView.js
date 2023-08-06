import AddTask from "./AddTask";
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { TasksList } from "./TasksList";


export const AddTaskView = () => {

    const [showModal, updateshowModal] = useState(false);
    const handleModalClose = () => updateshowModal(false);
    const handleShowModal = () => updateshowModal(true);

    return (
        <>
            <div class="bg-warning">
                <div class="row justify-content-center d-flex">
                    <div class="col-sm-12 col-lg-6 p-5">
                        <img
                            src="/images/mainimage.png"
                            alt="main image"
                            class="img-fluid img-thumbnail"
                        />
                    </div>
                    <div class="col-sm-12 col-lg-6 pe-5">
                        <div class="d-flex row ms-5">
                            <div class="p-2 col-8 rounded-pill text-center fs-4 fw-bold">
                                Your Tasks List
                            </div>
                            <div class="col-4">
                            <Button variant="danger" onClick={handleShowModal}className="btn-lg rounded-pill">Add Task </Button>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 overflow-auto" style={{ height:'400px' }}>
                                <TasksList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddTask showModal={showModal} handleModalClose={handleModalClose}  />
        </>
    );
};
