import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import { useFormik } from "formik";
import { FormattedMessage } from "react-intl";

import languages from "../../languages";
import styles from "./Authentication.module.css";

export default function ({ setIsModalActive, setIsLogining }) {
  const local = useSelector((state) => state.local.lang);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);

      const user = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      dispatch(authOperations.register(user));

      resetForm();
      setSubmitting(false);
      setIsLogining(true);
      setIsModalActive(false);
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.nameReq" />
          </p>
        );
      }
      if (!values.email) {
        errors.email = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.emailReq" />
          </p>
        );
      }
      if (
        !values.email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        errors.email = (
          <p className={styles.formInputError}>
            {" "}
            <FormattedMessage id="register.emailSym" />
          </p>
        );
      }
      if (!values.password) {
        errors.password = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.passReq" />
          </p>
        );
      }
      if (values.password.length < 6) {
        errors.password = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.passLength" />
          </p>
        );
      }
      return errors;
    },
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  const closeModal = () => {
    setIsLogining(true);
    setIsModalActive(false);
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>
        <FormattedMessage id="register" />
      </h1>
      <button
        className={styles.buttonToClose}
        type="button"
        onClick={() => closeModal()}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
            fill="black"
          />
        </svg>
      </button>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          <input
            type="text"
            name="username"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${styles.formInput}
            ${touched.username && !errors.username ? styles.accepted : ""}
            ${touched.username && errors.username ? styles.error : ""}`}
            placeholder={languages[local].name}
          />
          {errors.username && touched.username && errors.username}
        </label>
        <label className={styles.formLabel}>
          <input
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${styles.formInput}
            ${touched.email && !errors.email ? styles.accepted : ""}
            ${touched.email && errors.email ? styles.error : ""}`}
            placeholder="E-mail"
          />
          {errors.email && touched.email && errors.email}
        </label>
        <label className={styles.formLabel}>
          <input
            type="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`${styles.formInput}
            ${touched.password && !errors.password ? styles.accepted : ""}
            ${touched.password && errors.password ? styles.error : ""}`}
            placeholder={languages[local]["password min"]}
          />
          {errors.password && touched.password && errors.password}
        </label>

        <button
          type="submit"
          className={styles.formButton}
          disabled={isSubmitting}
        >
          <FormattedMessage id="register" />
        </button>
        <button
          disabled={isSubmitting}
          className={styles.backToEnterLink}
          onClick={() => setIsLogining(true)}
        >
          <FormattedMessage id="return" />
        </button>
      </form>
    </div>
  );
}
