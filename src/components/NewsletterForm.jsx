import React from "react";

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const mailtoLink = `mailto:ultracobre@gmail.com?subject=Suscripción a Newsletter&body=Correo electrónico: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Ingresa tu email" />
      <button type="submit">Suscríbete al Boletín</button>
    </form>
  );
};

export default NewsletterForm;





// const NewsletterForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const email = formData.get('email');
//     const mailtoLink = `mailto:ultracobre@gmail.com?subject=Suscripción a Newsletter&body=Correo electrónico: ${email}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Ingresa tu email" />
//       <button type="submit">Suscríbete al Boletín</button>
//     </form>
//   );
// };