import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (email === "") {
      return toast.error("Please enter a Email", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (!email.includes(".com")) {
      toast.warning("includes .com in your email!", {
        position: "top-center",
      });
    } else {
      const res = await fetch("http://localhost:2500/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();
      // console.log(data);

      if (data.status === 401 || !data) {
        Swal.fire({
          title: "Sometime Try!",
          text: "Sometime Server is not responding.",
          icon: "info",
        });
      } else {
        Swal.fire({
          title: "Good job!",
          text: "Response Sent Sucessfully",
          icon: "success",
        });
        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>Send Email With React & NodeJs</h2>
        </div>
        <div className="d-flex justify-content-center">
          <Form className="mt-2 col-lg-6" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Your Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2 col-lg-12">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
