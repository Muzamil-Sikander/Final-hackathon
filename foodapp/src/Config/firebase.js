import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  import swal from "sweetalert";
  import {
    getFirestore,
    doc,
    setDoc,
    addDoc,
    collection,
    getDocs
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
    }
      from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";



      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
       
      const firebaseConfig = {
        apiKey: "AIzaSyAOY65ALvHhb1h6p59NK3ho9_KvafMVpGw",
        authDomain: "final-hacathon-4fb00.firebaseapp.com",
        projectId: "final-hacathon-4fb00",
        storageBucket: "final-hacathon-4fb00.appspot.com",
        messagingSenderId: "979555805145",
        appId: "1:979555805145:web:0430ceda32ab802969dbc8"
      };
      

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



  const addUserToDB = async () => {
    const uid = auth.currentUser.uid;
    var userProfile = { email: "", name: "", photoURL: "" };
    userProfile.email = auth.currentUser.email;
    userProfile.name = auth.currentUser.displayName;
    userProfile.photoURL = auth.currentUser.photoURL;
  
    return setDoc(doc(db, "users", uid), userProfile);
  };

  
  function signinFirebase(loginEmail, loginPassword) {
    return signInWithEmailAndPassword(auth, loginEmail, loginPassword)

}



  export {
    getAuth,
    signInWithPopup,
    swal,
    createUserWithEmailAndPassword,
    addUserToDB,auth,
    signinFirebase,doc,setDoc,collection,getDocs,db,
    storage,ref,uploadBytes,getDownloadURL,
  
  }  