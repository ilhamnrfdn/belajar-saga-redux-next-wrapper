import "@/styles/globals.css"
import { wrapper } from "@/store"
import {Provider} from "react-redux";
import { SessionProvider } from "next-auth/react"

export default function App({ Component,...rest}) {
  const {store, props} = wrapper.useWrappedStore(rest);
  // console.log("props", props)
  return <SessionProvider session={props.pageProps.session} basePath={`${process.env.NEXT_PUBLIC_HOST_LOCAL}/api/auth`}> 
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  </SessionProvider>
  
}

// export default wrapper.withRedux(App);
