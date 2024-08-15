import os
import csv
import requests

# Specify the path to your CSV file
csv_file_path = 'your_file.csv'
download_directory = 'downloaded_files'  # Specify the directory to save downloaded files

# Create the download directory if it doesn't exist
if not os.path.exists(download_directory):
    os.makedirs(download_directory)

# Open and read the CSV file
with open(csv_file_path, mode='r', newline='', encoding='utf-8') as file:
    reader = csv.reader(file)
    
    # Skip the header row if present
    next(reader, None)

    for row in reader:
        file_name = row[0]  # Column A
        file_url = row[1]   # Column B
        
        # Download the file from the URL
        response = requests.get(file_url)
        
        # Save the file with the name from Column A
        with open(os.path.join(download_directory, file_name), 'wb') as downloaded_file:
            downloaded_file.write(response.content)
        
        print(f"Downloaded and saved: {file_name}")

print("All files have been downloaded and renamed.")
