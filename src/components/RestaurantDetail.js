import React from 'react';
import {  Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const RestaurantDetail = ({album}) => {
    const { name, type, thumbnail_image, image } = album;
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style = {headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text>{type}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 100,
        flex: 1,
        width: null
    }
};
export default RestaurantDetail;