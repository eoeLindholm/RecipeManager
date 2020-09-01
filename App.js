import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, ScrollView, Button, View, Image, Alert, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Separator = () => {
    return ( 
        <View style={styles.separator}/>
        );
}

const MainMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.view} >
            <ImageBackground
                style={styles.bgImage}
                source={require("./assets/kitchenBG.jpg")}>
                <Text style={styles.headText}>
                    Recipe Manager
                </Text>
                <View style={styles.buttonView} >
                    <Button
                        onPress={() => navigation.navigate('Recipe Collection')}
                        title="Recipe Collection"
                        color="gray"
                    />
                </View>
                <View style={styles.buttonView} >
                    <Button
                        onPress={() => Alert.alert('This functionality is not availiable yet...')}
                        title="Add a recipe"
                        color="gray"
                    />
                </View>
                <View style={styles.buttonView} >
                    <Button
                        onPress={() => Alert.alert('This functionality is not availiable yet...')}
                        title="Remove a recipe"
                        color="gray"
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const RecipeCollectionScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.bgImage}
            source={require("./assets/kitchenBG2.jpg")}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.collectionButtonView} >
                    <Button
                        onPress={() => navigation.navigate('Pasta Carbonara')}
                        title="Pasta Carbonara"
                        color='rgb(25, 25, 25)'
                    />
                </View>
            </ScrollView>
        </ImageBackground>

    );
}

/*
 This does not seem as an optimal way of creating the text on the screen.
 But it is the way I know at the moment.
*/
const RecipeScreen = () => {
    return (
        <View style={styles.recipeView}>
            <ScrollView style={styles.recipeScrollView}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.recipeImage}
                        source={require("./assets/pastaCarbonara.jpg")}
                    />
                </View>
                <Separator />
                <Text style={styles.textBold}> Ingredients: </Text>
                <Text style={styles.text}> 500 g Spaghetti </Text>
                <Text style={styles.text}> 280 g Bacon (2 packages) </Text>
                <Text style={styles.text}> 4 Eggs </Text>
                <Text style={styles.text}> 1 dl Heavy cream </Text>
                <Text style={styles.text}> 2 dl Parmesan, grated </Text>
                <Text style={styles.text}> Salt </Text>
                <Text style={styles.text}> Blackpepper </Text>
                <Separator/>
                <Text style={styles.textBold}> How to: </Text>
                <Text style={styles.text}> 1: Boil the pasta according to package instructions. </Text>
                <Text style={styles.text}> 2: Cut the bacon in 2 cm pieces and fry in a pan until crispy and golden. </Text>
                <Text style={styles.text}> 3: Mix the eggs, cream, cheese, in a bowl and season with salt and pepper. </Text>
                <Text style={styles.text}> 4: Drain the pasta and return it to the pot.</Text>
                <Text style={styles.text}> 5: Add the egg mixture and the bacon to the pasta.</Text>
                <Text style={styles.text}> 6: Stir until the cheese is melted and the pasta is well coated.</Text>
                <Text style={styles.text}> 7: Serve with a small salad and enjoy.</Text>


            </ScrollView>
        </View>
    );
}

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main Menu"
                    component={MainMenuScreen}
                    options={{title: 'Recipe Manager'}}
                />
                <Stack.Screen
                    name="Recipe Collection"
                    component={RecipeCollectionScreen}
                />
                <Stack.Screen
                    name="Pasta Carbonara"
                    component={RecipeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headText: 
    {
        margin: 16,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontFamily: 'sans-serif-medium',
        color: 'rgb(250, 250, 250)'
    },
    textBold:
    {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontFamily: 'sans-serif-medium'

    },
    text:
    {
        fontSize: 16,
        fontStyle: 'italic',
        fontFamily: 'sans-serif-medium'
    },
    scrollView:
    {
        flex: 1,
        margin: 10,
    },
    view:
    {
        flex: 1,
    },
    buttonView:
    {
        marginTop: 20,
        paddingHorizontal: 50
    },
    collectionButtonView:
    {
        marginTop: 10,
        paddingHorizontal: 50
    },
    recipeView:
    {
        backgroundColor: 'green',
        flex: 1,
    },
    imageView:
    {
        padding: 20,
    },
    recipeImage:
    {
        width: 300,
        height: 200,
    },
    recipeScrollView:
    {
        backgroundColor: 'lightgreen',
        flex: 1,
        margin: 10,
    },
    separator:
    {
        marginVertical: 5,
        borderBottomColor: 'green',
        borderBottomWidth: 2
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default App;