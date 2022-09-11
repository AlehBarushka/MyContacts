import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { firebaseAuth } from '../services/firebase/auth';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [post, setPost] = React.useState('');
  const [postNumber, setPostNumber] = React.useState(1);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
      .then(response => response.json())
      .then(json => {
        setPostNumber(postNumber + 1);
        setPost(json);
        setRefreshing(false);
      });
  }, [postNumber]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View>
          <Text>{post.title}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
