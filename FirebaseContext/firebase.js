import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {
        
        this.storage=storage();
    }

    /****************** toutes les requêtes ****************************/

        //liste des courses

        queryCourses = () => firestore().collection("courses");

        // ajouter une course

        queryAddCourse = (data) => firestore().collection("courses").add(data);

        // selectionner une course

        queryOneCourse = (id) => firestore().collection("courses").doc(id);

        // marquer une course achetée

        



}

export default Firebase;
