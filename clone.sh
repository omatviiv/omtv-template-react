echo cloning new react project: $1
echo ==copy src folder
mkdir -p $1/src
cp -rf ./src/* $1/src
echo ==copy babel.config.js
cp ./babel.config.js $1/
echo ==copy .flowconfig
cp ./.flowconfig $1/
echo ==copy .gitignore
cp ./.gitignore $1/
echo ==copy webpack.config.js
cp ./webpack.config.js $1/
echo ==copy jest.config.js
cp ./jest.config.js $1/
echo ==copy jestsetup.js
cp ./jestsetup.js $1/
echo ==copy package.json
cp ./package.json $1/
echo ==copy todo.md
cp ./todo-project.md $1/todo.md
echo "==DON'T forget to update package.json with new project related data"
