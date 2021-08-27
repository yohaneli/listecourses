import React,{useState,useEffect,useContext} from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Overlay,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useSelector,useDispatch } from 'react-redux';
import { afficheModal } from '../../Redux/Actions/modal';
import { ajouterCourse } from '../../Redux/Actions/courses';
import { majCourse } from '../../Redux/Actions/courses';
import { FirebaseContext } from '../../FirebaseContext';

const index = () => {

    const [course, setCourse] = useState("");

    const {queryAddCourse,queryOneCourse} = useContext(FirebaseContext);

    console.log("requêtes courses : ",queryAddCourse);

    const [textModalAction, setTextModalAction] = useState("Ajouter ")

    const {modal,courses} = useSelector(state => state);

    const dispatchModal = useDispatch();

    const dispatchAddCourse = useDispatch();

    const dispatchMaJCourse = useDispatch();

    // console.log("etat modal",modal);

    console.log("id pour modif",modal.id);

    const handleInputCourse = (course) => {

        setCourse(course);

        // console.log(course);

    }

    const toggleOverlay = () => {
        
        dispatchModal(afficheModal({visible:!modal.visible}));

        setCourse("");

    };

    const saveCourse = () => {

        if(course != "") {

            if(modal.id) {

                queryOneCourse(modal.id).update({
                    name:course,
                    data:Date.now()
                })

                dispatchMaJCourse(majCourse({
                    id:modal.id,
                    name:course,
                    date:Date.now()
                }));

            } else {

                queryAddCourse({
                    name:course,
                    image:"nc",
                    state:false,
                    date:Date.now()
                })

                console.log("requete ajout réussie");

                dispatchAddCourse(ajouterCourse({id:courses.length, name:course}));
    
                console.log("save course");
            }

        }

        toggleOverlay();

    }

    useEffect(() => {
        if(modal.id){
            setTextModalAction("Modifier ");
        }
        return () => {
            
        }
    }, [modal])

    return (
        <Overlay 
        isVisible={modal.visible} 
        onBackdropPress={toggleOverlay} 
        overlayStyle={styles.overlayStyle}
        >

            <Text style={styles.title}>{textModalAction}une course</Text>

            <Input
            placeholder='Ex : Des masques'
            onChangeText={handleInputCourse}
            value={course}
            />

                <View style={styles.button}>

                    <Button title={textModalAction} type="outline" onPress={saveCourse}/>

                </View>

        </Overlay>
    )
}

export default index
