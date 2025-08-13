// app/team/page.tsx

const safaricomTeam = [
  {
    name: 'Dr. Peter Ndegwa',
    role: 'Group CEO',
    image: '/images/team/Ceo-Peter-Ndegwa.jpg',
    bioUrl:
      'https://www.safaricom.co.ke/about/who-we-are/leadership/senior-management/peter-ndegwa',
  },
  {
    name: 'Dilip Pal',
    role: 'Chief Finance Officer',
    image: '/images/team/dilip-pal.jpg',
    bioUrl:
      'https://www.safaricom.co.ke/about/who-we-are/leadership',
  },
  {
    name: 'Fred W. Waithaka',
    role: 'Chief Corporate Affairs Officer',
    image: '/images/team/fred-waithaka.png',
    bioUrl:
      'https://biznakenya.com/leaders-steering-safaricoms-multi-billion-growth/',
  },
];

export default function TeamPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-10">
        Meet the Safaricom Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {safaricomTeam.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 shadow-md border border-gray-100 rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <a
              href={member.bioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline text-sm"
            >
              View Bio →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}