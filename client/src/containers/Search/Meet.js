import React, {Component} from "react";
import Mdcard from "../../components/mdcard/Mdcard";
import CardFooterInfo from "../../components/cardFooterInfo/cardFooterInfo";
import MeetButton from "../../components/meetButton/meetButton";
import "./Meet.css";
import { Spacer, Text, Card, Row, User, Link} from '@zeit-ui/react';

export default class Meet extends Component {

    state = {
        meetCard: 'first'
    }
    
    render(){

    const projectsFound = true;
    const initialSource = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
<Markdown source="# Your markdown here" />,
document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | meh  | woah |
| *foo* | **bar** | ~~baz~~ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`;
    const profileData = [
        {
        role: "Software Engineer",  
        company: "Facebook",
        date: "June 2018 – Present",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descBullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            "id": 268808844,
            "name": "0.4.2-gitmeet",
            "url": "https://github.com/MLH-Fellowship/0.4.2-gitmeet",
            "description": "Git Meetin'",
            "language": "JavaScript",
            "license": "Apache-2.0"
        },
        {
            "id": 269035100,
            "name": "0.4.2-gitmeet",
            "url": "https://github.com/smartclash/0.4.2-gitmeet",
            "description": "Git Meetin'",
            "language": null
        },
        {
            "id": 268501699,
            "name": "reviewing-a-pull-request",
            "url": "https://github.com/smartclash/reviewing-a-pull-request",
            "description": null,
            "language": "HTML",
            "license": "MIT"
        },
        {
            "id": 268460095,
            "name": "markdown-portfolio",
            "url": "https://github.com/smartclash/markdown-portfolio",
            "description": null,
            "language": null,
            "license": "MIT"
        },
    ];

    const user = [
        {
            "user": {
                "_id": "5ed91ea2cd615b0017fddde3",
                "repos": [],
                "github": "16922883",
                "username": "smartclash",
                "email": "xalphamanx@tuta.io",
                "avatar": "https://avatars3.githubusercontent.com/u/16922883?v=4",
                "__v": 0,
                "city": "fakeCityBoi"
            }
        }
    ];

    const md1 = `
# Octo Release Draft Couscous

<p align="center">
    <img style="height:250px;width:250px" src="https://user-images.githubusercontent.com/48270786/78556023-d757be00-782b-11ea-9588-8ea2327df64b.png">
</p>

<br>


<p align="center">
    <b>Automate drafting release notes process for your project.</b>
</p>

A GitHub action to automatically draft a GitHub release based on a newly created version tag.

The drafted release notes will include the commit messages between the created version tag and the one before it.

## What is a Couscous?

<i>Couscous originated as a Maghrebi dish of small steamed balls of crushed durum wheat semolina that is traditionally served with a stew spooned on top.</i>

I took this excerpt from [Wikipedia](https://en.wikipedia.org/wiki/Couscous) and didn't know it existed before naming the action. The idea for the name came from Github's randomly generated name suggestions on creating a repository so I just sticked with it.

## How a Release Draft Couscous is Prepared:

Example: Let's assume the history of your repository looks like this:


    ┌────┐      ┌────┐
    │ v1 │      │ v2 │           # Release Notes will include
    └────┘      └────┘
        │           │     ━━━━▶   - D
        ▼           ▼             - C
    A ─ ─ B ─ ─ C ─ ─ D


Here, v2 is the last created version tag. When octorelease-couscous runs, it will draft a release with the commit messages for C and D as the release notes.

If the created version tag is the first one in the repository, then all commit messages from the beginning of the repository's history will be included in the release notes:


                ╔════╗           # Release Notes will include
                ║ v1 ║
                ╚════╝           - D
                    │    ━━━━▶   - C
                    ▼             - B
    A ─ ─ B ─ ─ C ─ ─ D             - A


In this case, the release notes will contain the messages for A, B, C and D.

A version tag is an [annotated tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_annotated_tags) whose name starts with the prefix v followed by one or more characters. This means v1, v.1, v1.0.0 and v1.0.0-beta1 are all valid version tags. To learn more about semver or Semantic Versioning read [here](https://semver.org).

## Input:

### repo-token

**(Required)** The GITHUB_TOKEN is used to access the current repository from the GitHub REST API to get commit details.

## Output:

### release-url

The URL of the GitHub release draft cooked up. Defaults to an empty string.

## Usage

An example of a workflow that listens for the create event and automatically creates a release draft with the commit messages as release notes. It also prints the URL of the release page to the build log.

yaml
name: Test
on:
    create:
jobs:
    release:
    name: Release
    runs-on: [windows-latest, ubuntu-latest]
    steps:
        - name: Create a release draft for a version tag
        id: create-release-draft
        uses: kartik918/octorelease-couscous@v1
        with:
            repo-token: secrets.GITHUB_TOKEN
        - name: Print the URL of the release draft
        if: steps.create-release-draft.outputs.release-url != ''
        run: echo steps.create-release-draft.outputs.release-url

## How It Works:

I made the following graphic to explain (my future self) how a release couscous is prepared (I should stop with the puns). 

<p align="center">
    <img src="https://user-images.githubusercontent.com/48270786/78558625-91512900-7830-11ea-91bf-cd307167a98b.png">
</p>

### Uses:
- GitHub REST API 
- Built upon gh-action Typescript template

`;

const md2 = `
<h1 align="center">
  <br>CamAlert<br>
</h1>

<h4 align="center">
    CamAlert turns old camera hardware or existing camera into intelligent camera system
</h4>

## Screenshots

![Homepage](MobileApp/screenshots/1.png "Homepage")
![Menu](MobileApp/screenshots/2.png "Menu")
![NowPlaying](MobileApp/screenshots/3.png "Landing page")

## Getting Started

The desktop app is based on electron with express server and uses OpenCV for AI features.
The mobile app is wrapped in Cordova

### Installing

Clone the repo then use


$cd DesktopApp/
$npm install


To start the app use


$npm start


## Downloads
<!-- * [Releases](https://github.com/abhishekashyap/YoutubeMusic/releases) -->

## Built With

* [Electron](https://electronjs.org) - The web framework used for development of desktop GUI applications.

* [Socket.io](https://socket.io) - Socket.IO enables real-time bidirectional event-based communication.

## Coming soon

* Crowd detection
* Face recognition based attendance system
* Fire detection
* Stable version
* Screenshots

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details
`;

    if(projectsFound){
        return (
            <div className="containerMeet">

                <Spacer y={1.5}/>

                    <Text h2 type="default">
                        Found the coolest projects in your area!
                    </Text>

                <Spacer y={1.5}/>

                {this.state.meetCard === 'first' && 
                    <Card shadow type="lite" id="md-container">
                        <Mdcard input={md1} />
                    <Card.Footer>
                    <div className="cardFooter">
                        <div className="cardFooterLeft">
                            <User src="https://avatars0.githubusercontent.com/u/48270786?s=460&u=dab5f6dc64923f646b354f47f52af65f44fd9e7e&v=4" name="Kartik Choudhary">
                                <User.Link target="_blank" href="https://github.com/kartik918">kartik918</User.Link>
                            </User>
                        </div>
        
                        <Link className="cardFooterRight" color target="_blank" href="mailto:kartikc.918@gmail.com">
                            <Text>kartikc.918@gmail.com</Text>
                        </Link>
                    </div>
                    </Card.Footer>
                    </Card>
                }

                {this.state.meetCard === 'second' && 
                    <Card shadow type="lite" id="md-container">
                        <Mdcard input={md2} />
                    <Card.Footer>
                    <div className="cardFooter">
                        <div className="cardFooterLeft">
                            <User src="https://avatars3.githubusercontent.com/u/16922883?v=4" name="Karan Sanjeev">
                                <User.Link target="_blank" href="https://github.com/kartik918">alphaman</User.Link>
                            </User>
                        </div>
        
                        <Link className="cardFooterRight" color target="_blank" href="mailto:kartikc.918@gmail.com">
                            <Text>yo@alphaman.me</Text>
                        </Link>
                    </div>
                    </Card.Footer>
                    </Card>
                }

                {this.state.meetCard === 'third' && 
                    <Card shadow type="lite" id="md-container">
                        <Mdcard input={md2} />
                    <Card.Footer>
                    <div className="cardFooter">
                        <div className="cardFooterLeft">
                            <User src="https://avatars0.githubusercontent.com/u/29458374?s=460&u=1ba41b270e9369be20bfa7424ad353ec7ca984bd&v=4" name="Abhishek Kashyap">
                                <User.Link target="_blank" href="https://github.com/kartik918">abhishekkashyap</User.Link>
                            </User>
                        </div>
        
                        <Link className="cardFooterRight" color target="_blank" href="mailto:kartikc.918@gmail.com">
                            <Text>abhishekkashyap@gmail.com</Text>
                        </Link>
                    </div>
                    </Card.Footer>
                    </Card>
                }
                    

                <Spacer y={3}/>

                <a onClick={() => {
                    this.setState(() => ({
                      meetCard: 'second'
                    }));}} >
                    <MeetButton />
                </a>

                <Spacer y={6}/>

            </div>
        )
    }

    return(
        <div className="noProjects">
            <Card shadow type="alert">
                <Row span={6} justify="center">
                    <Text h1 style={{color:"black"}}>Oops</Text><Text h1>, no active projects in your area.</Text>
                </Row>
            </Card>
        </div>
    )
}
}