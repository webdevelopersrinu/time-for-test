const Contact = () => {
  return (
    <div className="px-3">
      <h1 className="py-3 text-2xl font-bold">Contact</h1>
      <div>
        <input type="text" className="border border-gray-400 px-2 outline-none m-2 rounded-lg" placeholder="Enter Your Name..." />
        <input type="email" className="border border-gray-400 px-2 outline-none m-2 rounded-lg" placeholder="Enter your email..." />
        <button className="bg-gray-300 rounded-lg px-2 text-lg text-green-400">submit</button>
      </div>
    </div>
  );
};
export default Contact;
