import React from 'react'
import { View, Text,FlatList } from 'react-native'
import CourseItem from './courseItem';
import { useSelector } from 'react-redux';

const index = () => {

    const {courses} = useSelector(state => state);

    console.log("courses dans fichier liste composant listecourses",courses);
    
    return (
        <View>
            <FlatList
            data={courses}
            renderItem={({item}) => <CourseItem item={item} />}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => <Text>Vous n'avez aucune course pour le moment</Text>}
            />
        </View>
    )
}

export default index
