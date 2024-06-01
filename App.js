import { FlatList, FlatListComponent, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Exercise from '../assets/image1.png'
import Study from '../assets/image2.png'
import SearchBox from '../assets/filter.png'
import Search from '../assets/search.png'
import User from '../assets/profile.png'

const categorydata = [
    {
        id: 1,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 2,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 3,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 4,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 5,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 6,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 7,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 8,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 9,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
]

const ongoing = [
    {
        id: '1',
        title: 'Web Development',
    },
    {
        id: '2',
        title: 'Mobile Development'
    },
    {
        id: '3',
        title: 'Web Development',
    },
    {
        id: '4',
        title: 'Mobile Development'
    },
    {
        id: '5',
        title: 'Web Development',
    },
    {
        id: '6',
        title: 'Mobile Development'
    },
    {
        id: '7',
        title: 'Web Development',
    },
    {
        id: '8',
        title: 'Mobile Development'
    },
    {
        id: '9',
        title: 'Web Development',
    },
    {
        id: '10',
        title: 'Mobile Development'
    },
    {
        id: '11',
        title: 'Web Development',
    },
    {
        id: '12',
        title: 'Mobile Development'
    },
    {
        id: '13',
        title: 'Web Development',
    },
    {
        id: '15',
        title: 'Mobile Development'
    }
]

const Main = () => {

    const renderOngoing = ({item}) => {
        return(
            <View style={styles.ongoing}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
            </View>
        )
    }

    const renderCategory = ({item}) => {
        return(
            <View style={styles.categoryBox}>
                <Text>{item.name}</Text>
                <Text>{item.period}</Text>
                <Image source={item.image} style={styles.categoryImage}/>
            </View>
        )
    }

  return (
    <>
      <View style={styles.head}>
        <View style={styles.headerText}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hello, Devs</Text>
            <Text style={{fontSize: 16}}>14 tasks today</Text>
        </View>
        
            <Image source={User} style={styles.image}/>
        
      </View>

      
      <View style={styles.searchcontainer}>
        <View style={styles.searchContent}>
            <Image source={Search} />
            <TextInput placeholder='Search' style={styles.searchInput}/>
        </View>
        <View>
            <Image source={SearchBox} style={styles.image2} />
        </View>
      </View>

      
      <View style={{marginTop: 30, marginHorizontal: 10}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', paddingLeft: 10}}>Categories</Text>
        <View >
            <FlatList horizontal data={categorydata} renderItem={renderCategory} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false}/>
        </View>
      </View>

      
      <View style={styles.task}>
        <Text style={{fontSize: 24,fontWeight: 'bold', marginBottom: 15}}>Ongoing Task</Text>
        <View>
            <FlatList data={ongoing} renderItem={renderOngoing} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
        </View>
      </View>
    </>
  )
}

export default Main

const styles = StyleSheet.create({
    head: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row',
        marginHorizontal: 19,
        marginVertical: 20
    },
    headText: {
        display: 'flex',
        flexDirection: 'column'
    },
    imageView: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    image1: {
        width: 70,
        height: 70,
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 19,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    searchContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 290,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15

    },
    image2: {
        width: 55,
        height: 55,
        marginHorizontal: 10
    },
    searchInput: {
        width: '100%',
    },
    boxCategory: {
        height: 210,
        width: 200,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        position: 'relative'

    },
    imageCategory: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 150,
        height: 150
    },
    task: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    ongoing: {
        height: 70,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 20, 
        borderRadius: 10
    }
})