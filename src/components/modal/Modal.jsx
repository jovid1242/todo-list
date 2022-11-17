import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNew } from "../../store/slices/todo";

// components
import TInput from "../ui/TInput";
import TextArea from "../ui/TextArea";
import TButton from "../ui/TButton";

// utils
import { notify } from "../../utils/notify";

// icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// styles
import "../../styles/modal.scss";

const Modal = ({ visible, setVisible }) => {
    const [task, setTask] = useState({
        id: Math.floor(Math.random() * 6555556),
        status: "progress"
    });
    const dispatch = useDispatch();

    /**
     *
     * @param {string} ev
     */
    const handleChangeInput = (ev) => {
        setTask({ ...task, [ev.target.name]: ev.target.value });
    };

    /**
     *
     * @param {string} ev
     */
    const handleChangeTextArea = (ev) => {
        setTask({ ...task, [ev.target.name]: ev.target.value });
    };

    /**
     *
     * @param {*} e
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !task?.date?.trim().length ||
            !task?.desc?.trim().length ||
            !task?.title?.trim().length
        ) {
            notify("error", "Пожалуйсто, заполните поля!");
        } else {
            dispatch(addNew(task));
            notify("success", "Задача была успешно добавлена");
            setVisible(false);
        }
    };

    if (!visible) {
        return <></>;
    }
    return (
        <div className="modal">
            <div className="modal__body">
                <div className="modal-close" onClick={() => setVisible(false)}>
                    <AiOutlineCloseCircle />
                </div>
                <div className="title">
                    <p>Давайте добавим новую задачу :)</p>
                </div>
                <form className="from" onSubmit={handleSubmit}>
                    <TInput
                        type="text"
                        name="title"
                        onChange={handleChangeInput}
                        className="mt-2"
                        placeholder="Название задачи"
                    />
                    <TextArea
                        className="mt-2"
                        maxLength={100}
                        name="desc"
                        onChange={handleChangeTextArea}
                        placeholder="Описание задачи"
                    />
                    <div className="form-group mt-2">
                        <TInput
                            className="p0"
                            type="file"
                            name="file"
                            onChange={handleChangeInput}
                            width="ml"
                            placeholder="Прикрепить файл"
                        />
                        <TInput
                            type="date"
                            name="date"
                            onChange={handleChangeInput}
                            width="ml"
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

export default Modal;
