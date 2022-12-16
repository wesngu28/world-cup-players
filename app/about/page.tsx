import { readFileSync } from "fs"
import Bar from "../../components/Bar"
import { addendum } from "../../data/coin"

export default function About() {
  return(
    <div className={"flex flex-col items-center"}>
      <h2 className={"mt-8 mb-8 font-bold leading-5 text-[2.5rem] font-robotomono"}>
        Players of Qatar 2022
      </h2>
      <p className={'mb-8 text-center w-2/4 leading-7'}>
        The World Cup is one of the most hyped, popular, and exciting sporting events in the world.
        For many players around the world, the World Cup is a culmination of their skills and hard
        work, as well as gives them a chance to represent their country on the world stage. This
        web app aims to showcase some maps and charts about these players and the countries they
        were called up to play for.
      </p>
      <p className={'mb-8 font-bold text-xl'}>National Team Formation and Eligibility</p>
      <p className={'mb-8 w-2/4 leading-7'}>
      An important part of the world team is the assembling of the national team of a country by their
      coaching and staff. There are many complexities regarding FIFA eligibility. Generally, the primary
      rules are that a person must have been born in a country, have some sort of significant tie to a country,
      or have lived in a country for a particularly long time.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
      An important part of the world team is the assembling of the national team of a country by their
      coaching and staff. There are many complexities regarding FIFA eligibility. Generally, the primary
      rules are that a person must have been born in a country, have some sort of significant tie to a country,
      or have lived in a country for a particularly long time.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
      There are many reasons that a player may choose to represent a different team than the country they were born in.
      It could be that they moved out of their place of birth at a young age and thus do not have much of an attachment sentimentally.
      They could have not been chosen to represent their country, but still sought to play in the World Cup somehow,
      leading them to play for a different country they were eligible for. They could just want to represent another country for
      heritage or pride reasons.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
      Another thing to consider is the act of naturalization of players. Some countries with a low national population,
      like current host Qatar, are known to naturalize players, or grant them citizenship, in order to field them as a part
      of their national team. FIFA has implemented a two year limit of residence or some familial link to combat this.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
      Regardless, the act of being called up to represent a country is one of the greatest honors for a footballer,
      and the decision for those eligible for multiple teams cannot be easy.
      </p>
      <Bar />
    </div>
  )
}