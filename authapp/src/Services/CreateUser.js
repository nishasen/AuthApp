import {auth, db} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { showToast, isLoading } from '../Features';

export const CreateUser = async(userData, dispatch, navigate, actions) => {                          
    const {avatar, firstname, lastname, email, password} = userData; 
    dispatch(isLoading(true))
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", result.user.uid), {
      avatar: avatar,
      firstname: firstname,
      lastname: lastname,
      email: email,
    });
    actions.resetForm();
    navigate('/', {replace: true});
    dispatch(showToast({text: "Signed up successfully", severity: 'success'}));
  } catch(error) {
    dispatch(showToast({text: "Could not sign up, try again later", severity: 'error'}));
  } finally {
      dispatch(isLoading(false))
  }
};