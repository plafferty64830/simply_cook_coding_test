//generic react-native import for frontend and navigation
import React, { ReactNode, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { fetchRecipes } from '../api/getRecipes';
import Carousel from 'react-native-reanimated-carousel';
import { height, width } from '../functions/dimensions';
import Recipe from '../components/Recipe';


/**
 * used to award the patient points for adding a medication
 */
const HomeScreen = () => {

  const [recipeData, setRecipeData] = useState(Array<any>)

  useEffect(() => {
    fetchRecipes(['Crustaceans', 'Fish', 'Eggs']).then((data: any) => setRecipeData(data))
  });



  return (
   <SafeAreaView>
      <View style={styles.container}> 
         <Carousel
                loop
                width={width}
                height={height}
                autoPlay={false}
                data={recipeData}
                renderItem={({ index }) => (
                 <View style={styles.carouselItem}>
                  <Recipe 
                  description={recipeData[index].shortDescription} 
                  image={recipeData[index].image} 
                  title={recipeData[index].name}
                  cookingTime={recipeData[index].cookingTime}
                  spiceRating={recipeData[index].chilli}
                  topReview={recipeData[index].topReview}
                  averageRating={recipeData[index].averageRating}
                />
                </View>
                )}
            />
      </View>
      </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
      height: height,
      width: width
  },
  row: {
      flexDirection: 'row'
  },
  column: {
      flexDirection: 'column'
  },
  carouselItem: {
    marginLeft: width * 0.08
  }
});



export default HomeScreen