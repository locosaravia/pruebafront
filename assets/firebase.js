import { firebaseConfig } from "./credenciales.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);