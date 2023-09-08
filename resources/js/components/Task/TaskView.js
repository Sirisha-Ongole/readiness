import AddTask from "./AddTask";
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { TaskListView } from "./TaskListView";
import * as actions from "../../Redux/actionTypes";
import { store } from "../../Redux/store";
import WordcloudText from "./WordcloudText";

export const TaskView = () => {

    const [showModal, updateshowModal] = useState(false);
    const handleModalClose = () => {
        updateshowModal(false);
        store.dispatch({
            type: actions.DB_TaskandPomo_reset,
            payload: {}
          });
    };
    const handleShowModal = () => updateshowModal(true);

    return (
        <>
                <div className="row justify-content-center d-flex">
                    <div className="col-sm-12 col-lg-6 p-5">
                    <WordcloudText></WordcloudText>
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
                                <TaskListView />
                            </div>
                        </div>
                    </div>
                </div>
            <AddTask showModal={showModal} handleModalClose={handleModalClose} page={"add"}  />
        </>
    );
};
