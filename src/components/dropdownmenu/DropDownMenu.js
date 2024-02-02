import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DropdownMenu(props) {
  const { options, selectedDropDown, onSelect } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedDropDown);
  const [chosenOption, setChosenOption] = useState(selectedOption);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>{chosenOption} </Text>
        <Icon
          style={{ color: "grey" }}
          name="chevron-down"
          size={20}
          onPress={toggleDropdown}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={toggleDropdown}>
          <View style={styles.modalContainer}>
            <View style={styles.dropdown}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.dropdownOption,
                    option === chosenOption && styles.selectedOption,
                  ]}
                  onPress={() => {
                    setSelectedOption(selectedDropDown);
                    setChosenOption(option);
                    onSelect(option);
                    toggleDropdown();
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        marginLeft: 7,
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      {option}
                    </Text>
                    {option === chosenOption && (
                      <Icon
                        name="check"
                        size={25}
                        style={{ color: "white", marginLeft: 7 }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  dropdown: {
    margin: 2,

    borderRadius: 10,
    backgroundColor: "#d4d4d4",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  dropdownOption: {
    padding: 10,
    marginBottom: 3,

    borderBottomColor: "lightgray",
  },
  selectedOption: {
    backgroundColor: "rgba(111, 202, 186, 1)",
  },
});

export default DropdownMenu;
