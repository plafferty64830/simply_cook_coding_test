import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { height, width } from '../functions/dimensions';

type SpiceProps = {
    spiceRating: number;
}

const SpiceRating: React.FC<SpiceProps> = ({ spiceRating }) => {
    let spiceContent = []

    for(let i=0; i < spiceRating; i++){
        spiceContent.push(
            <View key={i} style={styles.column}>
                <Image style={styles.image} source={require('../assets/chilli.png')}></Image>
            </View>
        )
    }

    return ( 
        <View style={styles.row}>
            {spiceContent}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    image: {
        height: height * 0.07,
        width: width * 0.12
    }
});

export default SpiceRating;