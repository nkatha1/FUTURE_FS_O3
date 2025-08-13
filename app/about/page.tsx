import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Safaricom banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
            Welcome to Safaricom
          </h1>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-600">About Us</h2>
        <p className="text-lg leading-relaxed">
          We are committed to <span className="font-bold text-green-600">transforming lives</span> through
          connectivity and innovation.
        </p>
      </div>
    </div>
  );
}