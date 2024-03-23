# -*- coding: utf-8 -*-
"""Cloudflare_API.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1sKTz7-8sdnsMbavAwgFQpTF06i3SWcZg
"""
import sys
import requests
import pandas as pd
from helper import client
from helper import *
from fuzzywuzzy import fuzz
from config import account_id, api_token, gpt_api_key

class CourseSelector:
    def __init__(self):
        self.premium = True
        

        self.crawled_courses = pd.read_csv("course_data_7.csv")
        self.abbreviations_df = pd.read_csv("abbreviations.csv")

        # go through each row and create a mapping from the full name to the abbreviation
        self.abbreviations = {}
        for _, row in self.abbreviations_df.iterrows():
            abbr, full = row['Abbreviation'].split(" - ")
            self.abbreviations[full] = abbr

        # iterate through the Title column and strip the spaces
        self.crawled_courses['Title'] = remove_extra_spaces(self.crawled_courses['Title'])
        self.crawled_courses['Description'] = remove_extra_spaces(self.crawled_courses['Description'])

    def run(self,prompt):

        model = "@cf/meta/llama-2-7b-chat-int8"
        # model = "@cf/mistral/mistral-7b-instruct-v0.1"

        similar_courses = find_most_similar_courses(prompt, list(self.abbreviations.keys()))

        # get the abbreviations
        course_fields = [self.abbreviations[course] for course in similar_courses]

        # filter the dataset with the course fields
        crawled_courses_filtered = self.crawled_courses[self.crawled_courses['Field'].isin(course_fields)]

        # make the request
        inference = None
        if self.premium:
            set_api_key(gpt_api_key)
            response = get_response2("You are a course advisor at the University of Texas at Austin. Answer questions with a list of only course names in this list, using dash as bullet points and seperated by newlines: \n\n" + str(crawled_courses_filtered['Title'].drop_duplicates()),prompt)
            inference = response.choices[0].message.content
        else:
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
            inference = inference["result"]["response"]
            
        # process the output
        queries = []
        for message in inference.split("\n"):
            if (not self.premium):
                if (message and "." in message):
                    queries.append(message.split(".")[1].strip().upper())
            else:
                if (message and "-" in message):
                    queries.append(message.split("-")[1].strip().upper())

        def is_match(title):
            return any(fuzz.ratio(title.upper(), query) > 90 for query in queries)
        
        if (not self.premium):
            matches = self.crawled_courses['Title'].apply(is_match)

            # Use boolean indexing to filter the DataFrame
            matched_courses_df = self.crawled_courses[matches][:10]
        else:
            matched_courses_df = self.crawled_courses[self.crawled_courses['Title'].isin(queries)][:10]
        
        # # write the dataframe in bullet point format to a file 
        return reformat_data(matched_courses_df) + "\n"

    def ask_gpt(self, prompt, data):
        set_api_key(gpt_api_key)
        response = get_response(prompt= prompt + ":\n\n" + data)
        return response.choices[0].message.content

if __name__ == "__main__":
    a = CourseSelector()
    data = a.run(sys.argv[1])
    # print(a.ask_gpt(sys.argv[1], data))
    print(data)