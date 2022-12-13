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