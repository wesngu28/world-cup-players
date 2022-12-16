import { readFileSync } from "fs"
import LicensedBar from "../../components/Bar"
import { ClubPolar } from "../../components/PolarArea"
import { Chart as ChartJS, ArcElement, Tooltip, RadialLinearScale, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title, RadialLinearScale, CategoryScale, LinearScale, BarElement);

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
      <p className={'mb-8 font-bold text-xl'}>Charts</p>
      <p className={'mb-8 w-2/4 leading-7'}>
        The two below bar charts do not display countries with players born in them that did not qualify for the World Cup. An example
        is Scotland, who have 4 players that would be represented otherwise.
      </p>
      <LicensedBar x={'BORN_IN_VS_NAT'} xText="Ratio of Players Born in Country to Size of their Team"
      title="Ratio of Players Born in Country to Size of their Team" xHover="Players Born in Country to Team Size"/>
      <p className={'mb-8 w-2/4 leading-7'}>
        The above chart shows the ratio between players participating in the World Cup born in the countries participating in the World Cup,
        as opposed to the amount of players on that national team. For instance, Iran is 24:25 in its ratio, meaning there are 24 players born
        in Iran as opposed to the 25 players on the national team.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
        The two clear football exporters are France and England, being the two countries with the highest ratio. This means that players
        who are born in France or England have chosen to forgo playing for their relative teams (whether they were not invited or they chose
        to play for another country).
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
        Countries who tend to have a lower ratio tend to be located in Africa, including nations like Morocco, Tunisia, Senegal, and Cameroon.
        A commonality between these nations is the shared history of French colonial occupation, and it could be that some French players have
        chosen to use their eligibility to play for these nations. Wales is also quite low, and they could be one of the reasons England is so
        high, as a lot of the Welsh national team were born in England.
      </p>
      <LicensedBar x={'PFB_NAT_PCTG'} xText="Percentage of National Team that was born in the Country"
      title="Percentage of National Team that was born in the Country" xHover="Percentage of National Team that was born in the Country"/>
      <p className={'mb-8 w-2/4 leading-7'}>
        This chart is showing the percentage of players that are comprise a national team who are born in that country.
        You can see that most national teams are comprised of at least 85% of players who are born in their country, with the ones that are
        wholly composed of nationals being South Korea, Saudi Arabia, Brazil, Belgium, and Argentina.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
        Something interesting that I noticed is that despite having the most overall players in the World Cup, the French team is not even
        made up of only French nationals, having four players who were born outside of France (Angola, Côte d&apos;Ivoire, Democratic Republic
        of the Congo, and Italy).
      </p>
      <ClubPolar />
      <p className={'mb-8 w-2/4 leading-7'}>
        While the World Cup is not active, football players may play for different clubs across various countries. This chart shows the clubs
        that have the most players who were called up to represent their nation at the World Cup.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
        The majority of the clubs here are a part of various regional leagues in Europe, such as Bayern Munich and Barcelona. A lot of these clubs have
        talent from around the world, so the high amount of players from this makes sense. What is more interesting is the presence of clubs Al Sadd
        and Al Hilal. This could indicate that players from the Saudi and Qatar national team are more likely to remain within their country&apos;s
        own league and national system.
      </p>
      <p className={'mb-8 w-2/4 leading-7'}>
        It is also interesting to see the lack of Latin American clubs in the top, as countries like Argentina and Brazil tend to be notable worldwide.
      </p>
    </div>
  )
}