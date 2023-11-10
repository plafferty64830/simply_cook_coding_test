import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { height } from "../functions/dimensions";

type Props = {
    filledValue: number;
    totalPotentialValue: number;
}

let key = 0;


const generateRandKey = () => {
    key = key + 1;
    return key;
}

const getColour = (value: number, outOf: number) => {
    const decimal = value / outOf;
    const percentage = decimal * 100;

    //if between 0 and 30% - return a pastel red
    if (percentage > 0 && percentage <= 30) {
        return '#FE8484';

        //between 30% and 60% - return pastel amber
    } else if (percentage > 30 && percentage <= 60) {
        return '#FEBF00';

        //between 60% and 100% - return a pastel green
    } else if (percentage >= 70 && percentage <= 100) {
        return '#50C778';
    }
}

const SuccessPie: React.FC<Props> = ({ filledValue, totalPotentialValue }) => {

    //pain circle data
    const radius = 80
    const circumference = 2 * Math.PI * radius;
    const painDashOffSet = circumference - (circumference * filledValue * 10) / 50;

    return (
        <View key={generateRandKey()} style={styles.container}>
            <View key={generateRandKey()} style={styles.graphWrapper}>
                <Svg key={generateRandKey()} height="40" width="40" viewBox="0 0 180 180">
                    <G key={generateRandKey()} rotation={-90} originX="90" originY="90">
                        <Circle
                            cx="50%"
                            cy="50%"
                            r={radius}
                            stroke="#F1F6F9"
                            fill="transparent"
                            strokeWidth="40"
                            key={generateRandKey()}
                        />
                        <Circle
                            cx="50%"
                            cy="50%"
                            r={radius}
                            stroke={getColour(filledValue, totalPotentialValue)}
                            fill="transparent"
                            strokeWidth="20"
                            strokeDasharray={circumference}
                            strokeDashoffset={painDashOffSet}
                            strokeLinecap="round"
                            key={generateRandKey()}
                        />
                    </G>
                </Svg>
            </View>

            <Text style={styles.ratingText}>{filledValue}</Text>

        </View>
    );
}


export default SuccessPie;

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        alignContent: "center"
    },
    row: {
        flexDirection: "row"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: height * 0.015,
    },
    graphWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    ratingText: {
        fontSize: height * 0.018,
        marginTop: height * -0.03
    }
});