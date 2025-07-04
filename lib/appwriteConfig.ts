import {Client, Account} from 'react-native-appwrite';


const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? "")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "")
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID ?? "")

const account = new Account(client)

export { account }