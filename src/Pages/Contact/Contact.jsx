import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 lg:flex-row items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96 h-96">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Street, Cityville</p>
        </div>
       
      </div>
      <div className="w-96 h-96">
      <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
