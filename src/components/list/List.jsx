import React, { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";

// styles
import "../../styles/list.scss";

const List = ({ title, text, status }) => {
    const [active, setActive] = useState(false);
    return (
        <div className={"list " + status}>
            <div className="check-list">
                <label htmlFor="check" className="mr-2">
                    Сделал
                </label>
                <input type="checkbox" id="check" />
            </div>
            <div
                className={active ? "list-icon active" : "list-icon"}
                onClick={() => setActive(!active)}
            >
                <IoIosArrowDropupCircle />
            </div>
            {active ? (
                <div className="open">
                    <div className="list-title mb-4">{title}</div>
                    <div className="list-desc mb-2">
                        <p>{text}</p>
                    </div>
                    <div className="file">
                        <AiFillFileText /> <p>file name</p>
                    </div>
                    <div className="list-footer">
                        <div className="date">20-12-2022 | 16:00</div>
                        <div className="action">
                            <div className="edit mr-2">
                                <MdModeEditOutline />
                            </div>
                            <div className="remove">
                                <MdOutlineDeleteForever />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="close">
                    <div className="list-title">
                        <div className="p">{title}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
