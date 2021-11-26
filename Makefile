SHELL=/bin/bash

PROJECT_NAME=my_project_name

CD=cd ./${PROJECT_NAME} &&


main: run

init: 
	./setup/set-new-react-project.bash


install:
	${CD} npm install


# make test args=my_app
tests:
	${CD} npm test ${args}


build:
	${CD} npm run build


tra:
	echo tra


run:
	${CD} npm start


check:
	echo check


production:
	- git fetch origin production
	git checkout production || git checkout -b production
	git merge main
	git push origin production 
	git checkout main
