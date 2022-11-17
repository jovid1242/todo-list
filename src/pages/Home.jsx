import React from "react";
import List from "../components/list/List";

// components
import TButton from "../components/ui/TButton";
import TInput from "../components/ui/TInput";
import TStatus from "../components/ui/TStatus";

// styles
import "../styles/home.scss";

const Home = () => {
    return (
        <div className="home">
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
                            <TButton>Добавить</TButton>
                        </div>
                    </div>
                    <List
                        title="Делать домашки 2 часа"
                        text="Доделать математику, выучить стихотворение Маяковского, сделать тест по геометрии, отправить все домашки на почту преподам...
Показать дневник маме :("
                        status="done"
                    />
                    <List
                        title="Уборка по дому"
                        text="Уборка по дому"
                        status="progress"
                    />
                    <List
                        title="Английский язык 2 часа"
                        text="Уборка по дому"
                        status="overdue"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
