import pandas as pd

wc_df = pd.read_csv("WC Join.csv")
freq_df = pd.read_csv("World Cup Country Statistics.csv")

wc_countries = wc_df["National_Team"].unique()

def calculate_percentage(country):
  if country == 'United States':
    country = 'USA'
  if country in wc_countries:
    if country == 'USA':
      country = 'United States'
    freq_name = freq_df.loc[freq_df['COUNTRY'] == country]
    return freq_name.iloc[0]['FREQUENCY']/26, freq_name.iloc[0]['FREQUENCY']/832
  else:
    return

def calculate_diff(df):
  countries = df['National_Team'].unique()
  for country in countries:
    diff = 0
    if country == 'USA':
      country = 'United States'
    nat_team_players = df.loc[df['National_Team'] == country]
    for index, row in nat_team_players.iterrows():
      birth = row['COUNTRY']
      if(birth != country):
        diff = diff + 1
    freq_df.loc[freq_df['COUNTRY'] == country, "PLAY_FOR_BIRTH"] = 26 - diff


freq_df[['BORN_IN_VS_NAT', 'TOT_WC_PCTG']] = freq_df['COUNTRY'].apply(calculate_percentage).apply(pd.Series)
calculate_diff(wc_df)
freq_df['PFB_NAT_PCTG'] = freq_df['PLAY_FOR_BIRTH'].apply(lambda x: x/26)

freq_df.to_csv('World Cup Country Statistics.csv', index=False, encoding='utf-8')