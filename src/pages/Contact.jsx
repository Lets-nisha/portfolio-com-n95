import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Install lucide-react if not added


import { useState } from 'react';



const Contact = () => {

 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "53adba2d-a220-47c3-b769-e2980a40ab06");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

  };

  return (
    <section className="py-24  bgColor text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Let's Connect.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              I'm currently looking for new opportunities. My inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-blue-500 transition-colors">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Email Me</p>
                  <p className="text-lg font-medium">nishabii9520@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl group-hover:border-indigo-500 transition-colors">
                  <MapPin className="text-indigo-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold">Location</p>
                  <p className="text-lg font-medium">Rampur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Glassmorphic Form */}
          <div className="relative">
            <div className="bg-slate-900/40 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl relative z-10">
              <form className="space-y-5" onSubmit={onSubmit}>
                   

                <input 
                  type="text" 
                  required
                  placeholder="Full Name"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-600"
                />
                <input 
                  type="email" 
                  required
                  placeholder="Email Address"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-600"
                />
                <textarea 
               name="message"
                required
                  rows="4"
                  placeholder="Your Message..."
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
                
                <button type="submit" className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <p>{result}</p>
                </button>
              </form>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


 