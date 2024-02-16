// import { useEffect, useState } from 'react';
// import CarListItem from '../components/CarListItem/CarListItem';

// const FavoritePage = () => {
//   const [favorite, setFavorite] = useState(
//     () => JSON.parse(localStorage.getItem('favorite')) ?? []
//   );

//   useEffect(() => {
//     localStorage.setItem('favorite', JSON.stringify(favorite));
//   }, [favorite]);

//   const isFavorite = id => favorite.some(item => item.id === id);

//   return (
//     <section className="py-[150px]">
//       <div className="container">
//         <ul className="mb-[100px] grid  tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-y-[50px]  desktop:gap-[29px] tablet:gap-[20px] tablet:gap-y-[44px] mobile:gap-y-[38px]">
//           {favorite?.map(car => (
//             <CarListItem
//               key={car.id}
//               car={car}
//               setFavorite={setFavorite}
//               isFavorite={isFavorite(car.id)}
//             />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default FavoritePage;


import React, { useState, useEffect } from 'react';
import CarListItem from '../components/CarListItem/CarListItem';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleRemoveFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((car) => car.id !== id));
  };

  return (
    <section className="py-[150px]">
      <div className="container">
        <ul className="mb-[100px] grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-y-[50px] desktop:gap-[29px] tablet:gap-[20px] tablet:gap-y-[44px] mobile:gap-y-[38px]">
          {favorites.map((car) => (
            <CarListItem key={car.id} car={car} removeFavorite={handleRemoveFavorite} isFavorite={true} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FavoritePage;