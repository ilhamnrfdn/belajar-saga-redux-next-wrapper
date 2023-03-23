import Head from "next/head";
// import Image from "next/image";
import styles from "./_styles.module.css"

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Button, Checkbox, Form, Input } from "antd";
const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const layoutContent = {
  minHeight: "100vh",
}

let title = "LOGIN"
// const { useToken } = theme;

export default function Home() {
  // const { token } = useToken();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <Layout style={layoutContent}>
        <Content style={contentStyle}>
          <Form
            name="normal_login"
            className={styles["login-form"]}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item >
              <span >
                <strong style={{color: "#108ee9"}}>
                  User
                </strong>
              </span> Dashboard
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="remember" noStyle>
              <Checkbox className={[styles["remember-me"]]}>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </>
  )
}

