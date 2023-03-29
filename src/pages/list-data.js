import { loadUserData } from "@/store/rootsaga/action";
import { wrapper } from "@/store";
import {END} from "redux-saga";
import { useSession, getSession, signOut} from "next-auth/react";
// import { useRouter } from "next/router";


export default function ListData ({...props}){
  const { status, data:session } = useSession()
  // client side RENDERING
  // const router= useRouter()
  // const { status, data:session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     // The user is not authenticated, handle it here.
  //     router.push("/")
  //   },
  // })
  console.log(session)
  //   const hello = async () => {
      
  //     try {
  //       const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_LOCAL}${process.env.NEXT_PUBLIC_PREFIX}/api/hello`)
  //       console.log(await response.json())
        
  //     } catch (error) {
        
  //     }
  //   }
  //   hello()

  //   const s3 = async ()=>{
  //     try {
  //       const response = await fetch("https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/editorial/category.json")
  //       console.log(await response.json())
  //     } catch (error) {
  //       console.error(error) 
  //     }
  //   }
  //   s3()
  // },[])
  
  // CLIENT SIDE RENDERING
  if (status === "loading") {
    return "Loading or not authenticated..."
  }

  return <>
    {/* username: {session.user.username} <br/> */}
        nama: {session.user.name} <br/>
        email: {session.user.email}<br/>
    <button onClick={()=> signOut()}>signout</button>
  </>
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
  console.log(session)
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