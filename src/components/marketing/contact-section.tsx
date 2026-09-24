import { ContactForm } from "@/features/contact/contact-form";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background styling to match the site's dark aesthetic */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,118,110,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Talk to our team
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Share your workshop details and we will follow up about product fit, pricing, or onboarding.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <ContactForm />
          </div>
          
          <div className="mt-10 lg:mt-0 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0 text-slate-300">
            <h3 className="text-xl font-semibold text-white mb-6">Other ways to reach us</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Call Sales</p>
                  <p className="mt-1">+91 (800) 123-4567</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri from 9am to 6pm IST.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Email Support</p>
                  <p className="mt-1">support@mydetailos.com</p>
                  <p className="text-sm text-slate-500 mt-1">We usually respond within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Headquarters</p>
                  <p className="mt-1">MY DETAIL OS Tech</p>
                  <p className="text-sm text-slate-500 mt-1">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
