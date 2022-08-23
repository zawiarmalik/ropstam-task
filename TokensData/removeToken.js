import EncryptedStorage from "react-native-encrypted-storage";

export async function removeToken(key) {
    try {
        await EncryptedStorage.removeItem(key);
        // Congrats! You've just removed your first value!
    } catch (error) {
        // There was an error on the native side
    }
}