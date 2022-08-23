import EncryptedStorage from "react-native-encrypted-storage";

export async function getToken(key) {
    try {
        const session = await EncryptedStorage.getItem(key);
        if (session !== null && session !== undefined) {
            return session.toString()
            // Congrats! You've just retrieved your first value!
        }
    } catch (error) {
        // There was an error on the native side
    }
}