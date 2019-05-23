echo cloning new react project: $1
echo ==copy src folder
cp -rf ./src $1/
echo ==copy .babelrc
cp ./.babelrc $1/
echo ==copy .gitignore
cp ./.gitignore $1/
echo ==copy webpack.config.js
cp ./webpack.config.js $1/
echo ==copy jestsetup.js
cp ./jestsetup.js $1/
echo ==copy package.json
cp ./package.json $1/
echo "==DON'T forget to update package.json with new project related data"
