import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { IUser } from "../../types/userTypes";

interface UserListProps {
    users: IUser[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {

    return (
        <ScrollView>
            {users.map((user) =>
                <View key={user.id} style={styles.container}>
                    <Text>name : {user.name}</Text>
                    <Text>username : {user.username}</Text>
                    <Text>email : {user.email}</Text>
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 13,
        paddingVertical: 8,
    },
});

export default UserList