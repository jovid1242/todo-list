import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, addNew } from "../store/slices/todo";

// components
import TButton from "../components/ui/TButton";
import TStatus from "../components/ui/TStatus";
import List from "../components/list/List";
import Modal from "../components/modal/Modal";
import ModalEdit from "../components/modal/ModalEdit";

// styles
import "../styles/home.scss";

const Home = () => {
    const [editTask, setEditTask] = useState("");
    const [ModalVisible, setModalVisible] = useState(false);
    const [EditModalVisible, setEditModalVisible] = useState(false);

    const { todo } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const editList = (id) => {
        setEditTask(id);
        setEditModalVisible(true);
    };

    return (
        <div className="home">
            <Modal visible={ModalVisible} setVisible={setModalVisible} />
            <ModalEdit
                id={editTask}
                visible={EditModalVisible}
                setVisible={setEditModalVisible}
            />
            <div className="container">
                <div className="home-wrapper">
                    <div className="home-wrapper__head mb-4">
                        <div className="title">
                            <h1>Сегодня у вас (6) задач</h1>
                        </div>
                        <div className="todo-status">
                            <TStatus text="Сделано" status="done" />
                            <TStatus text="В процессе" status="progress" />
                            <TStatus text="Просрочено" status="overdue" />
                            <TButton onClick={() => setModalVisible(true)}>
                                Добавить
                            </TButton>
                        </div>
                    </div>
                    {todo?.items.map((item) => {
                        return (
                            <List
                                task={item}
                                editList={editList}
                                key={item.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
