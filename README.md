# BevoBook
#### AI-based application to allow easier access to course registration for UT students

## Inspiration
With over 11,000 courses available each semester at UT, searching for classes that fit student schedules, graduation requirements, and interests is definitely a challenge. As a team of CS students here, we've felt the struggle first-hand; we've all experienced the painstaking process of combing through the antiquated course catalog, spending way too many hours deciphering its listings. 
For busy college students, time is a precious commodity, and as the Fall 2024 registration period approaches, we understand the stress that often accompanies this crucial process. With that, we introduce [BevoBook](https://bevobook.tech) to the Longhorn community; a virtual ally and tireless assistant that dynamically understands your unique course needs, interests, and goals.

## What it does
The UT community is our number-one priority; thus, we built BevoBook with accessibility in mind.  Upon [visiting](https://bevobook.tech), you can ask BevoBook anything about your course registration for Fall 2024. BevoBook handles all the researching for you, and provides personalized suggestions and clarifications for potential classes to take next semester, based on what _you_ need.

## How we built it

On front-end side, we used Next.js 14, TypeScript, TailWind CSS, shadcn-ui, and more to design a clean, user-friendly interface that facilitates seamless communication between students and the BevoBook AI.

The data used for sourcing course registration information is sourced by scraping the [UT course registrar](https://registrar.utexas.edu/schedules) via BeautifulSoup and stored in pandas dataframes.

On the back-end side, the chat AI is fueled by the LLAMA2 model quantized to Int8 and served by CloudFlare. This process is made easier by CloudFlare.

The web-app itself is hosted via Vercel. Thanks to MLH, we're also able to host on the BevoBook.tech domain for free.

With these components, BevoBook comes together into a sleek, full stack web-app perfect for student needs.

## Challenges we ran into

- Scraping data from the UT registrar with different HTML formatting for lower-div, upper-div, and grad classes. We used BeautifulSoup4 to scrape the data with a total of 11,000 courses.

- Trying out different LLM's (i.e. Mistral 7 billion and LLAMA 7 billion) via Cloudflare API and testing them for quickest and most accurate responses.

- Vectorizing the embeddings with Scikit-learn using the TFID vectorizer.

- Filtering database data to account for character limits for LLM using cosine similarity.


## Accomplishments that we're proud of
- 50+ users on launch

## What's next for BevoBook
- **Real-Time Registrar Data**: because of authentication requirements via UT EID/utexas accounts, we had to scrape data once on our side for it to be used in the app. Looking forward, we hope to integrate BevoBook with UT authentication for live and continuous updates to reflect changes on the course registrar.
- **Better LLM's**: as students, we used the free LLM's available to us via CloudFlare, but to expand, we would like to use (currently paid) versions of the latest, more intelligent LLM's (eg. ChatGPT 4 and Claude 3 Opus).

## Sponsor Appreciation
Thanks to Cloudflare, we were able to access various LLM's (i.e. mistral, llama) and use them effectively.
Thanks to MLH & .TECH domains, we were able to access the BevoBook.tech domain for free. 
And finally, thanks to Freetail Hackers, our weekend was filled with fun development and free meals. 



