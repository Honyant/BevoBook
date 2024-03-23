# -*- coding: utf-8 -*-
"""Cloudflare_API.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1sKTz7-8sdnsMbavAwgFQpTF06i3SWcZg
"""
import sys
import requests
import pandas as pd
from helper import *
from fuzzywuzzy import fuzz
from config import account_id, api_token

def run(prompt):
    model = "@cf/meta/llama-2-7b-chat-int8"
    # model = "@cf/mistral/mistral-7b-instruct-v0.1"

    crawled_courses = pd.read_csv("course_data_7.csv")
    abbreviations_df = pd.read_csv("abbreviations.csv")

    # go through each row and create a mapping from the full name to the abbreviation
    abbreviations = {}
    for _, row in abbreviations_df.iterrows():
        abbr, full = row['Abbreviation'].split(" - ")
        abbreviations[full] = abbr

    # iterate through the Title column and strip the spaces
    crawled_courses['Title'] = remove_extra_spaces(crawled_courses['Title'])
    crawled_courses['Description'] = remove_extra_spaces(crawled_courses['Description'])

    similar_courses = find_most_similar_courses(prompt, list(abbreviations.keys()))

    # get the abbreviations
    course_fields = [abbreviations[course] for course in similar_courses]

    # filter the dataset with the course fields
    crawled_courses_filtered = crawled_courses[crawled_courses['Field'].isin(course_fields)]

    # make the request
    inference = None
    while (not inference or len(inference) == 0):
        response = requests.post(
            f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/{model}",
            headers={"Authorization": f"Bearer {api_token}"},
            json={"messages": [
                {"role": "system", "content": "You are a course advisor at the University of Texas at Austin. Answer questions with a list of only course names in this list: \n\n" + str(crawled_courses_filtered['Title'].drop_duplicates())},
                {"role": "user", "content":  prompt}
            ]}
        )

        inference = response.json()
        
    # process the output
    queries = []
    for message in inference["result"]["response"].split("\n"):
        if (message and "." in message):
            queries.append(message.split(".")[1].strip().upper())

    def is_match(title):
        return any(fuzz.ratio(title.upper(), query) > 80 for query in queries)

    # create dataframe by filtering the crawled courses
    matched_courses = []
    for i, course in crawled_courses.iterrows():
        if any(fuzz.ratio(course['Title'].upper(), query) > 80 for query in queries):
            matched_courses.append(course)


    matches = crawled_courses['Title'].apply(is_match)

    # Use boolean indexing to filter the DataFrame
    matched_courses_df = crawled_courses[matches]

    # # write the dataframe in bullet point format to a file 
    return reformat_data(matched_courses_df) + "\n"

if __name__ == "__main__":
    print(run(sys.argv[1]))