import { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalListItem from "./components/GoalListItem";
import GoalInput from "./components/GoalInput";
import { Colors } from "./constants/colors";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = useCallback((enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: new Date() },
    ]);
  }, []);

  const deleteGoalHandler = useCallback((id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          onPress={() => setIsModalVisible(true)}
          color={Colors.purple}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={isModalVisible}
          closeModalHandler={() => setIsModalVisible(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalListItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
