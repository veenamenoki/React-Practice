import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Form, Input, Select, TimePicker, Typography } from 'antd';
import moment from 'moment';


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Forms = () => {
  const [form] = Form.useForm();
  const format = 'HH:mm';
  const { Text} = Typography;
  // const onMakeChange = (value) => {
  //   switch (value) {
  //     case 'make1':
  //       form.setFieldsValue({
  //         carModel: 'Car Model for Make 1!',
  //       });
  //       return;

  //     case 'make2':
  //       form.setFieldsValue({
  //         carModel: 'Car Model for Make 2!',
  //       });
  //       return;

  //     case 'make3':
  //       form.setFieldsValue({
  //         carModel: 'Car Model for Make 3!',
  //       });
  //   }
  // };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      carModel: 'Hello world!',
      gender: 'male',
    });
  };
  
  
  return (
    <div>
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{textAlign:'center'}}>
      <Form.Item
        name="make"
        label="Make"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Select
          // onChange={onMakeChange}
          allowClear
        >
          <Option value="make1">Make 1 </Option>
          <Option value="make2">Make 2 </Option>
          <Option value="make3">Make 3 </Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        noStyle
        shouldUpdate={true}
      >
        {({ isFieldTouched}) =>
          isFieldTouched('make')? (
      <Form.Item
        name="carModel"
        label="Car Model"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Select
          // onChange={onCarModelChange}
          allowClear
        >
          <Option value="model1">Model 1 </Option>
          <Option value="model2">Model 2 </Option>
          <Option value="model3">Model 3 </Option>
        </Select>
      </Form.Item>
       ) : null
      }
    </Form.Item>
      
    <Form.Item
        noStyle
        shouldUpdate={true}
      >
        {({ isFieldTouched }) =>
          isFieldTouched('carModel') ? (
            <Form.Item
              name="year"
              label="Year"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <Select
          allowClear
        >
          <Option value="2021">2021 </Option>
          <Option value="2022">2022 </Option>
          <Option value="2023">2023 </Option>
        </Select>
            </Form.Item>
          ) : null
        }
      </Form.Item>

      <Form.Item
        name="chargingPower"
        label="Charging Power"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Select
          allowClear
        >
          <Option value="cp1">CP 1 </Option>
          <Option value="cp2">CP 2 </Option>
          <Option value="cp3">CP 3 </Option>
        </Select>
      </Form.Item>
      <Form.Item name="weekendMileage"
        label="Weekend Mileage"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
        required tooltip="This is a required field">
        <Input />
      </Form.Item>
      <Form.Item name="weekdayMileage"
        label="Weekday Mileage"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
        required tooltip="This is a required field">
        <Input />
      </Form.Item>

        <Form.Item name="startTime"
        label="Start Time"
        rules={[
          {
            required: true,
          },
        ]}>
        <TimePicker defaultValue={moment('23:00', format)} format={format} />
        </Form.Item>

      <Form.Item {...tailLayout}>
      <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button style={{ backgroundColor: "#e07800",color:'white' }} appearance="primary" htmlType="submit">
          Preview
        </Button>
        
        {/* <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button> */}
      </Form.Item>
      
    </Form>
    <Text  style={{
          
        }}italic><Text type="danger">*</Text>Required Fields</Text>
    </div>
  );
};

export default Forms;