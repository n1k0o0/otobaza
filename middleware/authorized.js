export default function ({ app, store, redirect }) {
  // If the user loggedin
  if (!store.state.auth.loggedIn) {
    return redirect(app.localePath('/'))
  }
}
