const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page 🚀</h1>
      <div>
        <form>
          <input className="border border-black p-2 m-2" placeholder="Name" />
          <input
            className="border border-black p-2 m-2"
            placeholder="Message"
          />
          <button className="bg-black text-white rounded-lg p-2 m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
