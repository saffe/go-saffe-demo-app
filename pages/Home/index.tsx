import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home({ navigation }) {
  const [type, setType] = useState("verification");
  const [apiKey, setApiKey] = useState("");
  const [endToEndId, setEndToEndId] = useState("");
  const [user, setUser] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={'position'}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("../../assets/capture.png")}
          style={{ width: 300, height: 200, objectFit: 'contain' }}
        />
      </View>
      <View style={{ margin: 12 }}>
        <Text style={styles.label}>Sandbox_key</Text>
        <TextInput
          onChange={(e) => setApiKey(e.nativeEvent.text)}
          placeholder="Sandbox_key"
          style={styles.input}
          id="sandbox_key"
        />
      </View>
      <View style={{ margin: 12 }}>
        <Text style={styles.label}>End-to-end ID</Text>
        <TextInput
          onChange={(e) => setEndToEndId(e.nativeEvent.text)}
          placeholder="End-to-end ID"
          style={styles.input}
          id="endtoend_id"
        />
      </View>
      <View style={{ margin: 12 }}>
        <Text style={styles.label}>Onboarding | verification</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => setType("verification")}
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: type === "verification" ? "#00ABAB" : "#fff",
              borderStartStartRadius: "8",
              borderEndStartRadius: "8",
              borderColor: type === "verification" ? "#00ABAB" : "#595959",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: type === "verification" ? "#fff" : "#000",
                textAlign: "center",
              }}
            >
              Verification
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType("onboarding")}
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: type === "onboarding" ? "#00ABAB" : "#fff",
              borderStartEndRadius: "8",
              borderEndEndRadius: "8",
              borderColor: type === "onboarding" ? "#00ABAB" : "#595959",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                color: type === "onboarding" ? "#fff" : "#000",
                textAlign: "center",
              }}
            >
              Onboarding
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: 12 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          keyboardType="email-address"
          id="email"
          onChange={(e) => setUser(e.nativeEvent.text)}
          style={styles.input}
          placeholder="saffe@saffe.com"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          disabled={!apiKey || !user}
          onPress={() => navigation.navigate("Capture", {
            apiKey: apiKey,
            user: user,
            endToEndId: endToEndId,
            type: type,
          })}
          style={{
            margin: 12,
            padding: 15,
            minWidth: "40%",
            backgroundColor: !apiKey || !user ? "#d0d0d0" : "#00ABAB",
            borderRadius: "50%",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Start Capture
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    borderColor: "#595959",
  },
  label: {
    marginBottom: 10,
  },
});
