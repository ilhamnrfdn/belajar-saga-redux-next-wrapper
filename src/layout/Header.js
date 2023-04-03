import { Layout, Row, Col, Avatar, Popover, Typography,} from "antd";

const {Header} = Layout;
const { Text } = Typography;
const headerStyle = {
  width: "100%",
  backgroundColor: "#ffffff",
  // overflow: "hidden"
  position: "sticky"
}

const HeaderLayout = ({...props})=> {
  // console.log(props)
  
  
  const content = (
     <div style={{padding:"1rem 0.2rem"}}>
          <button onClick={()=> props.signOut()}>signout</button>
    </div>
  )
  return <>
    <Header 
    style={headerStyle}>   
      <Row justify="space-between" >
        <Col> 
          <Text strong>
            {props.subtitle}
          </Text>
        </Col>
        <Col>
          <Row justify="middle">
              {/* nama: {props.session.user.name} 
              <br/> */}
              <span style={{marginRight: "1rem"}}>
                email: {props.session.user.email}
              </span>
            <Popover content={content} trigger="hover" placement="bottom">
              <Avatar src={props.session.user.image}/>
            </Popover>
          </Row>
        </Col>
      </Row>
    </Header>
  </>;
};


export default HeaderLayout;

