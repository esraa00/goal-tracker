import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "../constants/colors";
function GoalListItem({ text, deleteGoalHandler, id }) {
  return (
    <View style={styles.goalListItemContainer}>
      <Pressable
        android_ripple={{ color: Colors.black }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => deleteGoalHandler(id)}
      >
        <Text style={styles.goalListItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalListItem;

const styles = StyleSheet.create({
  goalListItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.purple,
  },
  pressed: {
    opacity: 0.5,
  },
  goalListItemText: {
    padding: 8,
    color: "white",
  },
});
