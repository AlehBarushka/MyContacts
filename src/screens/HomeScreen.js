import { useState, useCallback } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [post, setPost] = useState('');
  const [postNumber, setPostNumber] = useState(1);

  const onRefresh = useCallback(() => {
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
