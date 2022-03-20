import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { AuthProvider } from "./src/context/auth";
import MainNavigator from "./src/navigators/main";
import { store } from "./src/store";

const App: React.FC = () => {
  return (
    <SafeAreaView
      style={styles.safe}
    >
      <Provider store={store}>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  }
})

export default App;