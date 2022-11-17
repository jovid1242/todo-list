import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../store/slices/todo";

// icons
import { IoIosArrowDropupCircle } from "react-icons/io";
import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";

// styles
import "../../styles/list.scss";

const List = ({ editList, task }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className={"list " + task.status} key={task.id}>
            <div className="check-list">
                <label htmlFor="check" className="mr-2">
                    Сделал
                </label>
                <input
                    type="checkbox"
                    id="check"
                    checked={task.status === "done" ? true : false}
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
                        <AiFillFileText /> <p>{task.file_name}</p>
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
                                onClick={() => dispatch(remove(task.id))}
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
