import { v4 as uuidv4 } from 'uuid';
const initialState = {
    id: uuidv4(),
    postype: null,
    experience: null,
    education: null,
    skill: null,
    description: null,
    hourlyRate: null,
    careerLevel: null,
    starting_date: null,
    gender: null,
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

};

const singlePost = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'UPDATE-POST':
            return { ...state, postype: payload }
        case 'UPDATE-EXPERIENCE':
            return { ...state, experience: payload }
        case 'UPDATE-EDUCATION':
            return { ...state, education: payload }
        case 'UPDATE-SKILL':
            return { ...state, skill: payload }
        case 'UPDATE-DESCRIPTION':
            return { ...state, description: payload }
        case 'UPDATE-HOURLY':
            return { ...state, hourlyRate: payload }
        case 'UPDATE-GENDER':
            return { ...state, gender: payload }
        case 'UPDATE-STARTING-DATE':
            return { ...state, starting_date: payload }
        case 'UPDATE-CAREER-LEVEL':
            return { ...state, careerLevel: payload }
        case 'CLEAR':
            return {
                ...state,
                postype: null,
                experience: null,
                hourlyRate: null,

            }
        default:
            return state
    }
}
export default singlePost