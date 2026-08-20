// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     console.log("Form submitted:", formData)
//     setFormData({ name: "", phone: "", email: "", message: "" })
//     setIsSubmitting(false)
//   }

//   return (
//     <div className="flex items-center justify-center">
//       <div className="w-full rounded-lg border border-border bg-card p-8 shadow-md">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Input */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//           />

//           {/* Phone Input */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone no."
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//           />

//           {/* Email Input */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//           />

//           {/* Message Textarea */}
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={5}
//             className="w-full rounded-md border border-input bg-[#F2F3F4] px-4 py-3 text-foreground placeholder-[#293E52] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
//           />

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className=" bg-[#1A60A4] text-white w-[180px]"
//           >
//             {isSubmitting ? "Sending..." : "Request A Call Back"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    website_url: "", // Honeypot
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const recaptchaRef = useRef(null);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  // BOT PROTECTION VALUES
  const [firstInteraction, setFirstInteraction] = useState(0);
  const BOT_MIN_TIME = 2000; // 2 seconds
  const BOT_MAX_TIME = 180000; // 3 minutes

  // Suspicious link pattern
  const shortLinkRegex =
    /(tinyurl|bit\.ly|rebrand\.ly|is\.gd|cutt\.ly|cli\.gs|t\.co|goo\.gl|ow\.ly|buff\.ly|su\.pr|vc\.ru|adf\.ly|rb\.gy|shorturl\.at)/i;

  const API_CONFIG = {
    endpoint: "/api/contact",
    smtp_username: "renfrawebsite@gmail.com",
    smtp_password: "yret dile jjkk kowo",
    company_email: "renfrawebsite@gmail.com",
  };

  // Set first interaction time
  const recordFirstInteraction = () => {
    if (!firstInteraction) {
      setFirstInteraction(Date.now());
    }
  };

  const handleNameChange = (e) => {
    recordFirstInteraction();
    const value = e.target.value;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(value)) {
      setFormData((prev) => ({ ...prev, name: value }));
      setErrors((prev) => ({ ...prev, name: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "Name should contain only letters",
      }));
    }
  };

  const handlePhoneChange = (e) => {
    recordFirstInteraction();
    const value = e.target.value;
    const phoneRegex = /^[0-9]*$/;
    if (phoneRegex.test(value)) {
      setFormData((prev) => ({ ...prev, phone: value }));
      setErrors((prev) => ({ ...prev, phone: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number should contain only numbers",
      }));
    }
  };

  const handleInputChange = (e) => {
    recordFirstInteraction();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (emailData) => {
    const response = await fetch(API_CONFIG.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error("Email send failed");
    }
    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionTime = Date.now();
    const timeTaken = submissionTime - firstInteraction;

    // 🛑 BOT CHECK — Honeypot
    if (formData.website_url.trim() !== "") {
      setSubmitStatus({ success: false, message: "Bot detected." });
      return;
    }

    // 🛑 BOT CHECK — Time to fill
    if (timeTaken < BOT_MIN_TIME || timeTaken > BOT_MAX_TIME) {
      setSubmitStatus({
        success: false,
        message: "Suspicious activity detected. Submission blocked.",
      });
      return;
    }

    // 🛑 BOT CHECK — Suspicious links
    if (shortLinkRegex.test(formData.message)) {
      setSubmitStatus({
        success: false,
        message: "Suspicious links found in message.",
      });
      return;
    }

    // Check reCAPTCHA
    if (!captchaToken) {
      setSubmitStatus({
        success: false,
        message: "Please verify reCAPTCHA",
      });
      return;
    }

    // Check terms acceptance
    if (!isAccepted) {
      setSubmitStatus({
        success: false,
        message: "Please accept the Terms & Conditions",
      });
      return;
    }

    // Basic validations
    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Full name is required" }));
      return;
    }
    if (!formData.phone.trim()) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
      return;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({
        success: false,
        message: "Email is required",
      });
      return;
    }
    if (!formData.message.trim()) {
      setErrors((prev) => ({ ...prev, message: "Message is required" }));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // SEND EMAIL TO COMPANY
      const companyEmailData = {
        sender_email: formData.email,
        receiver_email: API_CONFIG.company_email,
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Full Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
          <p><strong>Time Taken:</strong> ${timeTaken} ms</p>
        `,
        smtp_username: API_CONFIG.smtp_username,
        smtp_password: API_CONFIG.smtp_password,
      };

      await sendEmail(companyEmailData);

      // SEND CONFIRMATION EMAIL TO USER
      const userEmailData = {
        sender_email: API_CONFIG.company_email,
        receiver_email: formData.email,
        subject: "Thank you for contacting us",
        body: `
          <h3>Thank you for your message!</h3>
          <p>Dear ${formData.name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <h4>Your submission details:</h4>
          <p><strong>Full Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
        smtp_username: API_CONFIG.smtp_username,
        smtp_password: API_CONFIG.smtp_password,
      };

      await sendEmail(userEmailData);

      setSubmitStatus({
        success: true,
        message: "Your message was sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        company: "",
        website_url: "",
      });

      setCaptchaToken(null);
      setIsAccepted(false);
      setFirstInteraction(0);
      recaptchaRef.current?.reset();

    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-lg border bg-card p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 🕳️ Honeypot Field — Hidden */}
          <input
            type="text"
            name="website_url"
            value={formData.website_url}
            onChange={handleInputChange}
            style={{ display: "none" }}
          />

          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleNameChange}
              required
              className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              name="phone"
              placeholder="Phone no."
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
          />

          {/* <input
            name="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
          /> */}

          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full rounded-md bg-[#F2F3F4] px-4 py-3 resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* reCAPTCHA */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lfqvi8tAAAAAPpExCBznfhp24mh7KcmM3rVXQc9"}
            onChange={(token) => setCaptchaToken(token)}
          />

          {/* Terms */}
          <div className="flex gap-2 text-sm">
            <input
              type="checkbox"
              checked={isAccepted}
              onChange={(e) => setIsAccepted(e.target.checked)}
            />
            <span>
              I accept the{" "}
              <a
                href="/terms&conditions"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`p-4 rounded-md ${submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !isAccepted || !captchaToken}
            className="bg-[#1A60A4] text-white w-[180px]"
          >
            {isSubmitting ? "Sending..." : "Request A Call Back"}
          </Button>

        </form>
      </div>
    </div>
  );
}
