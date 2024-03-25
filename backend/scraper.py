#not updated version
import requests
from bs4 import BeautifulSoup
import csv

cookies = {
    '_ga_MTWYGF4WML': 'GS1.1.1691362519.1.0.1691362519.0.0.0',
    '_ga_6XZRW71GP4': 'GS1.2.1691992289.1.0.1691992289.0.0.0',
    '_ga_NZJR3MGQR4': 'GS1.2.1692052010.1.0.1692052010.0.0.0',
    'csrftoken-studentfinancials.agreements-Prod': 'ovzCGwHyX6O7fiO3kAfCvyUCxiZFm6qbz3ekDtZS72HBo8Qpx8WYd5xqx6kr3CYs',
    '_ga_3TTD98NC5H': 'GS1.1.1692164686.1.1.1692165266.60.0.0',
    '_ga': 'GA1.1.610450777.1691362520',
    '_ga_YDXMR82HQY': 'GS1.1.1692165484.1.1.1692165502.42.0.0',
    '_ga_ZS7E684HR5': 'GS1.1.1692165484.1.1.1692165502.0.0.0',
    'csrftoken-degree.minors-Prod': '368KhiUygRL7EC23P0LUfxfEGtymtPcpe3UBDj6rMUO47FsyicGCwRUQmYrNfis8',
    'csrftoken-studentfinancials.mytuitionbill-Prod': 'CyV5NRhMY6gG14fGe74uM3AfoQnvfBWoCcrp8rqHAM6sD2Kwtex0vnl8fpIOjjTd',
    'csrftoken-degree.audits-Prod': 'dDUdmJj0kTTP6VWj2cd6yNJiviFXN7lXgYErrmTkkIcyP9Tavlyhz4HSctsU4Le0',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fregistrar%2Fpreq%2Fcheck.WBX%3Fs_submit%3DY%26s_tc_dpt%3DC%2520S%26s_tc_nbr%3D363M%26s_tc_ccyys%3D20242': '_f4b54cb1e94061d9ff9d91ccbdeba5b8',
    'ut_persist': '1896261824.47873.0000',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fut_planner%2Fenter%2Fprod%2F': '_439619532f2eb99140380b9620ba0edd',
    'sessionid-cpfm.worqs-Prod': 'ff32qqetny5fnm2vohhkxcvk46llg6vr',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fstudentfinancials%2Fmytuitionbill%2Fstatic%2Fselfservui%2Fimages%2Fdown-arrow.svg': '_b5a8d4b5eef3543659d1d45b5a91cab6',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fstudentfinancials%2Fmytuitionbill%2Fstatic%2Fselfservui%2Fimages%2Fut_logo_informal_orange.svg': '_13285d674444facef691c390c4ef4b0c',
    'degree-audits-csrftoken-PROD': 'G6j5ozRfCxx0QuLqQWiL8t42DxjYnXmB',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fdegree%2Faudits%2Frequests%2Fhistory%2F%3Fsubmit_success%3DY': '_c48bf14d14aad0f68364bc2ab793ecb5',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fdegree%2Faudits%2Fresults%2F100014487165%2F': '_c83a05eeac9849d5749f5c4cc81ed493',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fregistration%2Fregistration.WBX%3Fs_ccyys%3D20242%26s_student_eid%3D%26s_nonce%3D0968D7BC775C4A19D63E8560545CF760AB75472C%26s_request%3DSTADD%26s_unique_add%3D51355%26s_unique_drop%3D%2B%26s_swap_unique_drop%3D%2B%26s_swap_unique_add%3D%26s_submit%3DSubmit': '_cf892646e4c14a905b636e377d68b916',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fcourse_schedule%2F20242%2Fresults%2F%3Fccyys%3D20242%26search_type_main%3DFIELD%26fos_fl%3DC%2520S%26level%3DG%26x%3D114%26y%3D9%26next_unique%3D51330': '_06c44e29ba50651e77c8f62221f5d2a9',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fcourse_schedule%2F20242': '_b8007aad028b320e95a8d7ad939b78b2',
    'ph_phc_cjuWI21zkiw3B30S2vdrLd2HtfmqRWuzZMldJrXEpPw_posthog': '%7B%22distinct_id%22%3A%22anthonyindeepspace%40gmail.com%22%2C%22%24device_id%22%3A%2218afde529c63da3-0b3a180dba7ef8-18525634-16a7f0-18afde529c73b98%22%2C%22%24user_state%22%3A%22identified%22%2C%22%24referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24referring_domain%22%3A%22www.google.com%22%2C%22%24sesid%22%3A%5B1707269898056%2C%2218d8137358279a-015e1f8056f75b-1e525637-201b88-18d813735832f59%22%2C1707269895554%5D%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%2C%22%24search_engine%22%3A%22google%22%2C%22%24user_id%22%3A%22anthonyindeepspace%40gmail.com%22%7D',
    'session_id': '439C3F3E632C428EBCCFF5B47E7D37E0BA742C13',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Ffavicon.ico': '_d403ed60de2a261b02afd16ec322ee6f',
    'ELOQUA': 'GUID=AF7D783B25F744EB82749225626754D6',
    'ELQSTATUS': 'OK',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fcourse_schedule%2F20249%2Fresults%2F%3Fccyys%3D20249%26search_type_main%3DFIELD%26fos_fl%3DC%2520S%26level%3DU%26x%3D69%26y%3D15%26next_unique%3D50710': '_3b2d26d4b636e99bb862b3a9eadbefe9',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fstudent%2Fgradereport%2Fstudent%2F%3Fccyys%3D20239%26eid%3Dayw398%26old_eid%3D': '_70d50a21bf4bd24c90e64fcd2c79bbf7',
    '_opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fregistration%2FchooseSemester.WBX': '_32b411804c92b87b42c01edf7f2719fd',
    '_shibsession_64656661756c7468747470733a2f2f75746469726563742e7574657861732e6564752f73686962626f6c657468': '_cd140230745224b6d91068c7da8b3c7f',
    'SC': 'AQEBBwID6gIQRDE1ODY5M0ExMDUzMEVBNQYkdk5XN1dOSUh4NThRejVzbVBLUGVXTEs2VGpsaWRYWTlZd3pRBAoxNzExMTYzOTA0BQwxMC4xNDYuMC4xMDMDBmF5dzM5OAoBWQiAuKtRGbwct/AxDqE6B27BDreTqvatuHHbf7+E9zWsbtdKmSuyIyYIG1CG3+qdHbUat6YYXJwNeWhbzE/Nt6NtqkI97fiGmkbGUIyJqIQUseH9ywhCi2mkQ7gDDXYvR5l6+P54mDkCfdwlwR3qg6thozYllYSk+LKBMnCrpM5loXA=',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    # 'Cookie': '_ga_MTWYGF4WML=GS1.1.1691362519.1.0.1691362519.0.0.0; _ga_6XZRW71GP4=GS1.2.1691992289.1.0.1691992289.0.0.0; _ga_NZJR3MGQR4=GS1.2.1692052010.1.0.1692052010.0.0.0; csrftoken-studentfinancials.agreements-Prod=ovzCGwHyX6O7fiO3kAfCvyUCxiZFm6qbz3ekDtZS72HBo8Qpx8WYd5xqx6kr3CYs; _ga_3TTD98NC5H=GS1.1.1692164686.1.1.1692165266.60.0.0; _ga=GA1.1.610450777.1691362520; _ga_YDXMR82HQY=GS1.1.1692165484.1.1.1692165502.42.0.0; _ga_ZS7E684HR5=GS1.1.1692165484.1.1.1692165502.0.0.0; csrftoken-degree.minors-Prod=368KhiUygRL7EC23P0LUfxfEGtymtPcpe3UBDj6rMUO47FsyicGCwRUQmYrNfis8; csrftoken-studentfinancials.mytuitionbill-Prod=CyV5NRhMY6gG14fGe74uM3AfoQnvfBWoCcrp8rqHAM6sD2Kwtex0vnl8fpIOjjTd; csrftoken-degree.audits-Prod=dDUdmJj0kTTP6VWj2cd6yNJiviFXN7lXgYErrmTkkIcyP9Tavlyhz4HSctsU4Le0; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fregistrar%2Fpreq%2Fcheck.WBX%3Fs_submit%3DY%26s_tc_dpt%3DC%2520S%26s_tc_nbr%3D363M%26s_tc_ccyys%3D20242=_f4b54cb1e94061d9ff9d91ccbdeba5b8; ut_persist=1896261824.47873.0000; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fut_planner%2Fenter%2Fprod%2F=_439619532f2eb99140380b9620ba0edd; sessionid-cpfm.worqs-Prod=ff32qqetny5fnm2vohhkxcvk46llg6vr; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fstudentfinancials%2Fmytuitionbill%2Fstatic%2Fselfservui%2Fimages%2Fdown-arrow.svg=_b5a8d4b5eef3543659d1d45b5a91cab6; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fstudentfinancials%2Fmytuitionbill%2Fstatic%2Fselfservui%2Fimages%2Fut_logo_informal_orange.svg=_13285d674444facef691c390c4ef4b0c; degree-audits-csrftoken-PROD=G6j5ozRfCxx0QuLqQWiL8t42DxjYnXmB; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fdegree%2Faudits%2Frequests%2Fhistory%2F%3Fsubmit_success%3DY=_c48bf14d14aad0f68364bc2ab793ecb5; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fdegree%2Faudits%2Fresults%2F100014487165%2F=_c83a05eeac9849d5749f5c4cc81ed493; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fregistration%2Fregistration.WBX%3Fs_ccyys%3D20242%26s_student_eid%3D%26s_nonce%3D0968D7BC775C4A19D63E8560545CF760AB75472C%26s_request%3DSTADD%26s_unique_add%3D51355%26s_unique_drop%3D%2B%26s_swap_unique_drop%3D%2B%26s_swap_unique_add%3D%26s_submit%3DSubmit=_cf892646e4c14a905b636e377d68b916; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fcourse_schedule%2F20242%2Fresults%2F%3Fccyys%3D20242%26search_type_main%3DFIELD%26fos_fl%3DC%2520S%26level%3DG%26x%3D114%26y%3D9%26next_unique%3D51330=_06c44e29ba50651e77c8f62221f5d2a9; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fcourse_schedule%2F20242=_b8007aad028b320e95a8d7ad939b78b2; ph_phc_cjuWI21zkiw3B30S2vdrLd2HtfmqRWuzZMldJrXEpPw_posthog=%7B%22distinct_id%22%3A%22anthonyindeepspace%40gmail.com%22%2C%22%24device_id%22%3A%2218afde529c63da3-0b3a180dba7ef8-18525634-16a7f0-18afde529c73b98%22%2C%22%24user_state%22%3A%22identified%22%2C%22%24referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24referring_domain%22%3A%22www.google.com%22%2C%22%24sesid%22%3A%5B1707269898056%2C%2218d8137358279a-015e1f8056f75b-1e525637-201b88-18d813735832f59%22%2C1707269895554%5D%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%2C%22%24search_engine%22%3A%22google%22%2C%22%24user_id%22%3A%22anthonyindeepspace%40gmail.com%22%7D; session_id=439C3F3E632C428EBCCFF5B47E7D37E0BA742C13; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Ffavicon.ico=_d403ed60de2a261b02afd16ec322ee6f; ELOQUA=GUID=AF7D783B25F744EB82749225626754D6; ELQSTATUS=OK; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fregistrar%2Fcourse_schedule%2F20249%2Fresults%2F%3Fccyys%3D20249%26search_type_main%3DFIELD%26fos_fl%3DC%2520S%26level%3DU%26x%3D69%26y%3D15%26next_unique%3D50710=_3b2d26d4b636e99bb862b3a9eadbefe9; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fapps%2Fstudent%2Fgradereport%2Fstudent%2F%3Fccyys%3D20239%26eid%3Dayw398%26old_eid%3D=_70d50a21bf4bd24c90e64fcd2c79bbf7; _opensaml_req_https%3A%2F%2Futdirect.utexas.edu%2Fregistration%2FchooseSemester.WBX=_32b411804c92b87b42c01edf7f2719fd; _shibsession_64656661756c7468747470733a2f2f75746469726563742e7574657861732e6564752f73686962626f6c657468=_cd140230745224b6d91068c7da8b3c7f; SC=AQEBBwID6gIQRDE1ODY5M0ExMDUzMEVBNQYkdk5XN1dOSUh4NThRejVzbVBLUGVXTEs2VGpsaWRYWTlZd3pRBAoxNzExMTYzOTA0BQwxMC4xNDYuMC4xMDMDBmF5dzM5OAoBWQiAuKtRGbwct/AxDqE6B27BDreTqvatuHHbf7+E9zWsbtdKmSuyIyYIG1CG3+qdHbUat6YYXJwNeWhbzE/Nt6NtqkI97fiGmkbGUIyJqIQUseH9ywhCi2mkQ7gDDXYvR5l6+P54mDkCfdwlwR3qg6thozYllYSk+LKBMnCrpM5loXA=',
    'DNT': '1',
    'Referer': 'https://utdirect.utexas.edu/apps/registrar/course_schedule/20249/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="123", "Not:A-Brand";v="8"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
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
