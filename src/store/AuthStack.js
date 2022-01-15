export const AuthStack = (auth, GoogleSignin) => {
  GoogleSignin.configure({
    webClientId:
      '1005940255457-sc10mqe7t0n6h4phh13cvnf076pbjrpn.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  return onGoogleButtonPress;
};

export const AuthLogOut = (auth, GoogleSignin) => {
  auth().signOut().then().catch();
  GoogleSignin.signOut().then().catch();
};
