import React from "react";

// components
import TInput from "../ui/TInput";
import TextArea from "../ui/TextArea";
import TButton from "../ui/TButton";

// icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// styles
import "../../styles/modal.scss";

const Modal = ({ visible, setVisible }) => {
    return (
        <div className="modal" style={{ display: visible ? "flex" : "none" }}>
            <div className="modal__body">
                <div className="modal-close" onClick={() => setVisible(false)}>
                    <AiOutlineCloseCircle />
                </div>
                <div className="title">
                    <p>Давайте добавим новую задачу :)</p>
                </div>
                <form action="" className="from">
                    <TInput
                        type="text"
                        className="mt-2"
                        placeholder="Название задачи"
                    />
                    <TextArea
                        className="mt-2"
                        maxLength={100}
                        placeholder="Описание задачи"
                    />
                    <div className="form-group mt-2">
                        <TInput
                            className="p0"
                            type="file"
                            width="ml"
                            placeholder="Прикрепить файл"
                        />
                        <TInput
                            type="date"
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
