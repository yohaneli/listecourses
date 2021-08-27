import {ADD_COURSE,DELETE_COURSE,UPDATE_COURSE,AFF_LISTE_COURSES} from '../Actions/types';

const initStateCourses = [];

const courses = (state = initStateCourses,action) => {
    //console.log("action reducer courses",action)
    switch (action.type) {

        case AFF_LISTE_COURSES:

            return action.payload;

            break;

        case ADD_COURSE:

            return [...state,action.payload];

            break;

        case DELETE_COURSE:

            const newCourse = state.filter(course => course.id != action.payload);

            return newCourse;
 
            break;

        case UPDATE_COURSE:

/* boucler sur la liste des courses, si tu trouve l'identifiant de la modif du payload change le contenu de la course sinon trace ta route*/

            const newData = state.map(course =>{

                if(course.id === action.payload.id) {

                    return action.payload;
                }

                return course;

            })

            console.log(" action payload up course ", action.payload);

            //const newCourse = state.filter(course => course.id != action.payload);

            return newData;
    
            break;
    
        default:

            return state;

            break;
    }

}

export default courses