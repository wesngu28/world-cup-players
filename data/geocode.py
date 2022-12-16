import googlemaps
import pandas as pd

gmaps = googlemaps.Client(key='AIzaSyDo3eoT6-D3-6kgDEk8x_8uQJuh1Vw1cV8')

df = pd.read_csv("World Cup.csv")

def get_coord(location):
  try:
    geocode = gmaps.geocode(location)
    return geocode[0]['geometry']['location']['lat'], geocode[0]['geometry']['location']['lng']
  except:
    return 'Err'

df[['birth_lat', 'birth_long']] = df['Birth'].apply(get_coord).apply(pd.Series)
df.to_csv('World Cup.csv', index=False, encoding='utf-8')

# https://googlemaps.github.io/google-maps-services-python/docs/index.html
#  geocode(*args, **kwargs)

#     Geocoding is the process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA") into geographic coordinates (like latitude 37.423021 and longitude -122.083739), which you can use to place markers or position the map.
#     Parameters:

#         address (string) – The address to geocode.
#         components (dict) – A component filter for which you wish to obtain a geocode, for example: {'administrative_area': 'TX','country': 'US'}
#         bounds (string or dict with northeast and southwest keys.) – The bounding box of the viewport within which to bias geocode results more prominently.
#         language – The language in which to return results.

#     Return type:

#     list of geocoding results.