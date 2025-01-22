import React from "react";

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;