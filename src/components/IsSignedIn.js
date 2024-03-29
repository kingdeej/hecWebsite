import { auth } from '../firebase/firebase'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'

export default function IsSignedIn(setAuth) {
    onAuthStateChanged(auth, (response)=>{
        setAuth(response)
    })
}
