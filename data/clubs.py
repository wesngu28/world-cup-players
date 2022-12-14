import pandas as pd

df = pd.read_csv("WC Join.csv")

wc_countries = df["CLUB"].value_counts()

wc_countries.to_csv('Clubs.csv', encoding='utf-8')