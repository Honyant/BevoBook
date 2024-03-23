import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def remove_extra_spaces(column):
    # Convert the column to a list of strings
    values = column.astype(str).tolist()
    
    # Remove extra spaces between words for each string
    cleaned_values = [' '.join(value.split()) for value in values]
    
    # Convert the cleaned list back to a pandas Series
    cleaned_column = pd.Series(cleaned_values)
    
    return cleaned_column


def reformat_data(df):
    # Create an empty list to store the reformatted lines
    reformatted_lines = []
    
    # Iterate over each row in the DataFrame
    for _, row in df.iterrows():
        # Get the values from the required columns
        title = row['Title']
        instructor = row['Instructor']
        mode = row['Instruction Mode']
        field = row['Field']
        level = row['Level']
        unique = row['Unique']
        days = row['Days']
        hour = row['Hour']
        room = row['Room']
        status = row['Status']
        flags = row['Flags']
        core = row['Core']
        description = row['Description']
        
        # Create the title line
        title_line = f"{title} - {instructor} ({mode})"
        reformatted_lines.append(title_line)
        
        # Create the bullet point lines
        reformatted_lines.append(f"*   \"Field\" - {field}")
        reformatted_lines.append(f"*   \"Level\" - {level}")
        reformatted_lines.append(f"*   \"Unique\" - {unique}")
        reformatted_lines.append(f"*   \"Days\" - {days}")
        reformatted_lines.append(f"*   \"Hour\" - {hour}")
        reformatted_lines.append(f"*   \"Room\" - {room}")
        reformatted_lines.append(f"*   \"Status\" - {status}")
        reformatted_lines.append(f"*   \"Flags\" - {flags}")
        reformatted_lines.append(f"*   \"Core\" - {core}")
        reformatted_lines.append(f"*   \"Description\" - {description}")
        
        # Add an empty line for separation
        reformatted_lines.append("")
    
    # Join the reformatted lines into a single string
    reformatted_string = "\n".join(reformatted_lines)
    
    return reformatted_string

def find_most_similar_courses(user_prompt, course_titles):
    # Combine the user prompt with the course titles
    documents = [user_prompt] + course_titles

    # Convert the documents into TF-IDF vectors
    tfidf_vectorizer = TfidfVectorizer().fit_transform(documents)

    # Compute the cosine similarity matrix
    cosine_matrix = cosine_similarity(tfidf_vectorizer[0:1], tfidf_vectorizer)

    # Get the indices of the courses sorted by similarity
    similar_indices = cosine_matrix.argsort()[0]

    # Get the most similar courses (excluding the user prompt itself)
    most_similar_courses = [course_titles[index-1] for index in reversed(similar_indices[:-1])]

    return most_similar_courses[:1]


