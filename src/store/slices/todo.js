import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
    todo: {
        items: [
            {
                id: 1,
                title: "Делать домашки 2 часа",
                desc: "Доделать математику, выучить стихотворение Маяковского, сделать тест по геометрии, отправить все домашки на почту преподам... Показать дневник маме :(",
                file: "image-sdvsdv-sdvsdvsdv.txt",
                date: "2022-11-17",
                status: "done"
            },
            {
                id: 2,
                title: "Английский язык 2 часа",
                desc: "Доделать математику, выучить стихотворение Маяковского, сделать тест по геометрии, отправить все домашки на почту преподам... Показать дневник маме :(",
                file: "image-sdvsdv-sdvsdvsdv.txt",
                date: "2022-08-16",
                status: "overdue"
            },
            {
                id: 3,
                title: "Погулять с девушкой",
                desc: "Обязательно надо идти )))))",
                file: "image-sdvsdv-sdvsdvsdv.txt",
                date: "2022-11-16",
                status: "progress"
            }
        ],
        isLoad: false,
        isError: ""
    }
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addNew: (state, action) => {
            if (dayjs(action.payload?.date).diff(dayjs(), "hour") <= 0) {
                action.payload = { ...action.payload, ["status"]: "overdue" };
            }
            state.todo.items.push(action.payload);
        },
        remove: (state, action) => {
            state.todo.items = state.todo.items.filter(
                (elm) => elm.id !== action.payload
            );
        },
        edit: (state, action) => {
            let indexItem = state.todo.items.findIndex(
                (elm) => elm.id === action.payload.id
            );
            state.todo.items[indexItem] = action.payload;
        },
        checked: (state, action) => {
            let indexItem = state.todo.items.findIndex(
                (elm) => elm.id === action.payload.id
            );
            state.todo.items[indexItem].status = action.payload.status;
        }
    }
});

export const { addNew, remove, edit, checked } = todoSlice.actions;

export default todoSlice.reducer;
