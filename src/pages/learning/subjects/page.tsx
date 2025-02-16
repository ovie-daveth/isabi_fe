import React from 'react';
import { SubjectCard } from './components/subjectCard';
import { LeagueHeader } from './components/leagueHeader';
import { LeagueCard } from './components/leagueCard';

interface Subject {
  title: string;
  description: string;
  imageSrc: string;
}

interface LeagueUser {
  name: string;
  xp: number;
  imageSrc: string;
  rank?: number;
  isCurrentUser?: boolean;
}

const subjects: Subject[] = [
  { title: "Mathematics", description: "Learn and prepare for JAMB Mathematics", imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/1810e0870d8980dd9fe89a44ded03eef5a780c0f290ca594bf4f60de1e9cc182?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { title: "English", description: "Learn and prepare for JAMB English", imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/9ae3604d714c4a82ce54210217ce9e845afcde867e768dfcd6c16dcc1df8ac99?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { title: "Physics", description: "Learn and prepare for JAMB Physics", imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/f7f0ed3643f86383bf34807ef1463d6de5cd696026756fa8e30f25d3236c45db?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { title: "Chemistry", description: "Learn and prepare for JAMB Chemistry", imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/59ccf58cc8e90bda7a94b424a87add48c65792a346a7e0adce47fa61081abb87?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { title: "Biology", description: "Learn and prepare for JAMB Biology", imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0dbe744feafc045a4a037b59bb42446495fc41f96b10f4a3d1dfc668402f86d0?apiKey=e925627fa4404be68784e8320bcd6258&" },
];

const leagueUsers: LeagueUser[] = [
  { name: "Hannah Pedro", xp: 1002, imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/5d87befa5c63a7f401416beddc3e330e26160c85eb16d2ecc182d853c0962ff7?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { name: "Yussuf Ahmed", xp: 910, imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/6669b13388c6ee1cee64c6b19dc7efac169b3dab5c8862145bd1be72ee8bd55a?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { name: "Israel Faizul", xp: 800, imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/9cdbcc1e290c49eaf466c625882e9529916ec6cb91a43a150900f7066cee50f9?apiKey=e925627fa4404be68784e8320bcd6258&" },
  { name: "Jerry Richards", xp: 628, imageSrc: "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/6669b13388c6ee1cee64c6b19dc7efac169b3dab5c8862145bd1be72ee8bd55a?apiKey=e925627fa4404be68784e8320bcd6258&", rank: 6, isCurrentUser: true },
];

export const StartJourney: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center xl:px-20 sm:px-1 py-14 bg-zinc-100 ">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col w-full tracking-wide max-md:max-w-full">
            <h1 className="text-2xl font-bold leading-none text-black max-md:max-w-full">
              Start your journey
            </h1>
            <h2 className="mt-3 text-lg font-medium leading-none text-gray-400 max-md:max-w-full">
              Lessons curated specially for you
            </h2>
          </div>
          <div className="flex flex-wrap gap-7 items-center mt-5 w-full text-black max-md:max-w-full">
            {subjects.slice(0, 3).map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
          <div className="flex flex-wrap gap-7 items-center mt-5 max-w-full text-black w-[855px]">
            {subjects.slice(3).map((subject, index) => (
              <SubjectCard key={index + 3} {...subject} />
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <LeagueHeader />
          <div className="flex flex-wrap gap-5 mt-4 w-full text-sm text-black max-md:max-w-full">
            {leagueUsers.map((user, index) => (
              <LeagueCard key={index} {...user} position={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};