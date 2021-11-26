#!/bin/bash

set -eu

# Fail on a single failed command in a pipeline
set -o pipefail 


echo -n "Project Name: "
read name


start-react-project() {
	npx create-react-app ${name}
}


update-project-name() {
	sed -i -e "s/my_project_name/${name}/g" ./Makefile
	sed -i -e "s/my_project_name/${name}/g" ./README.md 
}


# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
setup-react-settings() {
	mkdir ./${name}/${name}/settings/
	mv ./${name}/${name}/settings.py ./${name}/${name}/settings/base.py
	mv ./setup/settings/* ./${name}/${name}/settings/
}


setup-react-static() {
	mkdir -p ./${name}/static_resources/
	mv ./setup/static_resources/* ./${name}/static_resources/
}


setup-kubernetes() {
	mv ./setup/Dockerfile ./
	mv ./setup/manifest ./
}


copy-react-apps() {
	mv ./setup/apps/urls.py ./${name}/${name}/urls.py
	mv ./setup/apps/* ./${name}/
}


setup-heroku() {
	echo "release: cd ${name} && python3 manage.py migrate" > ./Procfile
	echo "web: gunicorn --chdir ${name} --workers 3 ${name}.wsgi" >> ./Procfile
	echo "python-3.9.6" > ./runtime.txt
}


# remove-setup-files() {
# 	rm -rf ./setup/
# }

# commit-and-push() {
# 	code .
# 	git add .
# 	git commit -m "setting up a new React project"
# 	git push origin main 
# }


start-react-project
# update-project-name
# setup-react-settings
# setup-react-static
# setup-kubernetes
# copy-react-apps
# setup-heroku
# remove-setup-files
# commit-and-push
