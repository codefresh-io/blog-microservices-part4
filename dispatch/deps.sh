mkdir deps;
cd deps;
git init;git remote add -f origin https://github.com/codefresh-io/blog-microservices-part4.git
git pull --depth=1 origin microservices_split;
cd ..;
npm i ./deps/registry
npm i ./deps/logger
rm -rf deps;
