import React, { useState } from "react";
import styles from "../styles/ContactSection.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

function ContactSection() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.phone && inputs.message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <section className={styles.contactContainer} id='contact'>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.unnammed}>
            <h2 className={styles.heading}>Contact Info</h2>
            <ul className={styles.info}>
              <li>
                <span>
                  <MdOutlineLocationOn className={styles.icon} />
                </span>
                <span>
                  2912 MedowBrooke Road <br />
                  Los Angeles, CA <br />
                  90017
                </span>
              </li>
              <li>
                <span>
                  <AiOutlineMail className={styles.icon} />
                </span>
                <span>lorem@ipsum.com</span>
              </li>
              <li>
                <span>
                  <BsTelephoneForward className={styles.icon} />
                </span>
                <span>602-558-8888</span>
              </li>
            </ul>
          </div>
          <ul className={styles.sci}>
            <li>
              <GrFacebookOption className={styles.icon} />
            </li>
            <li>
              <BsInstagram className={styles.icon} />
            </li>
            <li>
              <FiYoutube className={styles.icon} />
            </li>
          </ul>
        </div>
        <div className={styles.contactForm}>
          <h2>Send A Message</h2>
          <form className={styles.formBox} onSubmit={(e) => onSubmitForm(e)}>
            <div className={styles.inputBox50}>
              <input
                id='name'
                value={inputs.name}
                onChange={handleChange}
                type='text'
                required
              />
              <label htmlFor='first'>Name</label>
            </div>
            <div className={styles.inputBox50}>
              <input
                id='email'
                value={inputs.email}
                onChange={handleChange}
                type='text'
                required
              />
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className={styles.inputBox50}>
              <input
                id='phone'
                value={inputs.phone}
                onChange={handleChange}
                type='text'
              required
              />
              <label htmlFor='phone'>Phone #</label>
            </div>
            <div className={styles.inputBox100}>
              <textarea
                id='message'
                value={inputs.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor='message'>Your Message Here...</label>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.tertiary}>Submit</button>
            </div>
            {form.state === "loading" ? (
              <div className={styles.msg}>Sending....</div>
            ) : form.state === "error" ? (
              <div className={styles.msg}>{form.message}</div>
            ) : (
              form.state === "success" && <div className={styles.msg}><AiFillCheckCircle className={styles.icon2} />Sent successfully!</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
