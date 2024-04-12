import { View, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import ModalCustom from "./src/components/modalCustom";
import TaskInput from "./src/components/taskInput";
import { colors } from "./src/constants/colors"
import { AntDesign } from '@expo/vector-icons';




const App = () => {

    const [textItem, setTextItem] = useState("")
    const [itemList, setItemList] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

    const handleChangeText = (text) => setTextItem(text)

    const addItem = () => {
        setItemList(currentValue => [
            ...currentValue,
            { id: Math.random().toString(), value: textItem },
        ])
        setTextItem("")
    }

    const handleModal = (item) => {
        setItemSelected(item)
        setModalVisible(true)
    }

    const handleDelete = () => {
        const filter = itemList.filter(task => task !== itemSelected)
        setItemList(filter)
        setModalVisible(false)
    }

    const handleCancelModal = () => {
        setModalVisible(false)
        setItemSelected({})
    }

    return (
        <View style={styles.container}>
          
            <TaskInput 
                addItem={addItem}
                handleChangeText={handleChangeText}
                textItem={textItem}
            />

            <View style={styles.taskContainer}>

                <FlatList
                    style={styles.flatlist}
                    data={itemList}
                    keyExtractor={task => task.id.toString()}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => handleModal(item)}
                        >
                            <Text style={styles.taskText}>{item.value}</Text>
                        </TouchableOpacity>
                    }
                />

            </View>

            <ModalCustom
                handleCancelModal={handleCancelModal}
                handleDelete={handleDelete}
                itemSelected={itemSelected}
                modalVisible={modalVisible}                
            />

        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center",
        backgroundColor: colors.darkgray,
        flex: 1      
    },
    taskContainer: {
        marginTop: 15,
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,      
        backgroundColor: colors.darkgray,
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.green,
        width: "100%",
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 5        
    },
    taskText: {
        fontWeight: "bold",
        fontSize: 16
    },
    flatlist: {
        width: "90%",
    }
})