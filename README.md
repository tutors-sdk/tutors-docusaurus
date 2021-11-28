# Tutors Docusaurus 

Clone the Repo:

~~~
git clone git@github.com:BenCapper/docusaurus.git
~~~

Edit the files in the docs folder, then, in git bash, rebuild with:

~~~
npx run build
~~~

Go to Netlify -> Sites, then drag the build folder into the box

**or**

Create a Git repo then upload the docusaurus folder to the new repo

Next, go to Netlify and select New site from Git, choose the repo you just created

In Basic build settings:

~~~
Build command: yarn build
Publish directory: build
~~~

Select Deploy site, after a short time the site should be live