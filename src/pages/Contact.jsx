const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <h3 className="text-[#101828] font-semibold mb-4">Contact Me</h3>
        <p className="text-[#475467] text-lg mb-12">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      ></form>
    </div>
  );
};

export default Contact;
