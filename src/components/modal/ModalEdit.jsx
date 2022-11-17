import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { edit, addNew } from "../../store/slices/todo";

// components
import TInput from "../ui/TInput";
import TextArea from "../ui/TextArea";
import TButton from "../ui/TButton";

// icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// styles
import "../../styles/modal.scss";

const ModalEdit = ({ id, visible, setVisible }) => {
    const { todo } = useSelector((state) => state.todo);
    const [task, setTask] = useState({});
    const dispatch = useDispatch();

    const handleChangeInput = (ev) => {
        setTask({ ...task, [ev.target.name]: ev.target.value });
    };

    const handleChangeTextArea = (ev) => {
        setTask({ ...task, [ev.target.name]: ev.target.value });
    };

    useEffect(() => {
        setTask(todo.items.find((elm) => elm.id === id));
    }, [id]);

    console.log("dddd", dayjs(task?.date).format("YYYY-MM-DDTHH:mm:ss"));

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(edit(task));
        setVisible(false);
    };

    return (
        <div className="modal" style={{ display: visible ? "flex" : "none" }}>
            <div className="modal__body">
                <div className="modal-close" onClick={() => setVisible(false)}>
                    <AiOutlineCloseCircle />
                </div>
                <div className="title">
                    <p>Давайте добавим новую задачу :)</p>
                </div>
                <form onSubmit={handleSubmit} className="from">
                    <TInput
                        type="text"
                        name="title"
                        value={task?.title}
                        onChange={handleChangeInput}
                        className="mt-2"
                        placeholder="Название задачи"
                    />
                    <TextArea
                        className="mt-2"
                        name="desc"
                        onChange={handleChangeTextArea}
                        value={task?.desc}
                        maxLength={100}
                        placeholder="Описание задачи"
                    />
                    <div className="form-group mt-2">
                        <TInput
                            type="file"
                            name="file"
                            className="p0"
                            width="ml"
                            onChange={handleChangeInput}
                            placeholder="Прикрепить файл"
                        />
                        <TInput
                            type="date"
                            name="date"
                            width="ml"
                            onChange={handleChangeInput}
                            value={task?.date}
                            placeholder="Название задачи"
                        />
                    </div>

                    <TButton className="xl mt-2">
                        + ДОБАВИТЬ НОВУЮ ЗАДАЧУ
                    </TButton>
                </form>
            </div>
        </div>
    );
};

export default ModalEdit;
