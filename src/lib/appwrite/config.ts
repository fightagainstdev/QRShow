import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '685d40ba0010407d2c2e',
  databaseId: '686385b5001562043c4d',
  storageId: '686383e7000ac41d0678',
  userCollectionId: '686386da0039da552998',
  postCollectionId: '6863868f001655ac88e9',
  savesCollectionId: '68638738001e7fb535c7',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
