import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {auth} from '@react-native-firebase/auth';

// GoogleSignin.configure({
//   webClientId:
//     '1005940255457-sc10mqe7t0n6h4phh13cvnf076pbjrpn.apps.googleusercontent.com',
// });

export async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
