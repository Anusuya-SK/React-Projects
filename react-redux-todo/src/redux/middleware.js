import { ADD_TODO } from "./actions";
import { takeEvery } from "@redux-saga/core/effects";

export function*  addTodo() {
    yield takeEvery(ADD_TODO, function*(){
        // Async operation here
    });
}
export default function* rootSaga() {
    yield* addTodo();
}