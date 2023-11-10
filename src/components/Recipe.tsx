import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../functions/dimensions';
import FlipCard from 'react-native-flip-card'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SuccessPie from './SuccessPie';
import SpiceRating from './SpiceRating';

type Props = {
    image: string;
    title: string;
    description: string;
    cookingTime: string;
    spiceRating: number;
    topReview: string;
    averageRating: string;
}

/**
 * used to export a user interface for the receipe
 */
const Recipe: React.FC<Props> = ({ image, title, description, cookingTime, spiceRating, topReview, averageRating }) => {

    return (
        <FlipCard
            flipHorizontal={true}
            flipVertical={false}
        >
            {/* face side */}
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.bodyText}>{description}</Text>
                </View>
            </View>

            {/* back side */}
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.image} source={{ uri: image }} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={[styles.row, { marginTop: height * 0.02 }]}>
                    <View style={styles.column}>
                        <Icon name='timer-outline' size={height * 0.04} />
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.bodyText, { marginTop: height * 0.01 }]}><Text style={{ fontWeight: 'bold' }}>Cooking Time:</Text> {cookingTime}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>Average Rating:</Text>
                    </View>
                    <View style={styles.column}>
                        <SuccessPie filledValue={parseFloat(averageRating)} totalPotentialValue={5} />
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>Top Review:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.bodyText}>{topReview}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.bodyText}><Text style={{ fontWeight: 'bold' }}>Chilli Heat Level:</Text> {spiceRating}</Text>
                </View>
                <View style={styles.row}>
                    <SpiceRating spiceRating={spiceRating} />
                </View>



            </View>
        </FlipCard>
    )
}


const styles = StyleSheet.create({
    container: {
        height: height,
        width: width * 0.7,
        marginTop: height * 0.05
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    image: {
        width: width * 0.8,
        height: height * 0.3,
        alignContent: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: height * 0.025
    },
    bodyText: {
        fontSize: height * 0.02,
        marginTop: height * 0.02
    }
});



export default Recipe;