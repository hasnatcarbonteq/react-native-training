import React from 'react';
import { 
    Text, 
    Image, 
    Button, 
    ScrollView,
    StyleSheet, 
    View, 
    Dimensions,
} from 'react-native';

const dimensions = Dimensions.get('window');


export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    const [ img1, img2, img3 ] = [

        require('./../../img/img-1.jpg'),
        require('./../../img/img-2.jpg'),
        require('./../../img/img-3.jpg')        

    ];

    return (

        <ScrollView style={styles.container}>
  
            <Image 
                resizeMode="repeat"  
                source={img3} 
                style={styles.image} />
            <View style={styles.imageThumbContainer}>
                    <Image resizeMode="contain" source={img1} style={styles.imageThumb} />
                    <Image resizeMode="contain" source={img2} style={styles.imageThumb} />
                    <Image resizeMode="contain" source={img3} style={styles.imageThumb} />   

                    <Image resizeMode="contain" source={img1} style={styles.imageThumb} />
                    <Image resizeMode="contain" source={img2} style={styles.imageThumb} />
                    <Image resizeMode="contain" source={img3} style={styles.imageThumb} />               

            </View>
            <Text style={styles.title}>

                {name}

            </Text>
            <Text style={styles.date}>
                {date.toLocaleDateString("en-us", {day: "numeric", weekday: "long", month: "long", year:"numeric"})}
            </Text> 
            <Text style={styles.desc}>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tellus fringilla, tempus magna ut, accumsan lectus. 
                Sed pellentesque, mi non tempor auctor, nisl sem cursus sem, sed ultricies augue metus non ex. 
                Morbi venenatis suscipit nunc vel facilisis. Sed sit amet dictum mauris, quis blandit velit. 

            </Text>
            <Button title="Purchase Tickets" onPress={()=>{}}></Button>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    
    
    container: {
        
        backgroundColor: "white",
        flex: 1,
        margin: 20,
        padding: 20,
        paddingBottom: 0,
        
    },
    image: {
        
        height: dimensions.height * 0.15,
        display: "flex",
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    desc: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
        marginTop: 20,
    },
    date: {
        fontSize: 16,
        color: 'green'
    },

    imageThumb: {

        display: "flex",
        height: dimensions.height * 0.1,
        width: dimensions.height * 0.1,

    },

    imageThumbContainer: {

        display: "flex",
        marginTop: dimensions.height * 0.1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
})