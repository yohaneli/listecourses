import {ADD_COURSE,DELETE_COURSE,UPDATE_COURSE,AFF_LISTE_COURSES} from './types'

export const ajouterCourse = (payload) => ({
    type: ADD_COURSE,
    payload
})

export const supprimerCourse = (payload) => ({
    type: DELETE_COURSE,
    payload
})

export const majCourse = (payload) => ({
    type: UPDATE_COURSE,
    payload
})

export const lireListeCourses = (payload) => ({
    type: AFF_LISTE_COURSES,
    payload
})