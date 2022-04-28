# team-loops

[Trello Board Link](https://trello.com/b/th8LnLjG/team-loops)

[Wireframe](https://www.figma.com/file/at72rZR08hbLJHwdvZdaKp/team-loops?node-id=0%3A1)

[Domain Model](https://lucid.app/lucidchart/ef049ad0-aa31-479f-a15a-59507df6d488/edit?invitationId=inv_923e738e-2fcb-48d1-94c1-27479c612050)

[Presentation Deck](https://docs.google.com/presentation/d/1sBR5Oj1Tplxa6CRZ8JbDcvKBcovtvwVqWte0oPlhlqg/edit#slide=id.g125996a3fb6_0_127)

## Deadlines

- Mock Presentation Date: Thursday 4/28 at 5pm Pacific.
- Final Presentation Date: April 29, 2022

## Members

- Ben Choe
- Denis Rendon
- Dylan Ullrich
- Kyel Boisseau

### Cooperation Plan

- What are the key strengths of each person on the team?
  - Ben: Coding.
  - Denis: CSS, communication.
  - Dylan: Ideas/structure.
  - Kyel: Organization

- How can you best utilize these strengths in the execution of your project?

Part of our team structure is to review each piece of work, so we will get input from each team member on each member's deliverable.

- In which professional competencies do you each want to develop greater strength?
  - Ben: Becoming and efficient programmer.
  - Denis: Technical & Process.
  - Dylan: Technical.
  - Kyel: Effective teamwork and communication.

- Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

We will have each team member review each submission/merge as they occur, so that we can all maintain the same level of understanding on the project.

### Conflict Plan

- What will be your group’s process to resolve conflict, when it arises?

Vote on ideas. Tie breaker is Audrey.

- What will your team do if one person is taking over the project and not letting the other members contribute?

Talk to that person as a team.

- How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

We can support each other to develop skills that might not be our strengths.

- How will you raise concerns to members who are not adequately contributing?

Talk to that person as a team.

- How and when will you escalate the conflict if your resolution attempts are unsuccessful?

Speak with Audrey.

### Communication Plan

- What hours will you be available to communicate?

Daily check-in at 5pm Pacific Time Zone.

- What platforms will you use to communicate (ie. Slack, phone …)?

Slack is main form of communication.

- How often will you take breaks?

Once an hour for 10 minutes.

- What is your plan if you start to fall behind?

Work late.

- How will you communicate after hours and on the weekend?

Slack.

- What is your strategy for ensuring everyone’s voice is heard?

Make sure everyone has a chance to contribute.

- How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

Continue to treat each other with respect.

### Work Plan

We will assess and assign tasks during our daily meeting at 5pm Pacific. We will use Slack and remo to meet and discuss in between.

### Git Process

All files related to the project will live in our team Github repo. The project management board will be located on Trello, and a link is available on Github.

All team members have cloned the project repo in their personal projects folder.

All teammembers will review the pull request to the main branch at the end of the work day.

Dylan and Kyel will approve merge requests to main once daily during the daily team meeting.


## JavaScript Functions

| function                         | input(s)                                                   | process                                                                                    | output(s)                               |
|----------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------|
| Consturctor function new Movie() | name, mediaType, genre, year                               | creates new Movie Object                                                                   | new Movie                               |
| addMovieToLocalStorage           | Movie Object                                               | stringifies Movie Object, adds to local storage                                            | localStorage entry                      |
| selectHandler()                  | HTML event                                                 | takes event.tgt and adds to moviesArray                                                    | entry to moviesArray                    |
| renderMediaForLater()            | mediaArray                                                 | renders saved for later list to DOM                                                        | HTMLCollection; canvas#watch-later-list |
| quizFormHandler()                | event, dom element input:prefGenreprefMediaType,prefDecade | takes preferences and filters list from localStorage, parses, and presents to User in HTML | DOM list element                        |
| selectMediaHandler()             | event                                                      | takes selected movie/show from filtered list and adds to localStorage                      | localStorage entry                      |

## Project Database

| title                      | mediaType | genre  | year | src                 |
|----------------------------|-----------|--------|------|---------------------|
| Fight Club                 | Movie     | Drama  | 1999 | fightclub.jpg       |
| The Dark Knight            | Movie     | Action | 2008 | darkknight.jpg      |
| Forrest Gump               | Movie     | Drama  | 1994 | ForrestGump.jpg     |
| Goodfellas                 | Movie     | Drama  | 1990 | goodfellas.jpg      |
| Inception                  | Movie     | Action | 2010 | Inception.jpg       |
| Pulp Fiction               | Movie     | Drama  | 1994 | pulpfiction.jpg     |
| Se7en                      | Movie     | Drama  | 1995 | Se7en.jpg           |
| The Shawshank Redemption   | Movie     | Drama  | 1994 | shawshank.jpg       |
| The Godfather              | Movie     | Drama  | 1972 | thegodfather.jpg    |
| The Matrix                 | Movie     | Action | 1999 | thematrix.jpg       |
| Avatar: The Last Airbender | TV Show   | Action | 2005 | avatarairbender.jpg |
| The Mandalorian            | TV Show   | Action | 2019 | themandalorian.jpg  |
| Succession                 | TV Show   | Drama  | 2018 | succession.jpg      |
| The Sopranos               | TV Show   | Drama  | 1999 | sopranos.jpg        |
| House                      | TV Show   | Drama  | 2004 | house.jpg           |
| Breaking Bad               | TV Show   | Drama  | 2008 | breakingbad.jpg     |
| Black Mirror               | TV Show   | Drama  | 2011 | blackmirror.jpg     |
| Better Call Saul           | TV Show   | Drama  | 2015 | bettercallsaul.jpg  |
| Battlestar Galactica       | TV Show   | Action | 2004 | battlestar.jpg      |
| Game of Thrones            | TV Show   | Action | 2011 | gameofthrones.jpg   |
