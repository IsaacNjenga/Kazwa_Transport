import { Button, Form, Input, Modal, DatePicker } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";

function ServiceModal({ serviceName, loading, setOpenModal, openModal }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const formValues = await form.validateFields();
      const allValues = {
        ...formValues,
        service: serviceName,
        service_date: format(
          new Date(formValues.service_date.$d),
          "yyyy-MM-dd"
        ),
      };
      console.log(allValues);

      Swal.fire({
        icon: "success",
        title: "Request Sent Successfully 🎉",
        text: "Thank you for reaching out to us. We’ll get back to you as soon as possible.",
      });

      setOpenModal(false);
      form.resetFields();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please fill in all required fields.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      title={
        <span style={{ fontFamily: "Raleway", fontSize: 24, padding: 0, fontWeight: 600 }}>
          {serviceName}
        </span>
      }
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
      confirmLoading={loading}
      width={700}
      style={{ borderRadius: 12, height: "auto", padding: "10px 32px" }}
    >
      <p
        style={{
          marginBottom: 20,
          fontSize: 16,
          color: "#555",
          textAlign: "center",
        }}
      >
        Fill in your details and we’ll arrange your service quickly.
      </p>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Full Name"
          name="full_name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="+971 50 123 4567" />
        </Form.Item>

        <Form.Item
          label="Service Date"
          name="service_date"
          rules={[{ required: true, message: "Please select a date" }]}
        >
          <DatePicker
            prefix={<CalendarOutlined />}
            style={{ width: "100%" }}
            disabledDate={(d) => d && d < new Date()}
          />
        </Form.Item>

        <Form.Item
          label="Pickup Location"
          name="pickup_location"
          rules={[{ required: true, message: "Please enter pickup location" }]}
        >
          <Input prefix={<EnvironmentOutlined />} placeholder="Dubai Marina" />
        </Form.Item>

        <Form.Item
          label="Drop-off Location"
          name="dropoff_location"
          rules={[
            { required: true, message: "Please enter drop-off location" },
          ]}
        >
          <Input
            prefix={<EnvironmentOutlined />}
            placeholder="Abu Dhabi City"
          />
        </Form.Item>

        <Form.Item style={{ marginTop: 20 }}>
          <Button
            loading={submitting}
            block
            type="primary"
            htmlType="submit"
            size="large"
          >
            {submitting ? "Submitting your request..." : "Submit Request"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ServiceModal;
