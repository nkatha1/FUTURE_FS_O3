export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-green-600 dark:text-green-400">
        Safaricom: Connect. Innovate. Serve.
      </h1>

      <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
        Empowering every Kenyan through technology — from M-PESA to mobile, education to enterprise.
      </p>

      <a
        href="/about"
        className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-500 transition"
      >
        Learn More
      </a>
    </section>
  );
}