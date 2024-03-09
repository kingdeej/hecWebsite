import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function IsSignedIn(setAuth) {
    onAuthStateChanged(auth, (response)=>{
        setAuth(response)
    })
}
