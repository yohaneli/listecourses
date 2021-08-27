import React,{useContext,useState} from 'react'
import { View, Text } from 'react-native';
import { ListItem,Button,Icon } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import { supprimerCourse } from '../../Redux/Actions/courses';
import { afficheModal } from '../../Redux/Actions/modal';
import { FirebaseContext } from '../../FirebaseContext';
import { actionChecked } from '../../Redux/Actions/check';


const index = ({item}) => {

    const {courses,modal,check} = useSelector(state => state);

    const {queryOneCourse} = useContext(FirebaseContext);

    // console.log("requete select une course : ",queryOneCourse);

    const dispactchDeleteCourse = useDispatch();

    const dispatchModal = useDispatch();

    const dispatchMark = useDispatch();

    const deleteCourse = (id) => {

      queryOneCourse(id).delete();

      console.log("course supprimée");

      dispactchDeleteCourse(supprimerCourse(id));

    }

    const modifCourse = (id) => {

        console.log("modif course");
        // console.log("open dial");
        dispatchModal(afficheModal({id:id,visible:!modal.visible}));

    }

    const handleMark = (id) => {

      queryOneCourse(id).update({
        state:!check.state
      });

      console.log("requete mark");

      dispatchMark(actionChecked({state:!check.state}));

    }
    
    return (
        <ListItem.Swipeable
        onPress={() => modifCourse(item.id)}
        rightContent={
          <Button
            title={
              <Icon
              name='delete'
              color="white"
              />
            }
            buttonStyle={{minHeight: '100%',backgroundColor: 'red' }}
            onPress={() => deleteCourse(item.id)}
          />
        }
        bottomDivider={true}
        leftContent={
          <Button
            title={
              <Icon
              name='check'
              color="white"
              />
            }
            buttonStyle={{minHeight: '100%',backgroundColor: 'green' }}
            onPress={() => handleMark(item.id)}
          />
        }
        >
            <ListItem.Content>

              <ListItem.Title  
                style={{
                alignSelf:"center",
                textDecorationLine: item.state ? "line-through":"none"}} 
              >

                {item?.name}

              </ListItem.Title>

            </ListItem.Content>

        </ListItem.Swipeable>
    )
}

export default index
