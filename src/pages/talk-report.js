// STORING DADTA
import { loadUserData } from "@/store/rootsaga/action";
import { wrapper } from "@/store";
import {END} from "redux-saga";

// components
import LayoutBody from "@/layout/layout";

// VARS GLOBAL
import vars from "@/global/vars";

// NEXT AUTH
import { getSession} from "next-auth/react";

export default function TalkReport({...props}) {

    return <LayoutBody title={vars.HEAD_TITLE.talk_report} subtitle={vars.SUB_HEADER.talk_report}>
        <h1>TALK REPORT</h1>
    </LayoutBody>
}


export const getServerSideProps = wrapper.getServerSideProps((store)=> async ({req}) => {
    //   console.log("2. Page.getServerSideProps uses the store to dispatch things");
    const session = await getSession({req})
    if(!session){
      return {
        redirect: {
          destination: "/"
        }
      }
    }
    
    await store.dispatch(loadUserData({
      page: 1,
      limit: 10
    }));
  
    store.dispatch(END);
    await store.sagaTask.toPromise();
    //   console.log(store.getState())
  
  
    return {
      props:{
        session
      }
    }
  });