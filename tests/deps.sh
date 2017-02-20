mkdir deps;
cd deps;

git init;git remote add -f origin https://github.com/codefresh-io/blog-microservices-part4.git
git pull --depth=1 origin microservices_split;
#install rest of microservices
cd ..;
npm i ./deps/registry
npm i ./deps/logger
npm i ./deps/dispatch

rm -rf deps;
