import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const Post = ({ name, imageSource, caption , endDate}) => {
  return (
    <View style={styles.container}>

      {/* Name */}
      <View style={styles.componentContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        {/* <View style={styles.horizontalLine} /> */}
      </View>
      
     {/* Image */}
     <View style={styles.componentContainer}>
        {imageSource ? (
          <View style={styles.imageContainer}>
            <Image source={ imageSource } style={[styles.image, { alignSelf: "center" }]}/>
          </View>
        ) : (
          <View style={styles.noImageContainer}>
          <Text style={styles.noImageText}>No progress pictures provided from user yet.</Text>
        </View>
        )}
        {/* <View style={styles.horizontalLine} /> */}
      </View>
      
      {/* Caption */}
      <View style={styles.componentContainer}>
        {/* <View style={styles.captionContainer}> */}
          <Text style={styles.caption}>{caption}</Text>
        {/* </View> */}
      </View>

      {/* End Date */}
      <View style={styles.componentContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.endDateText}>End Date: {endDate}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
 
    </View>


  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    nameContainer: {
      marginVertical: 10,
      marginTop: 30,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
    },
    imageContainer: {
      marginVertical: 10,
    },
    image: {
      width: 200,
      height: 200,
    },
    dateContainer: {
      marginVertical: 10,
      marginBottom: 30,
    },
    caption: {
      fontSize: 16,
    },
    horizontalLine: {
      borderBottomWidth: 1,
      borderBottomColor: "black",
    },
    noImageContainer: {
      backgroundColor: "#f0f0f0", // Grey background color
      padding: 10,
      marginVertical: 10,
      alignItems: "center",
    },
    noImageText: {
      fontSize: 16,
      fontStyle: 'italic',
    },
});



export default Post;