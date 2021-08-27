/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useContext} from 'react';
import {Text,View,StyleSheet,StatusBar} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import Header from './Components/Header';
import ButtonAdd from './Components/ButtonAdd';
import ModalAddCourses from './Components/ModalAddCourses';
import ListeCourses from './Components/ListeCourses';
import { FirebaseContext } from './FirebaseContext';
import { lireListeCourses } from './Redux/Actions/courses';

const App =  () => {

  const {courses} = useSelector(state => state);

  const dispatchListeDansRedux = useDispatch();

  const {queryCourses} = useContext(FirebaseContext);

  console.log("query courses",queryCourses);

  const initCourses = () => queryCourses().orderBy("name").onSnapshot((snapshot) =>{

    let tempListCourses = [];

    // console.log(snapshot);

    console.log("liste courses",courses);

    if(snapshot && !snapshot.empty){

      snapshot.forEach(element =>{

        // console.log(element.data());

        const newData = {id:element.id,...element.data()}

        tempListCourses.push(newData);

        console.log(tempListCourses);

      })

      if (tempListCourses) {
        dispatchListeDansRedux(lireListeCourses(tempListCourses));
      }

    }

  })

  useEffect(() => {

  const unSubCourses = initCourses();

  return () => {

  unSubCourses;

  }
  }, [])

  return (
    <View style={styles.container}>
      <Header/>
      <ListeCourses/>
      <ButtonAdd/>
      <ModalAddCourses/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
  }
})