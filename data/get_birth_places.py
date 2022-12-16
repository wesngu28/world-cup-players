import requests
import re
from bs4 import BeautifulSoup
import pandas as pd


def name_manipulation(player_name: str, rvr: bool):
    name_parts = player_name.split()

    # for redirect links with born in it
    if ('born' not in name_parts):
        name_parts = [word[0].upper() + word[1:].lower() for word in name_parts]

    if (rvr):
      last_word = name_parts[-1]
      name_parts = name_parts[:-1]
      name_parts.insert(0, last_word)

    player_name = " ".join(name_parts)

    return player_name


def get_place_of_birth(player_name: str, rvr: bool, dob: str) -> str:
  try:
    date = dob.split("/")
    year = date[2]
    reversed_name = name_manipulation(player_name, rvr)
    url = f'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&page={reversed_name}'

    response = requests.get(url)
    response_json = response.json()
    page_text = response_json['parse']['text']['*']
    soup = BeautifulSoup(page_text, 'html.parser')
    sidebar = soup.find('table', class_='infobox vcard')

    if sidebar:
        place_of_birth_row = sidebar.find('th', text='Place of birth')
        td_element = place_of_birth_row.find_next_sibling('td')
        place_of_birth = td_element.text
        return place_of_birth
    else:
        # assume duplicate name disamb, in this case just get the disamb with
        # the specified birth year. this doesn't always work since sometimes
        # another person has the same birth year
        a_tag = soup.find_all(lambda tag: len(
            tag.find_all()) == 0 and year in tag.text)

        if (len(a_tag) == 0):
            # guess its just diacritic/other disamb
            a_tag = soup.find("a")
        else:
            a_tag = a_tag[0]

        if a_tag:
            pob = get_place_of_birth(a_tag.text, False, dob)
            return pob
        else:
            pob = get_place_of_birth(player_name, False, dob)
            return pob

  except:
    return f"{player_name} error"

# df = pd.read_csv("data/World Cup players - Official scrapped list.csv")

def traverse_df_for_birth():
    for index, player in df.iterrows():
        place_of_birth = ''

        place_of_birth = get_place_of_birth(
            player["PLAYER NAME"], True, player["DOB"])

        if 'error' in place_of_birth:
            player_name = player["PLAYER NAME"]
            name_parts = player_name.split()

            if ('born' not in name_parts):
                name_parts = [word[0].upper() + word[1:].lower()
                            for word in name_parts]
                player_name = " ".join(name_parts)

            place_of_birth = get_place_of_birth(player_name, False, player["DOB"])

        print(player["PLAYER NAME"] + " " + place_of_birth)

        df.loc[index, 'Birth'] = re.sub(
            r"\[(.*)\]", "", place_of_birth).replace('\n', '')

        df.to_csv('data/World Cup.csv', index=False, encoding='utf-8')

# Manually fix all other errors

df = pd.read_csv("WC Join.csv")

def case_fix(player_name: str):
    name_parts = player_name.split()
    name_parts = [word[0].upper() + word[1:].lower() for word in name_parts]
    player_name = " ".join(name_parts)
    return player_name

# df["PLAYER_NAME"] = df["PLAYER_NAME"].apply(case_fix)
# df.to_csv('WC Join.csv', index=False, encoding='utf-8')