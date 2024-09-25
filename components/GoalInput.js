import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useCallback } from "react";
import { Colors } from "../constants/colors";
function GoalInput({ addGoalHandler, visible, closeModalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = useCallback((enteredText) => {
    setEnteredGoalText(enteredText);
  }, []);

  return (
    <KeyboardAvoidingView behavior="height">
      <Modal
        visible={visible}
        onRequestClose={() => closeModalHandler()}
        animationType="slide"
      >
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            value={enteredGoalText}
            placeholder="Enter your goal"
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Save Goal"
                onPress={() => {
                  addGoalHandler(enteredGoalText);
                  setEnteredGoalText("");
                  closeModalHandler();
                }}
                color={Colors.purple}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={() => closeModalHandler()}
                color={Colors.pink}
              />
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#efd0ff",
    backgroundColor: "#efd0ff",
    borderRadius: 6,
    color: "#120438",
    padding: 16,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
