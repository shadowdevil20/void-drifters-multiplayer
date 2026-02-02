// config.js - KEEP THIS FILE LOCAL! DO NOT UPLOAD TO GITHUB!
// Add your REAL Firebase config here

window.firebaseConfig = {
    apiKey: "AIzaSyDZ7_XCQnZazzyIDix2bOoMhzN6N5PeT6s",
    authDomain: "void-drifters.firebaseapp.com",
    projectId: "void-drifters",
    storageBucket: "void-drifters.firebasestorage.app",
    messagingSenderId: "1043001879541",
    appId: "1:1043001879541:web:b44808dd03ef9182c94ebc"
};

// Optional: Add validation
if (!window.firebaseConfig.apiKey || window.firebaseConfig.apiKey.includes("YOUR_")) {
    console.error("⚠️ Please update config.js with your actual Firebase config!");
}