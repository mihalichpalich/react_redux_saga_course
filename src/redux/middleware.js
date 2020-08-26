import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

export const forbiddenWordsMiddleware = ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))

                if (found.length) {
                    return dispatch(showAlert('Вы спамер. Мы вас не звали, идите домой'))
                }
            }

            return next(action)
        }
    }
};