import { Ionicons } from '@expo/vector-icons';
import { CloseIcon, HStack, Icon, IconButton, Text } from 'native-base';

type Props = {
  title: string;
  onClose: () => void;
}

export function Notification({ title, onClose }: Props) {
  return (
    <HStack
      w="full"
      p={4}
      pt={12}
      justifyContent="space-between"
      alignItems="center"
      bgColor="gray.200"
      position="absolute"
      top={0}
    >
      <Icon as={Ionicons} name="notifications-outline" size={5} color="black" mr={2} />

      <Text fontSize="md" color="black" flex={1}>
        {title}
      </Text>

      <IconButton
        variant="unstyled"
        _focus={{ borderWidth: 0 }}
        icon={<CloseIcon size="3" />}
        _icon={{ color: "coolGray.600" }}
        color="black"
        onPress={onClose}
      />
    </HStack>
  );
}