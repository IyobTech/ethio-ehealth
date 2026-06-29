import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to Ethio E-Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Revolutionizing Healthcare in Ethiopia
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏥', title: 'Complete Patient Management', desc: 'Digital medical records and patient history' },
              { icon: '📅', title: 'Smart Appointments', desc: 'Easy scheduling and queue management' },
              { icon: '💊', title: 'Prescription System', desc: 'Digital prescriptions and pharmacy integration' },
              { icon: '🧪', title: 'Laboratory Integration', desc: 'Lab requests and result tracking' },
              { icon: '🤖', title: 'AI Assistant', desc: 'AI-powered diagnosis and health advice' },
              { icon: '💳', title: 'Payment Integration', desc: 'Multiple payment methods supported' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
