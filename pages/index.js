import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter(); // Använd useRouter-hooken för att få tillgång till routing-funktioner

  // Funktion för att hantera klick på knappen
  const handleExploreClick = () => {
    // En array med de sidor du vill navigera till
    const pages = ['/sport', '/culture'];
    // Välj en slumpmässig sida från arrayen
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    // Använd router.push för att navigera till den valda sidan
    router.push(randomPage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-grey-600">
      <main className="flex-grow flex items-center justify-center p-4 text-center">
        <div>
          <h1 className="text-7xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Välkommen till Nyhetsportalen
          </h1>
          <p className="text-3xl text-gray-600 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Din källa till de senaste nyheterna och insikterna från världen runt omkring oss.
          </p>
          {/* Uppdatera knappen för att använda onClick istället för href */}
          <button onClick={handleExploreClick} className="bg-blue-800 text-white py-3 px-6 rounded-lg text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Utforska Nyheter
            (slumpmässig )
          </button>
        </div>
      </main>
    </div>
  );
}
