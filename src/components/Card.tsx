import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { APP_COLORS, HEIGHT, WIDTH } from "../constants/constants";

export enum CardColor {
    light,
    dark,
}

interface CardProps {
    width: number
    height: number
    cardColor: CardColor
    onClick: (value: number) => void
}

const Card: React.FC<CardProps> = ({ width, height, cardColor, onClick }) => {

    const [click, setClick] = useState(0)

    const styles = useStyles(height, width, cardColor)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onClick(click)}
        />
    )
}

const useStyles = (height: number, width: number, cardColor: CardColor) => StyleSheet.create({
    container: {
        position: 'absolute',
        borderRadius: 20,
        width: width,
        height: height,
        left: (WIDTH - width) / 2,
        top: (HEIGHT - height) / 2,
        backgroundColor: cardColor === CardColor.light ? APP_COLORS.light : APP_COLORS.dark
    },
});

export default Card