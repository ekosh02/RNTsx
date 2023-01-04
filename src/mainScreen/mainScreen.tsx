import { SafeAreaView } from "react-native"
import React from "react";
import Card, { CardColor } from "../components/Card";

const MainScreen: React.FC = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Card
                cardColor={CardColor.light}
                width={200}
                height={200}
                onClick={(value) => console.log('value', value)}
            /> */}
        </SafeAreaView>
    )
}

export default MainScreen