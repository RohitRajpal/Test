import React, { useState, useEffect } from 'react'

import {
  View, Text,
  FlatList,
  StyleSheet, Image, TouchableOpacity
} from 'react-native'
import { useDispatch } from 'react-redux'
import { addItem, deleteItem } from '../redux/action/ProductActions'
import { width, height } from '../module/Scale';
import { Colors } from '../module/Color';
import { Products } from '../module/Utils';



const Home = () => {
  const [productsList, setNotes] = useState(Products.data)

  const dispatch = useDispatch()
  const addItemToCart = item => dispatch(addItem(item))


  return (

    <View style={styles.container}>
      {productsList.length === 0 ? (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You do not have any products</Text>
        </View>
      ) : (
          <FlatList
            key={2}
            numColumns={2}

            data={productsList}
            renderItem={({ item }) => (
              <View style={styles.cardView}>

                <View style={styles.bookItemMetaContainer}>
                  <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                  <Text style={styles.textTitle} numberOfLines={1}> {item.productname}  </Text>
                  <Text style={styles.textPrice}>Price: {item.price}</Text>

                  <Text style={styles.textvendorname}>{item.vendorname}</Text>
                  <Text style={styles.txtVendoraddress}> {item.vendoraddress}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => {

                        addItemToCart(item)
                      }}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}


    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  },

  thumbnail: {
    width: 150,
    height: 100
  },
  bookItemMetaContainer: {
    alignItems: 'center',
    padding: 5,
  },
  textTitle: {
    fontSize: 22,

    top: 10
  },
  textvendorname: {
    fontSize: 18,
    marginTop: 15

  },
  txtVendoraddress: {
    fontSize: 18,
  }, textPrice: {
    fontSize: 16,
    marginTop: 20
  }
  ,
  buttonContainer: {
    alignSelf: 'stretch',
    marginTop: 20
  },
  button: {
    borderRadius: 8,
    backgroundColor: Colors.backGroundColor,
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: Colors.buttontextColor,
    textAlign: 'center',

  },
  cardView: {
    borderColor: 'transparent',
    margin: 10,
    borderBottomWidth: 0,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.buttontextColor,
    width: width * 0.43,
    borderRadius: 10,
  },
})
