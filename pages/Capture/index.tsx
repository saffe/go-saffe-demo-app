import { View } from "react-native";
import SaffeCapture from "@go.saffe/go-saffe-react-native";

type Props = {
  key: string;
  user: string;
  endToendId: string;
  type: string;
}

export default function Capture({ route, navigation }) {

  const onFinish = () => {
    navigation.goBack()
  }

  const onClose = () => {
    navigation.goBack()
  }

  const { apiKey, user, type, endToEndId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <SaffeCapture
        apiKey={apiKey}
        user={user}
        type={type}
        endToEndId={endToEndId}
        onClose={onClose}
        onFinish={onFinish}
      />
    </View>
  )
}
