import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: {
        items: [
            {
                id: 1,
                title: "Делать домашки 2 часа",
                desc: "Доделать математику, выучить стихотворение Маяковского, сделать тест по геометрии, отправить все домашки на почту преподам... Показать дневник маме :(",
                file: "image-sdvsdv-sdvsdvsdv.txt",
                date: "17.11.2022",
                status: "done"
            },
            {
                id: 2,
                title: "Английский язык 2 часа",
                desc: "Доделать математику, выучить стихотворение Маяковского, сделать тест по геометрии, отправить все домашки на почту преподам... Показать дневник маме :(",
                file: "image-sdvsdv-sdvsdvsdv.txt",
                date: "11.03.2022",
                status: "overdue"
            },
            {
                id: 3,
                title: "Погулять с девушкой",
                desc: "Обязательно надо идти )))))",
                file: "image-sdvsdv-sdvsdvsdv.txt",
                date: "06.03.2022",
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
        addNew: (state) => {
            state.todo.items += 1;
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
        }
    }
});

export const { addNew, remove, edit } = todoSlice.actions;

export default todoSlice.reducer;
