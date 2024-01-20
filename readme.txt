install pug and pug-cli globally

sudo npm install pug-cli --global
sudo npm install pug --global

make an html directory and a file index.pug on the root folder

inside index.pug file
type:

'doctype html'

save and then watch pug with:
pug -w ./ -o ./html

the output of index.pug goes to html folder and there creates a file index.html

pug compiles to native html syntax:


Part 1

doctype html
html
    head 
        h1 This is a good title
        p This is paragraph text
        p. 
            This is a 
            multiline text
        ul 
            li This is item1
            li This is item2
            li This is item3

paste into pug and run it:


ID & CLASSES:

doctype html 
html 
    head 
    body 
    h1.title this is a title 
    p#para1 this is a p of id para1 
    .cool-div this is a DIV of class cool-div
    p#para-ml. 
        this is a multiline 
        paragraph with id of para-ml


ATTRIBUTES:

- use JS inside pug to create dynamic html elements
- iterate through array 
- add inline styles 
- using '&attributes' to add attributes to img tag
- apply extra attributes like disabled
- add different doctypes to document eg:(doctype htmx or doctype transitional)


doctype html 
html 
    head 
    body 
        input(type="password" name="impwd" data-js=`${5 > 2 ? 'OK':'Not OK'}`)

        - const myClasses = ['class1', 'class2', 'class3']
        div.my-div(class=myClasses)

        - const myStyles = {"color": "red", "background-color": "blue"}
        div(style=myStyles)

        - const myAttributes = {"src": "my-photo.png", "alt": "this is my image"}
        img&attributes(myAttributes)

        input(type="text" disabled)
        input(type="text" disabled=false)


USING CSS: 

We can use inline / external and external css:

doctype html 
html 
    head 
        link(rel="stylesheet" href="../style.css")
        style.
            h1 {
                text-decoration: underline;
            }
    body 
        - const hstyles = { "text-align" : "center", "text-transform":"uppercase" }
        h1(style=hstyles) Hello there friends



USING FOR/EACH LOOP:

for and each keyword are interchangable

doctype html 
html 
    head 
    body 
        h1 For/Each Loop
        each n in [20, 34, 21]
            p= n
        - const messages = ['Hello', 'World', 'Prince']
        for n, i in messages
            h1= n + " - " + i
        - const grades = {"web Dev": 20, "Software Design": 100}
        for n, i in grades 
            p= n + " - " + i
        else 
            strong No values are here!
        
note: remove grades variable and change grades to []


USING CONDITIONALS IN PUG:

doctype html 
html 
    head 
        title Conditionals in Pug 
    body
        h1 My Web Application
        - let user = { name: 'Rishi', loggedIn: false, lastLogin: 25 }
        if user.loggedIn 
            p 
                | Welcome 
                strong  #{ user.name }
        else if user.lastLogin < 10
            a(href="/login") Log in again
        else 
            a(href="/login") log in


INCLUDE:

Prevent repetition in code
Instead of copy-pasting same HTML page contents accross multiple pages

make one source file and just add 'include src/of/the/file' 
this copy pastes that file accross multiple pages

create:
two files --> about.pug index.pug
one folder --> includes --> add a file nav.pug inside it

the line that will repeat throughout the pages will be in source file i.e nav.pug

nav.pug :-

h1 company name
nav
    a(href="index.html") Home
    a(href="about.html") About Us
    a(href="gallery.html") Gallery
    a(href="contact.html") Contact Us


index.pug :-

doctype html
html
    head
        title Include in Pug
    body
        include includes/nav    <-- Paste this line 
        h1 Home Page


about.pug :-

doctype html
html
    head
        About - Includes in Pug
    body
        include includes/nav     <-- Paste this line 
        h1 About Us



MIXINS:

They are reusable block of pug codes
They behave like functions

We can display dynamic data from database as arguments


mixin comment(commentData)
    .comment
        if commentData.postedByAdmin
            em (posted by admin)
        .date= commentData.date
        .author= commentData.author 
        .text= commentData.text

doctype html 
html 
    head 
        title Mixins in Pug
        style. 
            .comment {
                font-family: sans-serif;
                line-height: 1.5;
                padding: 10px;
                border: 1px solid black;
                width: 250px;
            }

            .date { font-size: 85%; text-align: right; }
            .author { font-size: 110%; font-weight: bold; }
            .text { font-size: 100% }
    body 
        - const c = { date: '04-02-2018', author: "Rishi", text: "I'm the greatest human being" }
        +comment(c)

        - const c2 = { postedByAdmin: true, date: '04-02-2023', author: "Rishi", text: "I'm the greatest human being" }
        +comment(c2)