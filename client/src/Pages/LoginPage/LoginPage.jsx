import React from 'react'
import { Container } from '../../Components/ContainerComponent/ContainerComponent'
import { LayoutSigin, MethodRegister } from './style'
import { Col, Form, Row,Checkbox, Input } from 'antd'
import facebook from '../../assets/images/facebook.png'
import google from '../../assets/images/google.png'
import { Link } from 'react-router-dom'

const SigninPage = () => {
  const onFinish = (values) => {
    // const email = values.email
    // const password = values.password
  };
  return (
    <div>
        <Container>
            <LayoutSigin>
              <Row>
                <Col span={10}>
                  <div style={{borderBottom: '1px dotted rgb(204, 204, 204)'}}>
                    <span>Khách hàng mới</span>
                  </div>
                  <p>Đăng kí tài khoản</p>
                  <p>Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt.</p>
                  <MethodRegister>
                    <Link className='Facebook'><img src={facebook} alt="" />Facebook</Link>
                    <Link className='Google'><img src={google} alt="" />Google</Link>
                  </MethodRegister>
                  <div style={{textAlign: 'center'}}>
                    <button><Link to="/register">tiếp tục</Link></button>
                    
                  </div>
                </Col>
                <Col span={10} offset={3}>
                  <div style={{borderBottom: '1px dotted rgb(204, 204, 204)'}}>
                    <span>Khách hàng cũ</span>
                  </div>
                  <p>Đã có tài khoản</p>
                  <Form
                    name="basic"
                    style={{
                      maxWidth: 600,
                    }}
                    labelCol={{
                      span: 5,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="on"
                    // onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      label="Email"
                      name="email"
                      
                      rules={[
                        {
                          type: 'email',
                          message: 'Sai định dạng email',
                        },
                        {
                          required: true,
                          message: 'Vui lòng Nhập email!',
                        },
                      ]}
                    >
                      <Input placeholder="Nhập Email:"/>
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập Password!',
                        },
                      ]}
                    >
                      <Input.Password placeholder='Nhập Password'/>
                    </Form.Item>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      >
                      <Checkbox>Nhớ mật khẩu</Checkbox>
                      <Link style={{color: 'red', textDecoration: 'underline'}}>Quên mật khẩu?</Link>
                    </Form.Item>
                  <MethodRegister>
                    <Link className='Facebook'><img src={facebook} alt="" />Facebook</Link>
                    <Link className='Google'><img src={google} alt="" />Google</Link>
                  </MethodRegister>
                  
                    <div style={{textAlign: 'center'}}> 
                      <button button type="primary" htmlType="submit" id='btnSignin'>Đăng nhập</button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </LayoutSigin>
        </Container>
    </div>
  )
}

export default SigninPage