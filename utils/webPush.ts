// import firebase from 'firebase/compat/app'
import { initializeApp, getApps, getApp } from 'firebase/app'
import localforage from 'localforage'
import { getMessaging, getToken, Messaging, onMessage } from 'firebase/messaging'

export default class FirebaseCloudMessaging {

  private static _instance: FirebaseCloudMessaging;

  static getInstance = () => {
    if (!FirebaseCloudMessaging._instance) {
      FirebaseCloudMessaging._instance = new FirebaseCloudMessaging();
    }
    return FirebaseCloudMessaging._instance;
  }

  tokenInlocalforage = async () => {
    let token = await localforage.getItem('fcm_token')
    console.log('tokenInlocalforage fcm_token ===', token)
    return token
  }

  private _messaging = () => getMessaging(getApp())

  init = async () => {
    if (!getApps().length) {
      initializeApp({
        apiKey: "AIzaSyBtwTIagjeNTS39ASdniI-q3E1ycDI2PHo",
        authDomain: "quick-messanger-app.firebaseapp.com",
        projectId: "quick-messanger-app",
        storageBucket: "quick-messanger-app.appspot.com",
        messagingSenderId: "903408957824",
        appId: "1:903408957824:web:782af62c6eb7fc44a36965",
        measurementId: "G-6NM1BPH2R0"
      })
      console.log("--- initialized firebase ---")
    } else {
      console.log("--- firebase already initialized---")
    }
    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false
      }

      await Notification.requestPermission()
      const token = await getToken(this._messaging())
      // this._messaging = getMessaging(getApp())
      localforage.setItem('fcm_token', token)
      console.log('fcm_token', token)
    } catch (error) {
      console.error(error)
    }
  }

  getFireBaseMessage = async () => {
    try {
      // return this._messaging.getFireBaseMessage()
      onMessage(this._messaging(), (payload) => {
        console.log('Message received. ', payload);
        // ...
      })
    } catch (error) {
      throw error
    }
  }

  sendFireBaseMessage = async (data: any) => {
    try {
      return await this._messaging().send(data)
    } catch (error) {
      throw error
    }
  }

  subscribeToTopic = async (topic: any) => {
    // Subscribe the devices corresponding to the registration tokens to the
    // topic.
    try {
      let response = this._messaging().subscribeToTopic([await this.tokenInlocalforage], topic)
      console.log('Successfully subscribed to topic:', response);
    } catch (error) {
      console.log('Error subscribing to topic:', error);
    }
    // this._messaging.subscribeToTopic([await this.tokenInlocalforage], topic)
    //   .then((response) => {
    //     // See the MessagingTopicManagementResponse reference documentation
    //     // for the contents of response.
    //     console.log('Successfully subscribed to topic:', response);
    //   })
    //   .catch((error) => {
    //     console.log('Error subscribing to topic:', error);
    //   });
  }
}