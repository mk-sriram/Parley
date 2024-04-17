import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, customStyle}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, customStyle]}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: -20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 200,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
  },
});
