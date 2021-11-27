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
	sed -i -e "s/<title>React App<\/title>/<title>${name}<\/title>/g" ./${name}/public/index.html
}


setup-react-public() {
	static_path=./${name}/public/static
	images_path=./${static_path}/images
	
	mkdir -p ${images_path}
	
	mv ./${name}/public/favicon.ico ${images_path}/favicon.ico
	mv ./${name}/public/logo192.png ${images_path}/logo192.png
	mv ./${name}/public/logo512.png ${images_path}/logo512.png

	sed -i -e "s/\/favicon.ico/\/static\/images\/favicon.ico/g" ./${name}/public/index.html
	sed -i -e "s/\/logo192.png/\/static\/images\/logo192.png/g" ./${name}/public/index.html
	sed -i -e "s/\/logo512.png/\/static\/images\/logo512.png/g" ./${name}/public/index.html

	sed -i -e "s/favicon.ico/static\/images\/favicon.ico/g" ./${name}/public/manifest.json
	sed -i -e "s/logo192.png/static\/images\/logo192.png/g" ./${name}/public/manifest.json
	sed -i -e "s/logo512.png/static\/images\/logo512.png/g" ./${name}/public/manifest.json
}


# vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
setup-react-src() {
	mkdir -p ./${name}/static_resources/
	mv ./setup/static_resources/* ./${name}/static_resources/
}


copy-react-src() {
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
update-project-name
setup-react-public
# setup-react-src
# copy-react-src
# setup-heroku
# remove-setup-files
# commit-and-push
