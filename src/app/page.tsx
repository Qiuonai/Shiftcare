// src/app/page.tsx
'use client'; // This directive is needed for client-side interactivity like form submission and useState
import Link from 'next/link';
import mockJobs from '@/data/mockJobs';
import React, { FormEvent, useState } from 'react'; // Import useState

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission to handle it with fetch

    setSubmitting(true);
    setSubmitSuccess(null); // Reset previous status

    try {
      const form = event.currentTarget; // Get the form element
      const formData = new FormData(form); // Create FormData from the form

      const response = await fetch(form.action, { // Use form.action for the URL
        method: form.method, // Use form.method (POST)
        body: formData,
        headers: {
          'Accept': 'application/json', // Important for Formspree's JSON response
        },
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset(); // Clear the form after successful submission
      } else {
        setSubmitSuccess(false);
        const data = await response.json();
        console.error('Form submission failed:', data.error || response.statusText);
      }
    } catch (error) {
      setSubmitSuccess(false);
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-bluish-light text-neutral-dark font-sans">

      {/* Navbar - Glassmorphism Effect with Navigation Links */}
      <nav className="bg-white/50 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full z-20 top-0 left-0 transition-all duration-300 border-b border-white/20 px-6 md:px-12">
        <Link href="/" className="text-3xl font-extrabold text-primary-blue hover:text-accent-teal transition-colors tracking-tight">
          ShiftCare
        </Link>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-lg font-semibold text-neutral-dark">
          <li>
            <Link href="#about-us" className="hover:text-primary-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full">
              About ShiftCare
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="hover:text-primary-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#mock-jobs" className="hover:text-primary-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full">
              Open Shifts
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-primary-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full">
              Pricing
            </Link>
          </li>
        </ul>
        {/* Get Early Access Button */}
        <div>
          <a href="#get-started" className="bg-primary-blue text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-accent-teal transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero Section - Clean and Open */}
      <section className="relative bg-bg-bluish-light py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden min-h-[calc(100vh-theme(spacing.24))] pt-24 md:pt-32">
        {/* Subtle decorative elements (pinch of color) */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-teal rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary-green rounded-full opacity-10 blur-xl"></div>

        <div className="container mx-auto px-6 z-10 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down text-primary-blue">
            <span className="block">ShiftCare: Elevating Healthcare,</span>
            <span className="block text-secondary-green">Empowering Professionals.</span>
          </h1>
          <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in-up max-w-3xl mx-auto text-neutral-dark">
            Seamlessly connecting clinics with top medical talent for flexible shifts. Find your fit, fill critical needs, and empower healthcare.
          </p>
          <a
            href="#mock-jobs"
            className="bg-primary-blue text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-accent-teal transition-all duration-300 animate-scale-in transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Explore Live Shifts
          </a>
        </div>
      </section>

      {/* Problem Section - Off-white Background */}
      <section id="about-us" className="py-20 md:py-32 bg-bg-off-white">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-primary-blue">
            The Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl shadow-xl bg-bg-white-pure border border-gray-100 transform hover:scale-[1.02] transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">For Clinics & Hospitals:</h3>
              <ul className="list-disc list-inside text-left space-y-4 text-neutral-dark text-lg">
                <li><span className="font-semibold text-secondary-green">Urgent Staffing Gaps:</span> Quickly fill shifts for sudden needs or patient surges with qualified personnel.</li>
                <li><span className="font-semibold text-secondary-green">Streamlined Recruitment:</span> Drastically reduce high agency fees and lengthy hiring processes.</li>
                <li><span className="font-semibold text-secondary-green">Operational Efficiency:</span> Optimize staffing levels, prevent burnout, and ensure consistent, high-quality care.</li>
              </ul>
            </div>
            <div className="p-10 rounded-2xl shadow-xl bg-bg-white-pure border border-gray-100 transform hover:scale-[1.02] transition duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">For Doctors & Nurses:</h3>
              <ul className="list-disc list-inside text-left space-y-4 text-neutral-dark text-lg">
                <li><span className="font-semibold text-accent-teal">Flexible Opportunities:</span> Discover diverse, well-paying shifts that perfectly fit your personal schedule.</li>
                <li><span className="font-semibold text-accent-teal">Maximize Earnings:</span> Effectively utilize your specialized skills and free time to significantly boost your income.</li>
                <li><span className="font-semibold text-accent-teal">Simplified Job Search:</span> Access a centralized, intuitive platform for a wide range of rewarding medical assignments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Bluish-Light Background */}
      <section id="how-it-works" className="py-20 md:py-32 bg-bg-bluish-light">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-primary-blue">
            How ShiftCare Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl shadow-xl bg-white transform hover:scale-105 transition duration-300 border border-teal-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-accent-teal text-white rounded-full text-3xl font-bold shadow-md">1</div>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Clinics Post Needs</h3>
              <p className="text-neutral-dark text-lg">Effortlessly list your temporary staffing requirements with specific dates, times, and specialties.</p>
            </div>
            <div className="p-8 rounded-2xl shadow-xl bg-white transform hover:scale-105 transition duration-300 border border-teal-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-accent-teal text-white rounded-full text-3xl font-bold shadow-md">2</div>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Professionals Browse & Apply</h3>
              <p className="text-neutral-dark text-lg">Licensed healthcare professionals browse shifts matching their availability and expertise.</p>
            </div>
            <div className="p-8 rounded-2xl shadow-xl bg-white transform hover:scale-105 transition duration-300 border border-teal-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-accent-teal text-white rounded-full text-3xl font-bold shadow-md">3</div>
              <h3 className="text-xl font-bold mb-3 text-primary-blue">Connect & Confirm</h3>
              <p className="text-neutral-dark text-lg">Clinics review applicants, make offers, and secure essential temporary placements seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Jobs Section - Cream Background, Cards with Subtle Glassmorphism */}
      <section id="mock-jobs" className="py-20 md:py-32 bg-bg-cream">
        <div className="container mx-auto px-6 text-center max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-primary-blue">
            Explore Open Shifts
          </h2>
          <p className="text-lg text-neutral-dark mb-16 max-w-4xl mx-auto">
            These are examples of the flexible, high-demand shifts you&apos;ll find on ShiftCare.
            Ready to apply? We&apos;re currently in pre-launch! Click the &quot;Apply&quot; button below to connect with us or the respective application page.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockJobs.map((job) => (
              <div key={job.id} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/30 flex flex-col justify-between transform hover:-translate-y-2 transition duration-300">
                <div>
                  <h3 className="text-xl font-bold text-primary-blue mb-2">{job.title}</h3>
                  <p className="text-md text-neutral-dark mb-1">
                    <strong className="text-primary-blue">Specialty:</strong> {job.specialty}
                  </p>
                  <p className="text-md text-neutral-dark mb-1">
                    <strong className="text-primary-blue">Clinic:</strong> {job.clinicName}
                  </p>
                  <p className="text-md text-neutral-dark mb-1">
                    <strong className="text-primary-blue">Dates:</strong> {job.dates}
                  </p>
                  <p className="text-md text-neutral-dark mb-1">
                    <strong className="text-primary-blue">Time:</strong> {job.time}
                  </p>
                  <p className="text-md text-neutral-dark mb-3">
                    <strong className="text-primary-blue">Location:</strong> {job.location}
                  </p>
                  <p className="text-lg font-bold text-secondary-green mb-4">
                    Rate: {job.rate}
                  </p>
                  <p className="text-neutral-dark mb-4 text-base">{job.description}</p>
                </div>
                <a
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-secondary-green hover:bg-primary-blue text-white font-bold py-3.5 px-6 rounded-full text-lg text-center transition duration-300 transform hover:scale-105 shadow-md"
                >
                  {job.buttonText || 'Apply Now'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pay? / Monetization Preview Section - Pure White Background */}
      <section className="py-20 md:py-32 bg-bg-white-pure">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-primary-blue">
            Why use ShiftCare: Save time, Maximize Earnings.
          </h2>
          <p className="text-lg opacity-90 mb-16 max-w-4xl mx-auto text-neutral-dark">
            ShiftCare is built on a model that ensures fairness and maximizes value for everyone.
            Here&apos;s a preview of our simple and effective pricing structure once we fully launch.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl shadow-xl bg-bg-bluish-light transform hover:scale-[1.02] transition duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">For Clinics & Hospitals:</h3>
              <p className="text-lg mb-6 text-neutral-dark">
                We believe you should only pay when we deliver. ShiftCare will operate on a{' '}
                <span className="font-extrabold text-primary-blue">small, flat commission per successful booking.</span>
              </p>
              <ul className="text-left list-disc list-inside space-y-3 text-neutral-dark text-base">
                <li>One time Onboarding Fee.</li>
                <li>Pay only when a shift is filled.</li>
                <li>Access a verified pool of talent without the recruitment overhead.</li>
              </ul>
            </div>
            <div className="p-10 rounded-2xl shadow-xl bg-bg-bluish-light transform hover:scale-[1.02] transition duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-primary-blue">For Doctors & Nurses:</h3>
              <p className="text-lg mb-6 text-neutral-dark">
                ShiftCare is committed to empowering medical professionals. Our platform will be{' '}
                <span className="font-extrabold text-primary-blue">completely free to join and use for professionals.</span>
              </p>
              <ul className="text-left list-disc list-inside space-y-3 text-neutral-dark text-base">
                <li>Timely Payments.</li>
                <li>Maximize your income potential flexibly.</li>
                <li>Hassle-free search and application.</li>
              </ul>
            </div>
          </div>
          <p className="text-xl font-semibold mt-16 text-primary-blue">
            Our goal is to make temporary medical staffing efficient, fair, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Call to Action / Early Access - Glassmorphism Form */}
      <section id="get-started" className="py-20 md:py-32 bg-bg-off-white text-center relative overflow-hidden">
        {/* Abstract background shapes (pinch of color) */}
        <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="gradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#20C997" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="gradient4" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#0056B3" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                    </radialGradient>
                </defs>
                <circle cx="20" cy="80" r="40" fill="url(#gradient3)"/>
                <circle cx="80" cy="30" r="50" fill="url(#gradient4)"/>
            </svg>
        </div>
        <div className="container mx-auto px-6 max-w-5xl z-10 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-primary-blue">
            Ready to Transform Healthcare Staffing?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 text-neutral-dark">
            Join our exclusive pre-launch list to be among the first to experience ShiftCare.
            Early registrants will receive special benefits and updates!
          </p>
          <form
            action="https://formspree.io/f/xblyfeny" // Make sure this is YOUR Formspree endpoint
            method="POST"
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/30" // Glassmorphism
          >
            <h3 className="text-2xl font-bold text-primary-blue mb-8">Get Early Access</h3>

            {/* Name Input Field */}
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-blue text-neutral-dark text-lg transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-blue text-neutral-dark text-lg transition-all duration-300"
                required
              />
            </div>

            <div className="mb-8 text-neutral-dark text-left">
              <label className="block text-lg font-semibold mb-4">I am a:</label>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                <label className="inline-flex items-center group cursor-pointer">
                  <input type="radio" name="role" value="professional" className="form-radio text-primary-blue h-6 w-6 border-gray-400 group-hover:border-primary-blue transition-colors" required />
                  <span className="ml-3 text-lg group-hover:text-primary-blue transition-colors">Medical Professional</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="role" value="clinic" className="form-radio text-primary-blue h-6 w-6 border-gray-400 group-hover:border-primary-blue transition-colors" />
                  <span className="ml-3 text-lg group-hover:text-primary-blue transition-colors">Clinic / Hospital</span>
                </label>
              </div>
            </div>
            {/* Submission Status Messages */}
            {submitting && (
              <p className="text-primary-blue text-md mb-4 animate-pulse">Submitting...</p>
            )}
            {submitSuccess === true && (
              <p className="text-secondary-green text-md mb-4">Thank you for signing up! We'll be in touch.</p>
            )}
            {submitSuccess === false && (
              <p className="text-red-500 text-md mb-4">Something went wrong. Please try again later.</p>
            )}

            <button
              type="submit"
              className="bg-primary-blue hover:bg-secondary-green text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 w-full shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
              disabled={submitting} // Disable button while submitting
            >
              Sign Up for Updates
            </button>
            <p className="text-gray-600 text-sm mt-6">We respect your privacy. No spam, ever.</p>
          </form>
        </div>
      </section>

      {/* Footer - Remains professional dark */}
      <footer className="bg-neutral-dark text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
            {/* Column 1: Logo & Tagline */}
            <div className="mb-8 md:mb-0">
              <Link href="/" className="text-3xl font-extrabold text-white hover:text-accent-teal transition-colors tracking-tight block mb-4">
                ShiftCare
              </Link>
              <p className="opacity-80 leading-relaxed">Empowering healthcare connections, one shift at a time.</p>
              <div className="flex space-x-5 mt-6">
                {/* Social Icons - NOW USING ACTUAL FONT AWESOME ICONS */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal transition-colors text-2xl" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal transition-colors text-2xl" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal transition-colors text-2xl" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="#about-us" className="opacity-80 hover:text-accent-teal transition-colors">About Us</Link></li>
                <li><Link href="#how-it-works" className="opacity-80 hover:text-accent-teal transition-colors">How It Works</Link></li>
                <li><Link href="#mock-jobs" className="opacity-80 hover:text-accent-teal transition-colors">Open Shifts</Link></li>
                <li><Link href="#pricing" className="opacity-80 hover:text-accent-teal transition-colors">Pricing</Link></li>
                <li><Link href="#" className="opacity-80 hover:text-accent-teal transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="opacity-80 hover:text-accent-teal transition-colors">Blog</Link></li>
                <li><Link href="#" className="opacity-80 hover:text-accent-teal transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="opacity-80 hover:text-accent-teal transition-colors">Support</Link></li>
                <li><Link href="#" className="opacity-80 hover:text-accent-teal transition-colors">Community</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <p className="opacity-80 mb-3">123 Healthcare Ave, Medical City, MC 12345</p>
              <p className="opacity-80 mb-3">Email: info@shiftcare.com</p>
              <p className="opacity-80">Phone: (123) 456-7890</p>
            </div>
          </div>

          {/* Bottom Section: Copyright & Legal Links */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center opacity-70">
            <p>&copy; {new Date().getFullYear()} ShiftCare. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="#" className="hover:text-accent-teal transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent-teal transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

