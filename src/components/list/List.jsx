import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { remove, checked } from "../../store/slices/todo";

// utils
import { notify } from "../../utils/notify";

// icons
import { IoIosArrowDropupCircle } from "react-icons/io";
import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";

// styles
import "../../styles/list.scss";

const List = ({ editList, task }) => {
    const [active, setActive] = useState(false);
    const [statusTask, setStatusTask] = useState(task.status === "done");
    const dispatch = useDispatch();

    /**
     *
     * @param {*} ev
     *
     */
    const handleCheckTask = (ev) => {
        setStatusTask(ev.target.checked);
        if (ev.target.checked) {
            notify("success", "Я рада за тебя ☺️☺️☺️");
        }
        dispatch(
            checked({
                id: task.id,
                status: ev.target.checked ? "done" : "progress"
            })
        );
    };

    /**
     *
     * @param {*} id
     */
    const removeTask = (id) => {
        dispatch(remove(id));
        notify("success", "Задача была успешно удалена");
    };

    return (
        <div className={"list " + task.status} key={task.id}>
            <div className="check-list">
                <label htmlFor="check" className="mr-2">
                    Сделал
                </label>
                <input
                    type="checkbox"
                    id="check"
                    onChange={handleCheckTask}
                    checked={statusTask}
                />
            </div>
            <div
                className={active ? "list-icon active" : "list-icon"}
                onClick={() => setActive(!active)}
            >
                <IoIosArrowDropupCircle />
            </div>
            {active ? (
                <div className="open">
                    <div className="list-title mb-4">{task.title}</div>
                    <div className="list-desc mb-2">
                        <p>{task.desc}</p>
                    </div>
                    <div className="file">
                        <AiFillFileText /> <p>{task.file}</p>
                    </div>
                    <div className="list-footer">
                        <div className="date">{task.date}</div>
                        <div className="action">
                            <div
                                className="edit mr-2"
                                onClick={() => editList(task.id)}
                            >
                                <MdModeEditOutline />
                            </div>
                            <div
                                className="remove"
                                onClick={() => removeTask(task.id)}
                            >
                                <MdOutlineDeleteForever />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="close">
                    <div className="list-title">
                        <div className="p">{task?.title}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
