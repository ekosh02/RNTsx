import { SafeAreaView } from "react-native"
import React from "react";
import Card, { CardColor } from "../components/Card";
import UserGet from "../components/user/UserGet";

const MainScreen: React.FC = () => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Card
                cardColor={CardColor.light}
                width={200}
                height={200}
                onClick={(value) => console.log('value', value)}
            /> */}
            <UserGet />
        </SafeAreaView>
    )
}

export default MainScreen