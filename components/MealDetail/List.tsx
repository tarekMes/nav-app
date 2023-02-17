import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/Colors";

export type props=  {
    data: string[] | undefined
}

const List:React.FC<props> = ({ data }) => {
    return (<View>
        {data?.map((dataItem, index) => {
            return <View  style={styles.listItem} key={index}><Text style={styles.detailText}>{dataItem}</Text></View>
            })}
        </View>)
}

const styles = StyleSheet.create({
   detailText: {
        color: Colors.primary600
    },    
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    }
})
export default List 