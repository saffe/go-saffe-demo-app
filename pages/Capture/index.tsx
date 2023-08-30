import { View } from "react-native";
import SaffeCapture from "rn-saffe-capture";

type Props = {
  key: string;
  user: string;
  endToendId: string;
  type: string;
}

export default function Capture({ route, navigation }) {
  const { apiKey, user, type, endToEndId } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <SaffeCapture
        apiKey={apiKey}
        user={user}
        type={type}
        endToEndId={endToEndId}
      />
    </View>
  )
}