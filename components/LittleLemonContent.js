import { Text, View, Image, ScrollView, TextInput, SectionList, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
export default function LittleLemonContent() {
    const itemstodisplay = [
        {
            title: 'Appetizers',
            data: [
                { name: 'Hummus', price: '$5.00' },
                { name: 'Moutabal', price: '$5.00' },
                { name: 'Falafel', price: '$7.50' },
                { name: 'Marinated Olives', price: '$5.00' },
                { name: 'Kofta', price: '$5.00' },
                { name: 'Eggplant Salad', price: '$8.50' },
            ],
        },
        {
            title: 'Main Dishes',
            data: [
                { name: 'Lentil Burger', price: '$10.00' },
                { name: 'Smoked Salmon', price: '$14.00' },
                { name: 'Kofta Burger', price: '$11.00' },
                { name: 'Turkish Kebab', price: '$15.50' },
            ],
        },
        {
            title: 'Sides',
            data: [
                { name: 'Fries', price: '$3.00', id: '11K' },
                { name: 'Buttered Rice', price: '$3.00' },
                { name: 'Bread Sticks', price: '$3.00' },
                { name: 'Pita Pocket', price: '$3.00' },
                { name: 'Lentil Soup', price: '$3.75' },
                { name: 'Greek Salad', price: '$6.00' },
                { name: 'Rice Pilaf', price: '$4.00' },
            ],
        },
        {
            title: 'Desserts',
            data: [
                { name: 'Baklava', price: '$3.00' },
                { name: 'Tartufo', price: '$3.00' },
                { name: 'Tiramisu', price: '$5.00' },
                { name: 'Panna Cotta', price: '$5.00' },
            ],
        },
    ];
    const [showmenu, setshowmenu] = useState(false)
    const separator = () => (<Text style={menuStyles.separator}></Text>)
    const Item = ({ name, price }) => (
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    )
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />
    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    )

    return (
        <View style={menuStyles.container}>
            {!showmenu == true && (
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Image source={{ uri: "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-lemon-png-download-image_1191053.jpg" }} style={menuStyles.image} />
                <Text style={menuStyles.infoSection}>
                Little Lemon is a charming neighborhood bistro that
                    serves simple food and classic cocktails in a lively but casual environment
                    we would love to hear more about your experince with us!</Text></View>)}
            <Pressable style={menuStyles.button} onPress={() => { setshowmenu(!showmenu) }}>
                <Text style={menuStyles.buttonText} t>{showmenu == false ? "View menu" : "Home"}</Text>
            </Pressable>
            {showmenu == true && (
                <SectionList sections={itemstodisplay}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    ItemSeparatorComponent={separator} />)}
        </View>
    )
}
const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    },
    image: {
        resizeMode:"cover",
        width:100,
        height:100
    }
    ,
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#000',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sectionHeader: {
        color: '#333333',
        fontSize: 29,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 22,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE',
    },
    footerText: {
        color: '#EDEFEE',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    headerStyle: {
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#000',
        textAlign: 'center'
    },
    button: {
        fontSize: 19,
        paddingHorizontal: 20,
        marginVertical: 8,
        margin: 80,
        backgroundColor: '#000',
        borderColor: "#FFE666",
        borderWidth: 2,
        borderRadius: 12
    },
    buttonText: {
        color: '#FFE666',
        textAlign: 'center',
        fontSize: 32,
    }
});
