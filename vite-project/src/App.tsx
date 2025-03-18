import { ReactElement } from 'react';
import { BookmarkIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion"

const Navbar = (): ReactElement => (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">BizPage</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = (): ReactElement => (
  <motion.div
    initial={{y: '-100%', opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{delay: 0.2, duration: 3, type: 'tween'}}
    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20"
  >
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{y: '-100%', opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.2, duration: 4, type: 'tween'}}
      >
        Welcome to BizPage
      </motion.h1>
      <motion.p 
        className="text-xl mb-8"
        initial={{y: '-100%', opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.2, duration: 5, type: 'tween'}}
      >
        Your trusted partner in business solutions
      </motion.p>
      <button 
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
      >
        Get Started
      </button>
    </div>
  </motion.div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactElement;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps): ReactElement => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = (): ReactElement => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Fast Service"
          description="Quick and efficient solutions for your business needs."
          icon={<ClockIcon className="w-6 h-6 text-blue-600" />}
        />
        <FeatureCard
          title="Quality Assurance"
          description="Highest standards of quality and professionalism."
          icon={<CheckIcon className="w-6 h-6 text-blue-600" />}
        />
        <FeatureCard
          title="Expert Team"
          description="Experienced professionals at your service."
          icon={<BookmarkIcon className="w-6 h-6 text-blue-600" />}
        />
      </div>
    </div>
  </div>
);

const CTA = (): ReactElement => (
  <div className="bg-blue-600 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
        Contact Us
      </button>
    </div>
  </div>
);

const Footer = (): ReactElement => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="mb-4">© 2023 BizPage. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        <a href="#terms" className="hover:text-blue-400">Terms</a>
        <a href="#privacy" className="hover:text-blue-400">Privacy</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </div>
  </footer>
);

const App = (): ReactElement => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <Features />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default App;
