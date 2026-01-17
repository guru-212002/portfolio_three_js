// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
import { EarthCanvas } from "../canvas";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";
// import { Link } from "react-router-dom";

// const INITIAL_STATE = Object.fromEntries(
//   Object.keys(config.contact.form).map((input) => [input, ""])
// );

// const emailjsConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

const Contact = () => {
  // const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  // const [form, setForm] = useState(INITIAL_STATE);
  // const [loading, setLoading] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  // ) => {
  //   if (e === undefined) return;
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
  //   if (e === undefined) return;
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       emailjsConfig.serviceId,
  //       emailjsConfig.templateId,
  //       {
  //         form_name: form.name,
  //         to_name: config.html.fullName,
  //         from_email: form.email,
  //         to_email: config.html.email,
  //         message: form.message,
  //       },
  //       emailjsConfig.accessToken
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm(INITIAL_STATE);
  //       },
  //       (error) => {
  //         setLoading(false);

  //         console.log(error);
  //         alert("Something went wrong.");
  //       }
  //     );
  // };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 ${styles.padding} relative z-0 mx-auto max-w-7xl`}
    >
      <div
        className="bg-black-100 rounded-2xl p-8 w-full flex flex-col items-center" id="contact"
      >
        <Header useMotion={false} {...config.contact} />

        {/* <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
        <div className="mt-12 flex flex-col lg:flex-row justify-around gap-5 md:gap-8 w-full">
          {Object.entries(config.contact.form).map(([key, field]) => (
            <div key={key} className="mb-4">
              <p className="text-white font-medium">{field.label}</p>

              <a
                href={field.link}
                target={field.link.startsWith("http") ? "_blank" : undefined}
                rel={field.link.startsWith("http") ? "noreferrer" : undefined}
                download={field.download ?? false}
                className="text-white hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400 transition-all duration-300"
              >
                {field.text ?? field.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-[350px] md:h-[550px] xl:h-[550px]"
      >
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
