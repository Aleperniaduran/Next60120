

const Contact = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center py-24">
      <h1 className="text-3xl font-semibold mb-4 w-fit m-auto mb-12">Contact Us</h1>
      <form className="max-w-md m-auto">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
