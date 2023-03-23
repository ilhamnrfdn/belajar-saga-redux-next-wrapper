import "@/styles/globals.css"
import { wrapper } from "@/store"
import {Provider} from "react-redux";

export default function App({ Component, ...rest}) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return <Provider store={store}>
    <Component {...props.pageProps} />
  </Provider>
}

// export default wrapper.withRedux(App);
