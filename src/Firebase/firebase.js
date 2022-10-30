import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc , query , where} from 'firebase/firestore/lite';
import {onSnapshot} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDxdu8FOsZu2Zq3aDzKmOHEuLsfO5czrJo",
    authDomain: "test2-e932b.firebaseapp.com",
    databaseURL: "https://test2-e932b-default-rtdb.firebaseio.com",
    projectId: "test2-e932b",
    storageBucket: "test2-e932b.appspot.com",
    messagingSenderId: "353140662763",
    appId: "1:353140662763:web:3bebe13cb7e159c43579ae"
};

export var User = {};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export const getCities = async()=> {

const q = query(collection(db, "Users"), where("Audit Report", "!=", null));

const data = await getDocs(q);

data.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    var id = doc.id;
    var value  = doc.data();
    User[id] = value;
  });
//   console.log(User);
// onSnapshot(collection(db, "Users"), (snapshot)=>{console.log(snapshot)});
}

export function getData(){
    getCities();
    return User;
}