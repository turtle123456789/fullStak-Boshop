import React from 'react'
import { MethodRegister } from '../LoginPage/style'
import { Link } from 'react-router-dom'
import facebook from '../../assets/images/facebook.png'
import google from '../../assets/images/google.png'
import { LayoutRegister } from './style'
import '../../App.scss'
import { Form,Input } from 'antd'
const RegistrationPage = () => {


  const [form] = Form.useForm();
  const onFinish = (values) => {
    // const email = values.Email
    // const password = values.password
    // const name = values.username
    // const phone = values.phoneNumber
    // const confirmPassword = values.password2
  };
  return (
    <div>
        <LayoutRegister>
          <div style={{borderBottom: '2px solid var(--black'}}>
            <span style={{fontWeight:600}}>Đăng kí tài khoản</span>
          </div>
          <p>Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt.</p>
          <MethodRegister>
              <Link className='Facebook'><img src={facebook} alt="" />Facebook</Link>
              <Link className='Google'><img src={google} alt="" />Google</Link>
          </MethodRegister>
          <div style={{borderBottom: '2px solid var(--black)'}}>
            <p>Nếu bạn đã đăng kí tài khoản, vui lòng đăng nhập <Link to="/login" style={{color: 'red'}}>tại đây</Link>.</p>
            <span>Thông tin cá nhân</span>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            form={form}
            
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              label="Tên"
              name="username"
              
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên!',
                },
              ]}
            >
              <Input placeholder="Nhập tên:"/>
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              
              rules={[
                {
                  pattern: /^[0-9+\s]+$/,
                  message: 'Sai định dạng',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại!',
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại:"/>
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              
              rules={[
                {
                  type: 'email',
                  message: 'Sai định dạng email',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập email!',
                },
              ]}
            >
              <Input placeholder="Nhập email:"/>
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!',
                }, 
              ]}
              hasFeedback
            >
            <Input.Password placeholder="Nhập mật khẩu:"/>
          </Form.Item>

      {/* Field */}
          <Form.Item
            label="Nhập lại mật khẩu"
            name="password2"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
              
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu:"/>
          </Form.Item>
            {/* {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>} */}
            <div style={{textAlign: 'center'}}>
              <button type="primary" htmlType="submit" id='btnSignUp'>Đăng kí</button>
            </div>
        </Form>
        </LayoutRegister>
    </div>
  )
}

export default RegistrationPage