export function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-950 py-24 px-4">
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl text-white font-bold">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-2">
          Reservations, bookings & enquiries
        </p>
      </div>

      <form className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-yellow-500"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-yellow-500"
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full bg-transparent border-b border-gray-600 text-white py-3 outline-none focus:border-yellow-500"
        />

        <button className="w-full py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}