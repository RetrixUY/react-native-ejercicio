/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const apartments = [
  {
    id: 1,
    title: 'Duplex Apartment',
    place: 'Stockton, New Hampshire',
    stars: 4.8,
    reviews: 256,
    beds: 5,
    bathtubs: 2,
    washing_machines: 1,
    price: '1,495',
    image: 'https://i.imgur.com/ZXKnVc5.png',
    description: 'The flat for rent provides the exact comfortable lifestyle that you have been looking for. Covers area as a whole flat also has facilities that come along whit this edifice.',
    ownerName: 'John Smith Doe',
    ownerImage: 'https://i.imgur.com/MLLBU41.png',
  },
  {
    id: 2,
    title: 'Duplex Apartment',
    place: 'Stockton, New Hampshire',
    stars: 4.8,
    reviews: 256,
    beds: 2,
    bathtubs: 1,
    washing_machines: 1,
    price: '1,200',
    image: 'https://i.imgur.com/nMo9as6.png',
    description: 'The flat for rent provides the exact comfortable lifestyle that you have been looking for. Covers area as a whole flat also has facilities that come along whit this edifice.',
    ownerName: 'John Smith Doe',
    ownerImage: 'https://i.imgur.com/MLLBU41.png',
  },
];

class DetailsScreen extends React.Component {

  constructor(props){
    super();
  }

  render() {
    const { navigation } = this.props;
    const apartmentId = navigation.getParam('apartmentId',1);
    const apartment = apartments.find(a => a.id === apartmentId);
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Image
            style={{
              width: '100%',
              height: 175,
              borderRadius: 30,
              resizeMode: 'cover',
            }}
            source={{
              uri: apartment.image,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#0f1c3d' }}>{apartment.title}t</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Text style={{ fontSize: 14, color: '#aaadc3' }}>{apartment.place}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 'auto', alignItems: 'center' }}>
              <Icon name="star" size={14} color="gold" />
              <Text style={{ color: '#aaadc3', fontSize: 12 }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}> {apartment.stars} </Text>
                ({apartment.reviews} Reviews)
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
              <Icon name="bed" size={16} color="#aaadc3" />
              <Text style={{ fontWeight: 'bold', color: 'black' }}> {apartment.beds}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16 }}>
              <Icon name="bathtub" size={16} color="#aaadc3" />
              <Text style={{ fontWeight: 'bold', color: 'black' }}> {apartment.bathtubs}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16 }}>
              <MatIcon name="washing-machine" size={16} color="#aaadc3" />
              <Text style={{ fontWeight: 'bold', color: 'black' }}> {apartment.washing_machines}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
            <Text style={{ fontSize: 25, color: '#4972df', fontWeight: 'bold' }}>{apartment.price}<Text style={{ fontSize: 12, color: '#aaadc3', fontWeight: 'normal' }}> / mo</Text></Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5, justifyContent: 'space-between', marginRight: 35 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#0f1c3d' }}>Description:</Text>
          <Text style={{ fontSize: 16, color: '#0f1c3d', fontFamily: 'sans-serif-light' }}>{apartment.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center' }}>
          <Image
            style={{
              height: 42,
              width: 42,
              borderRadius: 10,
            }}
            source={{
              uri: apartment.ownerImage,
            }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 15, color: '#aaadc3' }}>Owner</Text>
            <Text style={{ fontWeight: 'bold', color: '#0f1c3d', fontSize: 16 }}>{apartment.ownerName}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <TouchableHighlight activeOpacity={0.4} underlayColor="white" onPress={() => { }} style={{ borderColor: '#f3f3f3', borderRadius: 15, borderWidth: 2, padding: 10, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="comment-o" size={25} color="#aaadc3" />
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.4} underlayColor="lightgreen" onPress={() => { }} style={{ marginLeft: 10, backgroundColor: 'green', borderRadius: 15, padding: 10, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="phone" size={28} color="white" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
          <TouchableHighlight activeOpacity={0.2} underlayColor="lightblue" onPress={() => { }} style={{ backgroundColor: '#4972df', paddingVertical: 12, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
            <Text style={{ fontSize: 20, color: 'white' }}>Book Now</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const ApartmentCard = (props) => {
  return (
    <TouchableHighlight activeOpacity={0.8} underlayColor="white" onPress={() => { props.navigation.navigate('Details',{apartmentId: props.apartment.id}); }}>
      <View style={{ flexDirection: 'row', borderColor: '#f3f3f3', borderWidth: 2, borderRadius: 20, padding: 10, marginBottom: 15 }}>
        <View>
          <Image source={{ uri: props.apartment.image }} style={{ height: 150, width: 100, resizeMode: 'cover', borderRadius: 12 }} />
          <View style={{
            position: 'absolute',
            left: 10,
            top: 10,
          }}>
            <TouchableHighlight onPress={() => { }} underlayColor="white" style={{
              backgroundColor: '#ffffff50',
              padding: 10,
              borderColor: 'white',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Icon name="bookmark" size={16} color="white" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.apartment.title}</Text>
          <Text style={{ fontSize: 14, color: '#aaadc3' }}>{props.apartment.place}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Icon name="star" size={14} color="gold" />
            <Text style={{ color: '#aaadc3', fontSize: 12 }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{props.apartment.stars}</Text>
              ({props.apartment.reviews} Reviews)
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="bed" size={16} color="#aaadc3" />
              <Text style={{ fontWeight: 'bold', color: 'black' }}> {props.apartment.beds}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="bathtub" size={16} color="#aaadc3" />
              <Text style={{ fontWeight: 'bold', color: 'black' }}> {props.apartment.bathtubs}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MatIcon name="washing-machine" size={16} color="#aaadc3" />
              <Text style={{ fontWeight: 'bold', color: 'black' }}> {props.apartment.washing_machines}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
            <Text style={{ fontSize: 25, color: '#4972df', fontWeight: 'bold' }}>{props.apartment.price}<Text style={{ fontSize: 12, color: '#aaadc3', fontWeight: 'normal' }}> / mo</Text></Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

class HomeScreen extends React.Component {

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 5 }}>
          <Image
            style={{
              width: 64,
              height: 64,
              resizeMode: 'cover',
              borderRadius: 16,
            }}
            source={{
              uri: 'https://i.imgur.com/MLLBU41.png',
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, color: '#aaadc3' }} >Hi,</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0f1c3d' }}>Mahmudul Hasan</Text>
          </View>
          <View style={{ marginLeft: 'auto', padding: 10, borderColor: '#f3f3f3', borderWidth: 1, borderRadius: 15, margin: 10, backgroundColor: 'white' }}>
            <TouchableHighlight onPress={() => { }} underlayColor="white" >
              <Icon name={'bell-o'} size={25} color="#4972df" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          <Text style={{ fontWeight: '600', fontSize: 28 }}>Find</Text>
          <Text style={{ fontSize: 28, fontFamily: 'sans-serif-light' }}>best place <Text style={{ fontWeight: 'bold', color: '#4972df' }}>nearby</Text> 👌</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 15, paddingVertical: 5 }}>
          <View style={{
            flex: 1,
            borderColor: '#f3f3f3',
            borderRadius: 15,
            borderWidth: 2,
            padding: 0,
            marginRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{
              padding: 15,

            }}>
              <Icon name={'search'} size={20} color="#4972df" />
            </View>
            <View>
              <TextInput style={{ width: 265 }} placeholder="Search your..." />
            </View>
          </View>
          <TouchableHighlight onPress={() => { }} underlayColor="white" style={{ marginLeft: 'auto', padding: 10, borderColor: '#f3f3f3', borderWidth: 2, borderRadius: 15, backgroundColor: 'white' }}>
            <Icon name={'sliders'} size={28} color="#4972df" />
          </TouchableHighlight>
        </View>
        <View style={{ paddingLeft: 15, paddingVertical: 5 }}>
          <ScrollView horizontal={true}>
            <TouchableHighlight onPress={() => { }} underlayColor="white">
              <View style={{ backgroundColor: '#4972df', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, marginRight: 15, borderRadius: 10 }}>
                <Icon name="building" size={32} color="white" style={{ padding: 5 }} />
                <Text style={{ color: 'white', fontSize: 14 }}>Building</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { }} underlayColor="white">
              <View style={{ backgroundColor: '#eef2fc', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, marginRight: 15, borderRadius: 10 }}>
                <Icon name="building" size={32} color="#4972df" style={{ padding: 5 }} />
                <Text style={{ color: '#4972df', fontSize: 14 }}>Room</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { }} underlayColor="white">
              <View style={{ backgroundColor: '#eef2fc', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, marginRight: 15, borderRadius: 10 }}>
                <Icon name="building" size={32} color="#4972df" style={{ padding: 5 }} />
                <Text style={{ color: '#4972df', fontSize: 14 }}>House</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { }} underlayColor="white">
              <View style={{ backgroundColor: '#eef2fc', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, marginRight: 15, borderRadius: 10 }}>
                <Icon name="building" size={32} color="#4972df" style={{ padding: 5 }} />
                <Text style={{ color: '#4972df', fontSize: 14 }}>Apartment</Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
        <ScrollView style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          {apartments.map(apartment => <ApartmentCard navigation={this.props.navigation} apartment={apartment} key={apartment.id}/>)}
        </ScrollView>
      </ScrollView>
    );
  }
}

class Empty extends React.Component {
  render() {
    return (
      <View />
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Tab2: {
      screen: Empty,
    },
    Tab3: {
      screen: Empty,
    },
    Tab4: {
      screen: Empty,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: tintColor }}>Home</Text>
              <View style={{ backgroundColor: tintColor, height: 1, marginBottom: 10, paddingVertical: 1, paddingHorizontal: 8, borderRadius: 10 }} />
            </View>
          );
        }
        else {
          return <View />;
        }
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          return <View />;
        }
        else if (routeName === 'Tab2') {
          iconName = focused ? 'list' : 'list';
        }
        else if (routeName === 'Tab3') {
          iconName = focused ? 'envelope' : 'envelope-o';
        }
        else if (routeName === 'Tab4') {
          iconName = focused ? 'bookmark' : 'bookmark-o';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4972df',
      inactiveTintColor: '#aaadc3',
    },
  }
);


const AppNavigator = createStackNavigator({
  Tabs: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerShown: true,
      header: (props) => {
        return (
          <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 20, justifyContent: 'space-between' }} >
            <TouchableHighlight activeOpacity={0.4} underlayColor="white" onPress={() => props.navigation.goBack()} style={{ borderColor: '#f3f3f3', borderRadius: 15, borderWidth: 2, padding: 10, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="chevron-left" size={18} color="#aaadc3" />
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.4} underlayColor="white" onPress={() => { }} style={{ marginLeft: 'auto', borderColor: '#f3f3f3', borderRadius: 15, borderWidth: 2, padding: 10, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="bookmark" size={18} color="#aaadc3" />
            </TouchableHighlight>
          </View>
        );
      },
    },
  },
});


export default createAppContainer(AppNavigator);//createAppContainer(TabNavigator);
