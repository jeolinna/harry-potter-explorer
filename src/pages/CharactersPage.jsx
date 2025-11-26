import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/characters";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(12);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen">
      {!sidebarOpen && (
        <button
          className="lg:hidden fixed top-4 left-4 z-40 text-[#FDD42D] "
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[270px]">
        <div className="bg-[url('/images/chars-bg.jpg')] bg-cover bg-[position:calc(50%+20px)_center] w-full bg-fixed">
          <div className="min-h-screen bg-black/75">
            <PageWrapper>
              <h1 className="flex justify-center mb-4 lg:justify-start font-heading text-4xl sm:text-6xl lg:text-[96px] text-center text-[#FDD42D]">
                Characters
              </h1>

              {loading && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-[#FDD42D] font-body text-xl">
                    Loading characters...
                  </p>
                </div>
              )}

              {error && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-[#FDD42D] font-body text-xl">
                    Error: {error}
                  </p>
                </div>
              )}

              {!loading && !error && (
                <>
                  <div className="flex gap-x-2 gap-y-4 lg:gap-x-8 lg:gap-y-14 mb-5 sm:mb-8 lg:mb-14 flex-wrap justify-center lg:justify-start">
                    {currentCharacters.map((character) => (
                      <CharacterCard key={character.id} character={character} />
                    ))}
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </PageWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
