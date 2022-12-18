import Image from "next/image";
import qatar from "../../storymap/img/32925404357_7a9acb3cc5_b.jpg"

export default function About() {

  return(
    <div className={"flex flex-col items-center"}>
      <h2 className={"mt-8 mb-8 font-bold leading-5 text-[2.5rem] font-robotomono"}>
        2022 Players Web App
      </h2>
      <p className={'mb-8 md:text-center p-2 md:w-2/4 md:p-0 leading-7'}>
        This web app was initially made using ESRI&apos;s ArcGIS Story Maps feature, which is kind of like a slideshow/powerpoint/website
        maker for geography and mapping projects.
      </p>
      <p className={'mb-8 md:text-center p-2 md:w-2/4 md:p-0 leading-7'}>
        Remade with Typescript, React, Next.js, Mapbox (react GL wrapper), and chartjs. Data manipulated using BeautifulSoup, Pandas, and the Google Maps
        python wrapper.
        Original graphics made using ggplot2 in R.
      </p>
      <Image alt={"Al Janoub Stadium"} className={"md:text-center p-2 w-3/4 md:w-2/4 md:p-0"} src={qatar} />
      <p className={'mb-8 font-bold text-xl'}>Notes</p>
      <p className={'mb-8 md:text-center p-2 md:w-2/4 md:p-0 leading-7'}>
      In the making of these maps and data, I had to clean and assemble a lot of data. I first discovered that the cleaned dataset I found was
      insufficient, but they did provide a raw dataset containing information of the scraped players. I used primarily Pandas to clean the dataset
      and also get the birth locations of the players from their Wikipedia pages using the Beautiful Soup library. The script I used was not
      catch-all and thus had issues with names from countries like the Netherlands, South Korea, and Saudi Arabia/Qatar, and I had to
      manually get their birthplaces. There were around 100 of these instances. I then passed the new column of birth places into the Google Maps
      Geocoding API to get their latitude and longitude to be able to map.
      </p>
      <p className={'mb-8 md:text-center p-2 md:w-2/4 md:p-0 leading-7'}>
        The primary shapefiles I used were taken from the ArcGIS World Countries shapefile. There were some caveats and feature manipulation that
        I needed to do, however, as FIFA separates the constituent countries of the United Kingdom into their own national team. I had to merge the GADM
        shapefile of the United Kingdom.
      </p>
      <p className={'mb-8 md:text-center p-2 md:w-2/4 md:p-0 leading-7'}>
        Some interesting issues that I ran into were that while some points fit on the basemap, these same points would appear off the shapefile. I had to use
        the snap feature to get the majority of them, and then manually move the remnants. Also, players from the same city stack together. I have kept it this way,
         but this could reduce some visual clarity (but you can still click on them and browse through).
      </p>
    </div>
  )
}