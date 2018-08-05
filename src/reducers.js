export default function userReducer(state = '', {type, payload}) {
    switch (type){
        case 'updateUser':
            return payload;
    }
    return state;
}