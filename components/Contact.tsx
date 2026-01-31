export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-brand-charcoal">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral mb-4">
          Think I might be able to <span className="text-brand-gold"> help with something? </span>
        </h2>
        <p className="text-brand-neutral/70 mb-10">
          Drop me a line and let’s talk it through.
        </p>

        <form action="https://formspree.io/f/mgoyqjjn" method="POST" className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" name="name" placeholder="Your Name" required
              className="bg-brand-black border border-brand-black focus:border-brand-blue p-4 rounded-lg text-brand-neutral outline-none transition"
            />
            <input 
              type="email" name="email" placeholder="Your Email" required
              className="bg-brand-black border border-brand-black focus:border-brand-blue p-4 rounded-lg text-brand-neutral outline-none transition"
            />
          </div>
          <textarea 
            name="message" placeholder="Tell me about your project..." rows={5} required
            className="w-full bg-brand-black border border-brand-black focus:border-brand-blue p-4 rounded-lg text-brand-neutral outline-none transition"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-lg transition transform hover:scale-[1.01]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}