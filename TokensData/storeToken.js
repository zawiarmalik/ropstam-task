import EncryptedStorage from "react-native-encrypted-storage";

export async function storeToken(key, value) {
    try {
        await EncryptedStorage.setItem(
            key,
            value
        );
        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
        console.log('storeError', error)
    }
}