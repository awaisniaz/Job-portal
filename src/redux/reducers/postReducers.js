import { v4 as uuidv4 } from 'uuid';
const initialState = [{
    id: uuidv4(),
    postype: 'Softwar Engineer',
    experience: '2 year',
    education: 'BS(CS)',
    skill: 'JAVA',
    description: 'NEED WITH TWO YEAR OF EXPERIENCE',
    hourlyRate: 10,
    careerLevel: 'ENTRY LEVEL',
    starting_date: '30/12/2021',
    gender: 'Male',
    weekDays: {
        sunday: '5:00pm to 7:00pm',
        monday: '5:00pm to 7:00pm',
        tuesday: '5:00pm to 7:00pm',
        wednesday: '5:00pm to 7:00pm',
        thursday: '5:00pm to 7:00pm',
        friday: '5:00pm to 7:00pm',
        saturday: '5:00pm to 7:00pm'
    },
    timing: '5:00pm to 5:00am',

}];

const postData = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_POST':
            return [...state, { ...payload }]
        
        case 'DELETE_POST':
            const filterData = state.filter(item => item.id !== payload)
            return [...filterData]


        default:
            return state

    }

}
export default postData