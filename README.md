# VOID DRIFTERS - Multiplayer Game

A real-time multiplayer space survival game with Game Master system.

## Setup Instructions

### 1. Get Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `void-drifters`
3. Click ⚙️ → **Project Settings**
4. Scroll to **"Your apps"** → Web app
5. Copy the `firebaseConfig` object

### 2. Create Configuration File
Create a file named `config.js` in the same folder as `index.html`:

```javascript
// config.js - DO NOT SHARE OR UPLOAD TO GITHUB!
window.firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "void-drifters.firebaseapp.com",
    projectId: "void-drifters",
    storageBucket: "void-drifters.firebasestorage.app",
    messagingSenderId: "1043001879541",
    appId: "1:1043001879541:web:b44808dd03ef9182c94ebc"
};