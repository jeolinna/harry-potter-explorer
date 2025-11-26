import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacters, getCharacterById } from "../api/characters";
import Sidebar from "../components/Sidebar";
import PageWrapper from "../components/PageWrapper";
import { getHouseStyle } from "../constants/houseStyles";
import { Menu } from "lucide-react";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function loadCharacter() {
      try {
        const allCharacters = await fetchCharacters();
        const foundCharacter = getCharacterById(allCharacters, id);

        if (foundCharacter) {
          setCharacter(foundCharacter);
        } else {
          setError("Character not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadCharacter();
    }
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    return dateString.replace(/-/g, ".");
  };

  const houseStyle = getHouseStyle(character?.house);

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

      <Sidebar
        house={character?.house}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-[270px]">
        <div
          className="bg-cover bg-[position:calc(50%+20px)_center] w-full bg-fixed"
          style={{
            backgroundImage: `url('${houseStyle.backgroundImage}')`,
          }}
        >
          <div className="min-h-screen bg-black/85">
            <PageWrapper>
              <h1
                className={`flex justify-center mb-4 lg:justify-start font-heading text-4xl sm:text-6xl lg:text-[96px] ${houseStyle.text} text-center`}
              >
                Character Details
              </h1>

              {loading && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-[#FDD42D] font-body text-xl">
                    Loading character...
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

              {!loading && !error && character && (
                <div className="sm:flex sm:gap-10 lg:gap-20">
                  <div
                    className={`w-full sm:w-1/3 mb-2 border-4 ${houseStyle.border}`}
                  >
                    {character.image ? (
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover object-[center_0] bg-[#281A0F]"
                      />
                    ) : (
                      <img
                        src={`${import.meta.env.BASE_URL}images/wanted.jpg`}
                        alt="Default character"
                        className="w-full h-full object-contain object-[center_0] bg-[#281A0F]"
                      />
                    )}
                  </div>

                  <div>
                    <h2
                      className={`relative text-4xl lg:text-5xl mb-4 pb-2 font-heading ${houseStyle.text} border-b-2 ${houseStyle.border}`}
                    >
                      {character.name}
                    </h2>

                    <p
                      className={`text-xl lg:text-2xl mb-4 font-body ${houseStyle.text}`}
                    >
                      {character.house}
                    </p>

                    <p
                      className={`text-xl lg:text-2xl mb-4 font-body ${houseStyle.text}`}
                    >
                      {formatDate(character.dateOfBirth)}
                    </p>

                    <p
                      className={`text-xl lg:text-2xl mb-4 font-body ${houseStyle.text}`}
                    >
                      {character.actor || ""}
                    </p>
                  </div>
                </div>
              )}

              {!loading && !error && !character && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-[#FDD42D] font-body text-xl">
                    Character not found
                  </p>
                </div>
              )}
            </PageWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
