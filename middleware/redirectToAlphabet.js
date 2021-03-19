export default function ({ route, redirect }) {
  if (route.fullPath === "/catalog") {
    return redirect('/catalog/alphabet')
  }
  if (route.fullPath === "/ru/catalog") {
    return redirect('/ru/catalog/alphabet')
  }
  if (route.fullPath === "/en/catalog") {
    return redirect('/en/catalog/alphabet')
  }
}
