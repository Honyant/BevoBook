#not updated version
import requests
from bs4 import BeautifulSoup
import csv

cookies = {
#add    
}

headers = {
    #add
}

base_url = 'https://utdirect.utexas.edu/apps/registrar/course_schedule/20249/results/'

# List of all fields of study and levels
# fields_of_study = ['ACC','ADV','ASE','AFR','AFS','ASL','AMS','AHC','ANT','ARA','ARE','ARI','ARC','AED','ARH','ART','AET','AAS','ANS','AST','BSN','BCH','BIO','BME','BDP','BAH','B A','BAX','BGS','CHE','CH','CHI','C E','CLA','C C','CGS','COM','CLD','CMS','CRP','C L','COE','CSE','C S','CON','CTI','CRW','CDI','EDC','CZ','DAN','DSC','D S','DES','DEV','D B','DRS','DCH','ECO','EDU','ELP','EDP','ECE','EER','ENM','E M','E S','E','ESL','ENS','EVE','EVS','EUP','EUS','FIN','F A','FLU','FR','F C','F H','G E','GRG','GEO','GER','GSD','GOV','GRS','GK','GUI','HAR','H S','HCT','HED','HEB','HIN','HIS','HDF','HDO','H E','HMN','HHM','ILA','I','ISP','INF','ITD','INB','I B','IRG','ITL','ITC','JPN','J S','J','KIN','KOR','LAR','LTC','LAT','LAS','LAW','LEB','L A','LAH','LIN','MAL','MAN','MIS','MFG','MNS','MKT','MSE','M','M E','MLS','MAS','MEL','MES','M S','MOL','MBS','MUS','NSC','N S','NEU','NOR','N','NTR','OBO','OPR','O M','ORI','ORG','PER','PRS','PGE','PGS','PHM','PHL','PPE','PED','P S','PHY','PIA','POL','POR','PRC','PSY','P A','PBH','P L','P R','RIM','RTF','R E','R S','RHE','R M','RBT','RUS','REE','SAN','SAX','STM','STC','S C','SEL','S S','S W','SOC','SPN','SPC','SED','SLH','STA','SDS','SUS','SWE','TAM','TXA','T D','TRO','TRU','TBA','TUR','T C','UKR','UGS','U D','URB','URD','UTL','UTS','VIA','VIO','V C','VOI','WGS','WRT','YID']  # Add all the field codes
fields_of_study = ['C S']
levels = ['G']

# Open the CSV file for writing
with open('course_data.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['Field', 'Level', 'Unique', 'Days', 'Hour', 'Room', 'Instruction Mode', 'Instructor', 'Status', 'Flags', 'Core', 'Description']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for fos in fields_of_study:
        for level in levels:
            params = {
                'ccyys': '20249',
                'search_type_main': 'FIELD',
                'fos_fl': fos,
                'level': level,
                'x': '56',
                'y': '1'
            }

            url = base_url

            while True:
                response = requests.get(url, params=params, cookies=cookies, headers=headers)
                soup = BeautifulSoup(response.text, 'html.parser')
                # print(response.text)
                # print(soup)
                # Find and extract course information from the page
                courses = soup.select('table.results tr')


                for course in courses:

                    cells = course.select('td')
                    print(cells, len(cells))
                    if len(cells) >= 0:
                        unique = cells[0].get_text(strip=True)
                        days = cells[1].get_text(strip=True)
                        hour = cells[2].get_text(strip=True)
                        room = cells[3].get_text(strip=True)
                        instruction_mode = cells[4].get_text(strip=True)
                        instructor = cells[5].get_text(strip=True)
                        status = cells[6].get_text(strip=True)
                        flags = [flag.get_text(strip=True) for flag in cells[7].select('li')]
                        core = [core.get_text(strip=True) for core in cells[8].select('li')]

                        # Get the course description from the details page

                        course_url = 'https://utdirect.utexas.edu' + cells[0].select_one('a')['href']
                        print("course url", course_url)
                        course_response = requests.get(course_url, cookies=cookies, headers=headers)
                        course_soup = BeautifulSoup(course_response.text, 'html.parser')
                        description = ' '.join(p.get_text(strip=True) for p in course_soup.select('#details p'))

                        writer.writerow({
                            'Field': fos,
                            'Level': level,
                            'Unique': unique,
                            'Days': days,
                            'Hour': hour,
                            'Room': room,
                            'Instruction Mode': instruction_mode,
                            'Instructor': instructor,
                            'Status': status,
                            'Flags': ', '.join(flags),
                            'Core': ', '.join(core),
                            'Description': description
                        })

                # Check if there is a next page
                next_link = soup.select_one('#next_nav_link')
                if next_link:
                    url = base_url + next_link['href']
                else:
                    break

print("Course data has been written to course_data.csv")
