import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// assets
import background from './assets/bg.jpg'
import act1 from './assets/actividad1.jpg'
import act2 from './assets/actividad2.jpg'
import act3 from './assets/actividad3.jpg'
import act4 from './assets/actividad4.jpg'
import act5 from './assets/actividad5.jpg'

const App = () => {
  return (
    <>
      <ScrollView>

        <View>
          <View style={{flexDirection: 'row'}}>
            <Image 
              style={styles.banner}
              source={background}
              />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>What to do in Paris?</Text>
            <ScrollView horizontal>
              <View>
                <Image 
                  style={styles.city}
                  source={act1}
                  />
              </View>
              <View>
                <Image 
                  style={styles.city}
                  source={act2}
                  />
              </View>
              <View>
                <Image 
                  style={styles.city}
                  source={act3}
                  />
              </View>
              <View>
                <Image 
                  style={styles.city}
                  source={act4}
                  />
              </View>
              <View>
                <Image 
                  style={styles.city}
                  source={act5}
                  />
              </View>
            </ScrollView>
            <Text style={styles.title}>Best places to visit</Text>
            <View>
              <View>
                <Image 
                  style={styles.bests}
                  source={require('./assets/mejores1.jpg')}
                  />
              </View>
              <View>
                <Image 
                  style={styles.bests}
                  source={require('./assets/mejores2.jpg')}
                  />
              </View>
              <View>
                <Image 
                  style={styles.bests}
                  source={require('./assets/mejores3.jpg')}
                  />
              </View>
            </View>

            <Text style={styles.title}>Hosts in L.A</Text>
            <View style={styles.list}>
              <View style={styles.listItem}>
                <Image 
                  style={styles.bests}
                  source={require('./assets/hospedaje1.jpg')}
                  />
              </View>
              <View style={styles.listItem}>
                <Image 
                  style={styles.bests}
                  source={require('./assets/hospedaje2.jpg')}
                  />
              </View>
              <View style={styles.listItem}>
                <Image 
                  style={styles.bests}
                  source={require('./assets/hospedaje3.jpg')}
                  />
              </View>
              <View style={styles.listItem}>
                <Image 
                  style={styles.bests}
                  source={require('./assets/hospedaje4.jpg')}
                  />
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'crimson',
    borderRadius: 50,
    color: 'white'
  },
  banner: {
    flex: 1,
    height: 250,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  container: {
    marginHorizontal: 10
  },
  bests: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listItem: {
    flexBasis: '49%'
  }
});

export default App;
