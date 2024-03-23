```py
# Define your string
my_string = crawled_courses.to_markdown()

# Specify the file path
file_path = "output.txt"

# Open the file in write mode
with open(file_path, "w") as file:
    # Write the string to the file
    file.write(my_string)

print("String has been written to the file successfully.")
```
