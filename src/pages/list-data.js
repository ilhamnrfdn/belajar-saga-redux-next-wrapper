import { loadUserData } from "@/store/rootsaga/action";
import { wrapper } from "@/store";
import {END} from "redux-saga";

export default function ListData ({...props}){
  console.log(props)
  return <>
        ini data
  </>
}


export const getServerSideProps = wrapper.getServerSideProps((store)=> async ({ }) => {
//   console.log("2. Page.getServerSideProps uses the store to dispatch things");
  await store.dispatch(loadUserData({
    page: 1,
    limit: 10
  }));

  store.dispatch(END);
  await store.sagaTask.toPromise();
  

  return {
    props:{
      
    }
  }
});