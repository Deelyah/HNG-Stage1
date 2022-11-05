import BaseButton from "../components/base-components/BaseButton";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full justify-center min-h-screen">
      <div className="pt-14 w-full md:w-3/5">
        <div>
          <h3 className="text-[#101828] font-semibold mb-4 text-4xl">
            Contact Me
          </h3>
          <p className="text-[#475467] text-lg mb-12">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col mb-6 md:basis-1/2 md:pr-3">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-[#344054] mb-1.5"
              >
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name"
                className="w-full focus:border-[#84CAFF] px-3.5 py-2.5 focus:outline-none border border-[#D0D5DD] text-[#667085] rounded-lg"
              />
            </div>
            <div className="flex flex-col mb-6 md:basis-1/2 md:pl-3">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-[#344054] mb-1.5"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your last name"
                className="w-full focus:border-[#84CAFF] px-3.5 py-2.5 focus:outline-none border border-[#D0D5DD] text-[#667085] rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#344054] mb-1.5"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              className="w-full focus:border-[#84CAFF] px-3.5 py-2.5 focus:outline-none border border-[#D0D5DD] text-[#667085] rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#344054]"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="px-3.5 py-2.5 focus:outline-none border border-[#D0D5DD] text-[#667085] rounded-lg mt-1.5"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>

          <div className="mt-8">
            <BaseButton>Send a message</BaseButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
