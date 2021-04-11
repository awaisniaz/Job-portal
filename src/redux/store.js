import { createStore } from 'redux';
import rootReducers from './reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducers, composeWithDevTools())

// const reducer = {
//     step: 1,
//     postData: {
//         postype: '',
//         experience: '',
//         education: '',
//         skill: '',
//         description: '',
//         hourlyRate: '',
//         careerLevel: '',
//         starting_date: '',
//         gender: '',
//         weekDays: {
//             sunday: '',
//             monday: '',
//             tuesday: '',
//             wednesday: '',
//             thursday: '',
//             friday: '',
//             saturday: ''
//         },
//         Equipment: ''
//     }
// }

export default store